import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  DEFAULT_OG_IMAGE,
  PAGE_SEO,
  SITE_NAME,
  SITE_URL,
  buildStructuredData,
  normalizePath,
  stringifyStructuredData,
  type PageSEO,
} from '../seo/schema';

const SEOManager = () => {
  const { pathname } = useLocation();
  const normalizedPath = normalizePath(pathname);

  // Individual blog articles manage their own post-specific SEO in BlogPost.tsx.
  // Skipping them here prevents duplicate/conflicting canonical and social tags.
  if (normalizedPath.startsWith('/blog/')) return null;

  const seo = PAGE_SEO[normalizedPath];
  const isKnownPage = Boolean(seo);
  const pageSEO: PageSEO = seo || {
    title: 'Page Not Found | Rank N Convert',
    description: 'The page you requested could not be found.',
    noindex: true,
  };

  const canonicalPath = isKnownPage ? normalizedPath : pathname;
  const canonical = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;
  const robots = pageSEO.noindex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const structuredData = isKnownPage && !pageSEO.noindex
    ? buildStructuredData(normalizedPath, pageSEO)
    : null;

  return (
    <Helmet>
      <title>{pageSEO.title}</title>
      <meta name="description" content={pageSEO.description} />
      <meta name="author" content="Yawar Khan" />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      <link rel="author" href={`${SITE_URL}/about`} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageSEO.title} />
      <meta property="og:description" content={pageSEO.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:secure_url" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Rank N Convert SEO services" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageSEO.title} />
      <meta name="twitter:description" content={pageSEO.description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:image:alt" content="Rank N Convert SEO services" />

      {structuredData && (
        <script type="application/ld+json">
          {stringifyStructuredData(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOManager;
