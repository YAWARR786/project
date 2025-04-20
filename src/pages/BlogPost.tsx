// src/pages/BlogPost.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import BlogSidebar from '../components/BlogSidebar';
import { getPostBySlug } from '../types/wordpress';
import { BlogPost } from '../types/blog';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostBySlug(slug || '');
      setPost(data);
      setLoading(false);
    };
    fetchData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50">
        {/* SEO Meta Tags from Yoast */}
        <Helmet>
          <title>{post.seo_title}</title>
          <meta name="description" content={post.meta_description} />
          <meta name="keywords" content={post.seo_keywords?.join(', ')} />
          {post.yoast_head_json?.og_image?.map((img, i) => (
            <meta key={i} property="og:image" content={img.url} />
          ))}
        </Helmet>
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            {/* Main Content - Centered with max width */}
            <div className="lg:w-2/3 max-w-3xl">
              <Link to="/" className="inline-flex items-center text-blue-600 mb-8">
                <ArrowLeft className="mr-2" size={20} />
                Back to Home
              </Link>
              
              <article className="prose max-w-none mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-center">{post.title.rendered}</h1>
                
                <div className="flex items-center gap-4 text-gray-600 mb-8 justify-center flex-wrap">
                  <span className="flex items-center">
                    <Calendar className="mr-2" size={16} />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-2" size={16} />
                    {post.read_time} min read
                  </span>
                  {post.category && (
                    <span className="flex items-center">
                      <Tag className="mr-2" size={16} />
                      {post.category}
                    </span>
                  )}
                </div>

                {post.image_url && (
                  <img 
                    src={post.image_url} 
                    alt={post.title.rendered}
                    className="w-full h-auto mb-8 rounded-lg"
                  />
                )}

                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 max-w-xs">
              <BlogSidebar currentPostId={post.id} />
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default BlogPostPage;