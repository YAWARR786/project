# SEO Part 1 — Core Technical SEO

This version preserves the existing frontend design and focuses on the sitewide SEO foundation.

## Implemented

- Centralized route-level SEO metadata with keyword-focused, human-readable titles and meta descriptions.
- Self-referencing canonical URLs for all core static pages.
- Robots directives (`index,follow` for SEO pages and `noindex` for utility/legal pages).
- Complete Open Graph and Twitter Card metadata for core pages.
- Added a 1200×630 default social sharing image at `/public/og-default.png`.
- Replaced the old one-URL sitemap with the full indexable static site sitemap.
- Added `/robots.txt` with sitemap discovery.
- Canonicalized uppercase service URLs:
  - `/services/Custom-AI-Agent-Creation` → `/services/custom-ai-agent-creation`
  - `/services/GEO` → `/services/geo`
- Updated internal links to use the lowercase canonical URLs.
- Added permanent hosting redirects for the old uppercase URLs (Vercel + Netlify).
- Added a client-side 404 page and noindex fallback metadata.
- Changed hosting SPA rules so only real app routes are rewritten to `index.html`; unknown direct URLs are left for the host to return as 404 instead of being blanket soft-404s.

## Intentionally not changed in Part 1

- WordPress/headless blog article SEO. This remains Part 3.
- Schema/structured data. This remains Part 2.
- SSR/SSG/prerendering and Core Web Vitals work. This remains Part 4.
- Visible page copy, layout, colors, spacing, animations and styling were not redesigned.

## Deployment note

The domain used for canonicals is `https://ranknconvert.com`. If the final production domain changes, update `SITE_URL` in `src/components/SEOManager.tsx`, the sitemap URLs, and `robots.txt` before launch.
