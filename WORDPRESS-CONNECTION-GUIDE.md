# WordPress Connection Guide — Use Later, Not Now

The website is intentionally **not connected to WordPress yet**.

When you eventually buy hosting and install WordPress, use WordPress only as the content-management dashboard. Readers and Google should use the main website URLs:

- `https://ranknconvert.com/blog`
- `https://ranknconvert.com/blog/article-slug`

## Future setup

### 1. Install WordPress
Use a private CMS address such as:

`https://cms.ranknconvert.com`

The exact subdomain can be different. It is only the backend/CMS address.

### 2. Test the REST API
Open:

`https://cms.ranknconvert.com/wp-json/wp/v2/posts`

It should return WordPress post data.

### 3. Add one hosting environment variable
In Vercel/your host, add:

`VITE_WORDPRESS_API_URL=https://cms.ranknconvert.com`

Do not edit source files with the WordPress URL.

### 4. Keep the CMS frontend out of Google
The folder `wordpress-setup` contains `headless-noindex.php` for this purpose. When WordPress exists, a developer can place it in:

`wp-content/mu-plugins/headless-noindex.php`

This noindexes the WordPress frontend without blocking its REST API.

### 5. Publish normally
After the connection is live, you can use:

WordPress Dashboard → Posts → Add New → Publish

The React website will fetch the post, and the public URL will remain on `ranknconvert.com/blog/...`.

### 6. Rebuild after publishing
With the current Vite architecture, the sitemap is generated at build time. Rebuild/redeploy after publishing so the new article is automatically included in `sitemap.xml`.

Part 4 can improve this further by moving the site to a rendering approach that is stronger for SEO and can automate article rendering more completely.
