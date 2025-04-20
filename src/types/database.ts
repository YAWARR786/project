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

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
}