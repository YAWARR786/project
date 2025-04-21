// src/pages/Blog.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../types/wordpress';
import BlogSidebar from '../components/BlogSidebar';
import { BlogPost } from '../types/blog';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loading blog posts...");
    const fetchPosts = async () => {
      try {
        const data = await getPosts(10);
        console.log("Loaded posts:", data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts in Blog.tsx:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
            
            {loading ? (
              <div className="space-y-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map(post => (
                  <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
                        {post.title.rendered}
                      </h2>
                    </Link>
                    
                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.read_time} min read</span>
                      {post.category && (
                        <>
                          <span>•</span>
                          <span className="text-blue-600">{post.category}</span>
                        </>
                      )}
                    </div>

                    {post.image_url && (
                      <img 
                        src={post.image_url}
                        alt={post.title.rendered}
                        className="w-full h-64 object-cover mb-4 rounded-lg"
                      />
                    )}

                    <div 
                      className="prose mb-4"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                    />

                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 font-medium"
                    >
                      Read more →
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;