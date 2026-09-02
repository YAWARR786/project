# SEO Part 3 — Blog SEO Readiness & WordPress Preparation

This phase is built on top of the completed Part 1 + Part 2 codebase. It does **not** connect a live WordPress site and does **not** change the visual frontend.

## What changed

### 1. Removed the temporary WordPress dependency
The previous hard-coded Hostinger REST API URL was removed from all live blog fetch paths.

WordPress is now controlled only by:

`VITE_WORDPRESS_API_URL`

Leave it empty until the real WordPress CMS is ready. When it is empty, the site makes no WordPress network requests and simply shows the existing empty-blog state.

### 2. Central WordPress API layer
`src/config/wordpress.ts` now normalizes the future CMS URL and exposes a single API configuration.

`src/types/wordpress.ts` handles all blog fetching and transformation so the homepage, blog archive, article page and sidebar do not carry separate WordPress URLs.

### 3. Article SEO prepared for the future CMS
When a real WordPress post is available at `/blog/:slug`, the public Rank N Convert URL now receives:

- unique SEO title
- meta description
- self-referencing canonical on `ranknconvert.com`
- index/follow robots directive
- Open Graph article metadata
- Twitter/X card metadata
- published and modified article dates
- author metadata
- featured image metadata
- `BlogPosting` structured data
- `BreadcrumbList` structured data
- `WebPage` / `WebSite` relationships

The public canonical is intentionally owned by Rank N Convert rather than the future WordPress backend domain.

### 4. Non-existent article safety
A blog slug that does not resolve to a post receives `noindex, nofollow` metadata in the React layer.

A true HTTP 404 for dynamic article URLs will be addressed with the rendering/server phase because the current Vite SPA routing still returns the application shell first.

### 5. Sitemap readiness
`scripts/generate-sitemap.mjs` always generates the existing static sitemap. If `VITE_WORDPRESS_API_URL` is configured during the build, it also fetches published WordPress slugs and adds:

`https://ranknconvert.com/blog/<post-slug>`

with each post's modified date.

If WordPress is not configured or temporarily unavailable, the build still keeps the static sitemap instead of failing.

### 6. Future WordPress duplicate-index protection
`wordpress-setup/headless-noindex.php` is included for the future WordPress installation. It is **not active now**. When installed later as a WordPress must-use plugin, it tells search engines not to index the WordPress frontend while keeping the REST API available.

### 7. No deprecated meta-keywords tag
The article template no longer outputs the old `meta name="keywords"` tag. WordPress tags/SEO keywords can still be used in structured data where appropriate.

## Visual impact

None intended. No Tailwind classes, layout structure, colors, typography, animations, service-page content or homepage design were redesigned in this phase.

## When WordPress is installed later

1. Install WordPress on a private CMS host/subdomain (for example `cms.ranknconvert.com`).
2. Confirm `https://YOUR-WORDPRESS-DOMAIN/wp-json/wp/v2/posts` works.
3. Set `VITE_WORDPRESS_API_URL` in the hosting environment.
4. Install the optional `wordpress-setup/headless-noindex.php` file as a must-use plugin.
5. Rebuild/redeploy Rank N Convert. The sitemap generator will include published posts automatically.
6. Run the live rendering/indexability audit before submitting blog URLs to Google Search Console.

## Deferred to Part 4

The site remains a Vite/React client-rendered application. Server-side/static rendering for first-response HTML, dynamic HTTP 404s, and Core Web Vitals/performance work belong to the next rendering/performance phase.
