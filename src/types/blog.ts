// src/types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image_url?: string | null;
  category?: string | null;
  read_time: number;
  created_at: string;
  user_id?: string | null;
  published: boolean; // Add this
  tags?: string[];
  slug: string;
  meta_description: string;
  seo_title: string;
  seo_keywords: string | string[];
}