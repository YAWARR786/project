/*
  # Portfolio Database Schema

  1. New Tables
    - `projects` - Store portfolio projects
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `technologies` (text[])
      - `live_url` (text)
      - `github_url` (text)
      - `created_at` (timestamp)
      - `user_id` (uuid, references auth.users)
    
    - `testimonials` - Store client testimonials
      - `id` (uuid, primary key)
      - `client_name` (text)
      - `position` (text)
      - `company` (text)
      - `content` (text)
      - `image_url` (text)
      - `created_at` (timestamp)
      - `user_id` (uuid, references auth.users)
    
    - `blog_posts` - Store blog articles
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `excerpt` (text)
      - `image_url` (text)
      - `category` (text)
      - `read_time` (integer)
      - `created_at` (timestamp)
      - `user_id` (uuid, references auth.users)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  technologies text[] DEFAULT '{}',
  live_url text,
  github_url text,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users NOT NULL
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  position text,
  company text,
  content text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users NOT NULL
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  excerpt text,
  image_url text,
  category text,
  read_time integer DEFAULT 5,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users NOT NULL
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts DISABLE ROW LEVEL SECURITY;
-- Create policies
CREATE POLICY "Enable public read access for projects" 
ON projects FOR SELECT USING (true);

CREATE POLICY "Enable full access for project owners"
ON projects FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- For testimonials table
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable public read access for testimonials"
ON testimonials FOR SELECT USING (true);

CREATE POLICY "Enable full access for testimonial owners"
ON testimonials FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- For blog_posts (choose ONE approach)

-- Option 1: Public access (no auth required)
ALTER TABLE blog_posts DISABLE ROW LEVEL SECURITY;