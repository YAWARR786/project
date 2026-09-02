const rawWordPressApiUrl = (import.meta.env.VITE_WORDPRESS_API_URL || '').trim();

const normalizeWordPressApiUrl = (value: string) => {
  if (!value) return '';

  const withoutTrailingSlash = value.replace(/\/+$/, '');
  return withoutTrailingSlash.endsWith('/wp-json')
    ? withoutTrailingSlash
    : `${withoutTrailingSlash}/wp-json`;
};

/**
 * Public WordPress REST API base URL.
 *
 * Leave VITE_WORDPRESS_API_URL empty until the real WordPress CMS is ready.
 * Examples accepted:
 *   https://cms.ranknconvert.com
 *   https://cms.ranknconvert.com/wp-json
 */
export const WORDPRESS_API_URL = normalizeWordPressApiUrl(rawWordPressApiUrl);
export const isWordPressConfigured = Boolean(WORDPRESS_API_URL);

export const wordpressEndpoint = (path: string) => {
  if (!WORDPRESS_API_URL) return '';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${WORDPRESS_API_URL}${normalizedPath}`;
};
