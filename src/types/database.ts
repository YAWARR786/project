export interface Project {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  technologies: string[];
  live_url?: string;
  github_url?: string;
  created_at: string;
  user_id: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  position?: string;
  company?: string;
  content: string;
  image_url?: string;
  created_at: string;
  user_id: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  image_url?: string;
  category?: string;
  read_time: number;
  created_at: string;
  user_id: string;
  slug: string;
  tags?: string[];
  meta_description: string;
  seo_title: string;
  seo_keywords: string | string[];
  
}

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
}