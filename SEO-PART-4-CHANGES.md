# SEO Part 4 — Rendering, Performance & Production Readiness

This phase is built directly on the completed Parts 1–3 codebase. No CSS classes, layouts, visible copy, colors, spacing, animations, or page hierarchy were redesigned.

## Rendering improvements

- Added route-level code splitting for non-home pages so the homepage does not ship every page component in its initial application chunk.
- Added a Vite SSR build entry used only at build time; it waits for lazy route chunks before writing HTML.
- Added build-time pre-rendering for the homepage, service pages, About, Process, Contact, Blog, booking/legal routes, and a dedicated 404 page.
- Production HTML now contains the actual React page markup before JavaScript runs for the pre-rendered routes.
- Production HTML also receives the route-specific Helmet title, description, canonical, robots, Open Graph/Twitter metadata, and structured data already created in Parts 1–2.
- Updated the browser entry to hydrate pre-rendered HTML instead of replacing it.
- Development still uses the normal client render when there is no pre-rendered markup.

## Core Web Vitals / media loading

- Prioritized the main homepage consultant image with `loading="eager"` and `fetchPriority="high"` for LCP.
- Added asynchronous image decoding to performance-sensitive images.
- Added lazy loading to below-the-fold blog, testimonial, logo, and sidebar images where safe.
- Changed the broken blog fallback image reference to the existing `/og-default.png` asset.
- Added `preload="metadata"` to the About page video to avoid unnecessary up-front video transfer.
- Added early connection hints for the current external image hosts used above the fold.
- Corrected the favicon MIME type from SVG to PNG without changing the favicon URL.

## Build / caching

- Updated the production build to create the client bundle, SSR build, and route pre-render output automatically.
- Split stable third-party vendor groups at Rollup build time to improve long-term browser caching.
- Added immutable caching for fingerprinted `/assets/*` files on Vercel and Netlify.
- Added a sensible cache policy for the social preview image.

## Routing / 404

- Static routes are generated as extensionless-compatible HTML files for static hosting.
- Vercel uses `cleanUrls` and keeps only the future dynamic WordPress article fallback.
- Netlify relies on its normal file shadowing / pretty-URL behavior and keeps the future `/blog/*` fallback.
- Added `public/.htaccess` for Hostinger/Apache/LiteSpeed so extensionless pre-rendered routes, canonical redirects, future blog fallback, caching, and the real 404 page work when hosted there.
- A static `404.html` is generated for hosts to return on unknown URLs.
- Existing uppercase service URL 301 redirects remain intact.

## WordPress status

WordPress remains unconfigured unless `VITE_WORDPRESS_API_URL` is supplied. No temporary Hostinger WordPress URL was reintroduced. The future `/blog/:slug` fallback remains available for Part 3's CMS connection design.

## Production command

```bash
npm ci
npm run build
```

The build sequence is:

1. Generate sitemap.
2. Build Vite client.
3. Build temporary Vite SSR renderer.
4. Pre-render the known public routes.
5. Remove the temporary SSR output.

