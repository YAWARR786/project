import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const SITE_URL = 'https://ranknconvert.com';

const staticUrls = [
  ['/', '1.0'],
  ['/services', '0.9'],
  ['/services/technical-seo-audit', '0.8'],
  ['/services/content-strategy', '0.8'],
  ['/services/keyword-strategy', '0.8'],
  ['/services/seo-analytics', '0.8'],
  ['/services/seo-blogs', '0.8'],
  ['/services/local-seo', '0.8'],
  ['/services/custom-ai-agent-creation', '0.7'],
  ['/services/international-seo', '0.8'],
  ['/services/geo', '0.8'],
  ['/about', '0.6'],
  ['/process', '0.6'],
  ['/contact', '0.6'],
];

const externallyProvidedEnv = new Set(Object.keys(process.env));

const loadEnvFile = async (filename) => {
  try {
    const content = await fs.readFile(path.join(projectRoot, filename), 'utf8');
    for (const rawLine of content.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      const separator = line.indexOf('=');
      if (separator === -1) continue;
      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
      if (!externallyProvidedEnv.has(key)) process.env[key] = value;
    }
  } catch {
    // Environment file is optional.
  }
};

// Later files intentionally override earlier files, while real hosting
// environment variables always remain the highest-priority source.
await loadEnvFile('.env');
await loadEnvFile('.env.local');
await loadEnvFile('.env.production');
await loadEnvFile('.env.production.local');

const normalizeApiUrl = (value = '') => {
  const trimmed = value.trim().replace(/\/+$/, '');
  if (!trimmed) return '';
  return trimmed.endsWith('/wp-json') ? trimmed : `${trimmed}/wp-json`;
};

const wordpressApiUrl = normalizeApiUrl(process.env.VITE_WORDPRESS_API_URL || '');

const escapeXml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const fetchWordPressPosts = async () => {
  if (!wordpressApiUrl) return [];

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const firstResponse = await fetch(
      `${wordpressApiUrl}/wp/v2/posts?per_page=100&page=1&_fields=slug,modified,date,status`,
      { signal: controller.signal },
    );

    if (!firstResponse.ok) throw new Error(`WordPress returned ${firstResponse.status}`);

    const firstPage = await firstResponse.json();
    const totalPages = Number(firstResponse.headers.get('x-wp-totalpages') || 1);
    const posts = [...firstPage];

    for (let page = 2; page <= totalPages; page += 1) {
      const response = await fetch(
        `${wordpressApiUrl}/wp/v2/posts?per_page=100&page=${page}&_fields=slug,modified,date,status`,
        { signal: controller.signal },
      );
      if (!response.ok) throw new Error(`WordPress returned ${response.status} on page ${page}`);
      posts.push(...await response.json());
    }

    return posts.filter((post) => post.status === 'publish' && post.slug);
  } catch (error) {
    console.warn(`[sitemap] WordPress posts were skipped: ${error.message}`);
    return [];
  } finally {
    clearTimeout(timeout);
  }
};

const blogPosts = await fetchWordPressPosts();
const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
];

for (const [urlPath, priority] of staticUrls) {
  lines.push(`  <url><loc>${escapeXml(`${SITE_URL}${urlPath}`)}</loc><priority>${priority}</priority></url>`);
}

for (const post of blogPosts) {
  const lastmod = post.modified || post.date;
  lines.push(
    `  <url><loc>${escapeXml(`${SITE_URL}/blog/${post.slug}`)}</loc>${lastmod ? `<lastmod>${escapeXml(new Date(lastmod).toISOString())}</lastmod>` : ''}<priority>0.7</priority></url>`,
  );
}

lines.push('</urlset>', '');
await fs.writeFile(path.join(projectRoot, 'public', 'sitemap.xml'), lines.join('\n'), 'utf8');
console.log(`[sitemap] Generated ${staticUrls.length} static URLs and ${blogPosts.length} WordPress post URLs.`);
