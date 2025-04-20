// src/components/BlogSidebar.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../types/wordpress';
import { BlogPost } from '../types/blog';

const BlogSidebar = ({ currentPostId }: { currentPostId?: number }) => {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts(5);
      setLatestPosts(posts.filter((post: { id: number | undefined; }) => post.id !== currentPostId).slice(0, 4));
      setLoading(false);
    };
    fetchPosts();
  }, [currentPostId]);

  return (
    <aside className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4 pb-2 border-b">Latest Posts</h3>
        {loading ? (
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-100 rounded animate-pulse"></div>
            ))}
          </div>
        ) : (
          <ul className="space-y-4">
            {latestPosts.map(post => (
              <li key={post.id}>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="flex items-start gap-3 hover:text-blue-600 transition-colors"
                >
                  {post.image_url && (
                    <img 
                      src={post.image_url}
                      alt=""
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <span className="font-medium">{post.title.rendered}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Additional sidebar widgets can be added here */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4 pb-2 border-b">Categories</h3>
        {/* You would fetch categories from /wp/v2/categories */}
      </div>
    </aside>
  );
};

export default BlogSidebar;