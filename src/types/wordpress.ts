// src/services/wordpress.ts
import axios from 'axios';
import { BlogPost } from './blog';

const API_URL = 'https://aliceblue-frog-801440.hostingersite.com/wp-json';

export const getPosts = async (perPage = 10) => {
  try {
    const response = await axios.get(`${API_URL}/wp/v2/posts`, {
      params: {
        _embed: 1, // Include featured media and terms
        per_page: perPage
      }
    });
    return response.data.map(transformPostData);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const response = await axios.get(`${API_URL}/wp/v2/posts`, {
      params: {
        slug,
        _embed: 1
      }
    });
    return response.data.length ? transformPostData(response.data[0]) : null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};
const transformPostData = (post: any): BlogPost => {
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const terms = post._embedded?.['wp:term']?.flat() || [];
  const categories = terms.filter((t: any) => t.taxonomy === 'category');
  const tags = terms.filter((t: any) => t.taxonomy === 'post_tag');

  return {
    ...post,
    image_url: featuredMedia?.source_url || null,
    category: categories[0]?.name || null,
    tags: tags.map((t: any) => t.name),
    read_time: calculateReadTime(post.content.rendered),
    meta_description: post.yoast_head_json?.description || '',
    seo_title: post.yoast_head_json?.title || post.title.rendered,
    seo_keywords: Array.isArray(post.yoast_head_json?.keywords)
      ? post.yoast_head_json.keywords
      : (typeof post.yoast_head_json?.keywords === 'string'
          ? post.yoast_head_json.keywords.split(',').map((k: string) => k.trim())
          : [])
  };
};


const calculateReadTime = (content: string) => {
  const wordCount = content.split(' ').length;
  return Math.ceil(wordCount / 200); // 200 words per minute
};