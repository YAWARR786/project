import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { BlogPost, PaginationState } from '../types/database';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const POSTS_PER_PAGE = 9;

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    pageSize: POSTS_PER_PAGE,
    total: 0,
  });

  useEffect(() => {
    fetchPosts();
  }, [pagination.page, selectedCategory, searchQuery]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('blog_posts')
        .select('*', { count: 'exact' });
  
      // Apply filters
      if (selectedCategory) {
        query = query.eq('category', selectedCategory);
      }
  
      if (searchQuery) {
        query = query.or(`title.ilike.%${searchQuery}%,content.ilike.%${searchQuery}%`);
      }
  
      // Apply pagination
      const from = (pagination.page - 1) * pagination.pageSize;
      const to = from + pagination.pageSize - 1;
  
      const { data, count, error } = await query
        .order('created_at', { ascending: false })
        .range(from, to);
  
      if (error) throw error;
  
      setPosts(data as BlogPost[] || []);
      setPagination(prev => ({ ...prev, total: count || 0 }));
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setPagination(prev => ({ ...prev, page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const categories = Array.from(
    new Set(
      posts
        .map(post => post.category)
        .filter((category): category is string => Boolean(category))
    )
  );
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link to="/" className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-6">SEO & Digital Marketing Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert insights, actionable strategies, and the latest trends in SEO, content marketing, and digital growth.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl py-12">
        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              !selectedCategory
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white rounded-xl p-6 loading-shimmer h-96"></div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group animate-fade-in hover-lift"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image_url || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800'}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {post.category && (
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {formatDate(post.created_at)}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {post.read_time} min read
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;