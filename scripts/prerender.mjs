import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const routes = [
  '/',
  '/services',
  '/services/technical-seo-audit',
  '/services/content-strategy',
  '/services/keyword-strategy',
  '/services/seo-analytics',
  '/services/seo-blogs',
  '/services/local-seo',
  '/services/custom-ai-agent-creation',
  '/services/international-seo',
  '/services/seo-content-briefs',
  '/services/geo',
  '/about',
  '/process',
  '/contact',
  '/blog',
  '/book-call',
  '/privacy',
  '/terms',
];

const { render } = await import(pathToFileURL(serverEntry).href);
const baseTemplate = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

const stripFallbackSeo = (html) => html
  .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
  .replace(/\s*<meta\s+name=["']description["'][^>]*>/i, '')
  .replace(/\s*<meta\s+name=["']robots["'][^>]*>/i, '');

const templateWithoutFallbackSeo = stripFallbackSeo(baseTemplate);

const toOutputFile = (route) => {
  if (route === '/') return path.join(distDir, 'index.html');
  return path.join(distDir, `${route.replace(/^\//, '')}.html`);
};

const writeRoute = async (route, outputFile = toOutputFile(route)) => {
  const { html, head } = await render(route);
  const withHead = templateWithoutFallbackSeo.replace('</head>', `${head}\n  </head>`);
  const rendered = withHead.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.writeFile(outputFile, rendered, 'utf8');
};

for (const route of routes) {
  await writeRoute(route);
}

// Static hosts automatically use /404.html for unknown URLs, giving invalid URLs a real 404 response.
await writeRoute('/__rank-n-convert-404__', path.join(distDir, '404.html'));

await fs.rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`[prerender] Generated ${routes.length} route HTML files plus 404.html.`);
