import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { BlogPost } from '../types/database';
import { Helmet ,HelmetProvider } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<(BlogPost & { seo_keywords: string[] }) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
       // Process seo_keywords to ensure it's always an array of strings
       const processedPost = {
        ...data,
        seo_keywords: processKeywords(data.seo_keywords)
      } as BlogPost & { seo_keywords: string[] };
      setPost(processedPost);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };
  const processKeywords = (keywords: unknown): string[] => {
    if (Array.isArray(keywords)) {
      return keywords.filter((k): k is string => typeof k === 'string');
    }
    if (typeof keywords === 'string') {
      return keywords.split(',').map(k => k.trim());
    }
    return [];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-gray-200 rounded mb-8"></div>
            <div className="h-12 w-3/4 bg-gray-200 rounded mb-6"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <HelmetProvider>
    <div className="min-h-screen bg-gray-50">
      <Helmet>
          <title>{post.seo_title || post.title}</title>
          <meta name="description" content={post.meta_description || post.excerpt || ''} />
          <meta 
            name="keywords" 
            content={post.seo_keywords?.join(', ') || ''} 
          />
          <meta property="og:title" content={post.seo_title || post.title} />
          <meta property="og:description" content={post.meta_description || post.excerpt || ''} />
          {post.image_url && <meta property="og:image" content={post.image_url} />}
        </Helmet>
      {/* Header */}
      <div className="bg-blue-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-6 text-blue-100">
            <div className="flex items-center">
              <Calendar size={20} className="mr-2" />
              {formatDate(post.created_at)}
            </div>
            <div className="flex items-center">
              <Clock size={20} className="mr-2" />
              {post.read_time} min read
            </div>
            {post.category && (
              <div className="flex items-center">
                <Tag size={20} className="mr-2" />
                {post.category}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-4xl py-12">
        {post.image_url && (
          <div className="mb-12 rounded-xl overflow-hidden">
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}
        
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {Array.isArray(post.tags) && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

      </div>
    </div>
    </HelmetProvider>

  );
};

export default BlogPostPage;