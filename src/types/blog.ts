// src/types/blog.ts
export interface BlogPost {
  id: number;
  date: string;
  modified?: string;
  slug: string;
  link?: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  yoast_head_json?: {
    title?: string;
    description?: string;
    canonical?: string;
    og_title?: string;
    og_description?: string;
    og_url?: string;
    og_type?: string;
    og_image?: { url: string; width?: number; height?: number; type?: string }[];
    twitter_title?: string;
    twitter_description?: string;
    twitter_image?: string;
    keywords?: string | string[];
    robots?: Record<string, string>;
    schema?: unknown;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      name: string;
      taxonomy: string;
    }>>;
    author?: Array<{
      name: string;
    }>;
  };
  categories?: number[];
  tags?: number[];
  image_url?: string;
  image_alt?: string;
  category?: string;
  tag_names?: string[];
  author_name?: string;
  read_time?: number;
  published?: boolean;
  seo_title?: string;
  meta_description?: string;
  seo_keywords?: string[];
}
