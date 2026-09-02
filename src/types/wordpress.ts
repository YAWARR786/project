import axios from 'axios';
import { isWordPressConfigured, wordpressEndpoint } from '../config/wordpress';
import { BlogPost } from './blog';

const stripHtml = (value = '') => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const makeDescription = (post: any) => {
  const yoastDescription = post.yoast_head_json?.description?.trim();
  if (yoastDescription) return yoastDescription;

  const excerpt = stripHtml(post.excerpt?.rendered || '');
  if (excerpt.length <= 160) return excerpt;
  return `${excerpt.slice(0, 157).trimEnd()}...`;
};

const calculateReadTime = (content = '') => {
  const plainText = stripHtml(content);
  if (!plainText) return 1;
  return Math.max(1, Math.ceil(plainText.split(/\s+/).length / 200));
};

const transformPostData = (post: any): BlogPost => {
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const terms = post._embedded?.['wp:term']?.flat() || [];
  const categories = terms.filter((term: any) => term.taxonomy === 'category');
  const tags = terms.filter((term: any) => term.taxonomy === 'post_tag');
  const author = post._embedded?.author?.[0];
  const yoastKeywords = post.yoast_head_json?.keywords;

  return {
    ...post,
    image_url: featuredMedia?.source_url || undefined,
    image_alt: featuredMedia?.alt_text || stripHtml(post.title?.rendered || ''),
    category: categories[0]?.name || undefined,
    tag_names: tags.map((term: any) => term.name),
    author_name: author?.name || 'Yawar Khan',
    read_time: calculateReadTime(post.content?.rendered || ''),
    meta_description: makeDescription(post),
    seo_title: post.yoast_head_json?.title || stripHtml(post.title?.rendered || '') || 'SEO Blog | Rank N Convert',
    seo_keywords: Array.isArray(yoastKeywords)
      ? yoastKeywords
      : typeof yoastKeywords === 'string'
        ? yoastKeywords.split(',').map((keyword: string) => keyword.trim()).filter(Boolean)
        : tags.map((term: any) => term.name),
  };
};

const fetchPosts = async (perPage = 10): Promise<BlogPost[]> => {
  if (!isWordPressConfigured) return [];

  const response = await axios.get(wordpressEndpoint('/wp/v2/posts'), {
    params: {
      _embed: 1,
      per_page: Math.min(Math.max(perPage, 1), 100),
    },
  });

  return response.data.map(transformPostData);
};

/** Safe helper for secondary widgets. Returns an empty list if WordPress is unavailable. */
export const getPosts = async (perPage = 10): Promise<BlogPost[]> => {
  try {
    return await fetchPosts(perPage);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

/**
 * Main-list helper. It preserves the existing error UI when a configured
 * WordPress API fails, but returns an empty list when WordPress is not configured yet.
 */
export const getPostsOrThrow = async (perPage = 10): Promise<BlogPost[]> => fetchPosts(perPage);

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  if (!isWordPressConfigured || !slug) return null;

  try {
    const response = await axios.get(wordpressEndpoint('/wp/v2/posts'), {
      params: {
        slug,
        _embed: 1,
      },
    });

    return response.data.length ? transformPostData(response.data[0]) : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};
