import { BlogPost } from '../types/blog';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, stringifyStructuredData } from './schema';

const stripHtml = (value = '') => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

export const getBlogPostSEO = (post: BlogPost) => {
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const title = post.seo_title || stripHtml(post.title?.rendered || '') || `SEO Blog | ${SITE_NAME}`;
  const description = post.meta_description || stripHtml(post.excerpt?.rendered || '');
  const image = post.yoast_head_json?.og_image?.[0]?.url || post.image_url || DEFAULT_OG_IMAGE;
  const authorName = post.author_name || 'Yawar Khan';
  const dateModified = post.modified || post.date;

  return {
    canonical,
    title,
    description,
    image,
    authorName,
    dateModified,
  };
};

export const buildBlogPostStructuredData = (post: BlogPost) => {
  const { canonical, title, description, image, authorName, dateModified } = getBlogPostSEO(post);
  const articleId = `${canonical}#article`;
  const breadcrumbId = `${canonical}#breadcrumb`;

  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      breadcrumb: { '@id': breadcrumbId },
      mainEntity: { '@id': articleId },
      inLanguage: 'en',
    },
    {
      '@type': 'BlogPosting',
      '@id': articleId,
      headline: stripHtml(post.title?.rendered || title),
      description,
      url: canonical,
      mainEntityOfPage: { '@id': `${canonical}#webpage` },
      image: [image],
      datePublished: post.date,
      dateModified,
      author: {
        '@type': 'Person',
        name: authorName,
        ...(authorName === 'Yawar Khan' ? { url: `${SITE_URL}/about` } : {}),
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      ...(post.category ? { articleSection: post.category } : {}),
      ...(post.seo_keywords?.length ? { keywords: post.seo_keywords.join(', ') } : {}),
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'SEO Blog',
          item: `${SITE_URL}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: stripHtml(post.title?.rendered || title),
          item: canonical,
        },
      ],
    },
  ];

  return stringifyStructuredData({
    '@context': 'https://schema.org',
    '@graph': graph,
  });
};
