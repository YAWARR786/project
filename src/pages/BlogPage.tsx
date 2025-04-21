import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Home, Clock, Tag } from 'lucide-react';
import { BlogPost } from '../types/blog';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          'https://springgreen-porcupine-350347.hostingersite.com/wp-json/wp/v2/posts?_embed&per_page=100'
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        const formattedPosts = data.map((post: any) => {
          const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
          const terms = post._embedded?.['wp:term']?.flat() || [];
          const categories = terms.filter((t: any) => t.taxonomy === 'category');
          
          return {
            id: post.id,
            date: post.date,
            slug: post.slug,
            title: {
              rendered: post.title.rendered
            },
            excerpt: {
              rendered: post.excerpt.rendered.replace(/<[^>]+>/g, '')
            },
            image_url: featuredMedia?.source_url || '/default-blog-image.jpg',
            category: categories[0]?.name || 'Uncategorized',
            read_time: Math.ceil(post.content.rendered.split(' ').length / 200) || 5
          } as BlogPost;
        });
        
        setPosts(formattedPosts);
      } catch (error) {
        console.error('Error fetching WordPress posts:', error);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchAllPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Link>
            <div className="h-12 w-64 bg-gray-200 rounded-full animate-pulse mb-8"></div>
            <div className="h-6 w-80 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="bg-gray-200 h-64 w-full animate-pulse"></div>
                <div className="p-6">
                  <div className="h-4 w-24 bg-gray-200 rounded-full animate-pulse mb-4"></div>
                  <div className="h-6 w-full bg-gray-200 rounded-full animate-pulse mb-4"></div>
                  <div className="h-4 w-full bg-gray-200 rounded-full animate-pulse mb-4"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Link>
          
          <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl mx-auto text-center">
            <div className="bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
            <p className="text-lg text-gray-600 mb-8">{error}</p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2"
              >
                Try Again
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <Link 
                to="/" 
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition flex items-center gap-2"
              >
                Go Home
                <Home size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Back button and header */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group mb-8"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
            Back to Home
          </Link>
          
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
              SEO Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Latest Blog Posts
            </h1>
            <p className="text-xl text-gray-600">
              Discover actionable SEO strategies, industry trends, and expert tips to grow your online presence.
            </p>
          </div>
        </div>

        {/* Blog posts grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group"
              >
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={post.image_url} 
                      alt={post.title.rendered}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <div className="flex items-center mr-4">
                        <Clock className="mr-1" size={14} />
                        <span>{post.read_time} min read</span>
                      </div>
                      <div className="flex items-center">
                        <Tag className="mr-1" size={14} />
                        <span>{post.category}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title.rendered}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt.rendered}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" size={18} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="max-w-md mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No blog posts yet</h3>
              <p className="text-gray-500 mb-6">We're working on creating valuable content for you. Please check back soon!</p>
              <Link 
                to="/" 
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                <Home className="mr-2" size={18} />
                Return to Home
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BlogPage;