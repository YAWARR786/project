// src/types/blog.ts
export interface BlogPost {
  id: number;
  date: string;
  slug: string;
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
    og_title?: string;
    og_description?: string;
    og_image?: { url: string }[];
    keywords?: string;
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
  };
  categories?: number[];
  tags?: number[];
  image_url?: string;
  category?: string;
  read_time?: number;
  published?: boolean;
  seo_title?: string;
  meta_description?: string;
  seo_keywords?: string[];
}