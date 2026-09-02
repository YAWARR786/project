// src/pages/BlogPost.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import BlogSidebar from '../components/BlogSidebar';
import { getPostBySlug } from '../types/wordpress';
import { BlogPost } from '../types/blog';
import { buildBlogPostStructuredData, getBlogPostSEO } from '../seo/blog';
import { SITE_NAME, SITE_URL } from '../seo/schema';

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

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Article Not Found | {SITE_NAME}</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div>Post not found</div>
      </>
    );
  }

  const { canonical, title, description, image, authorName, dateModified } = getBlogPostSEO(post);
  const structuredData = buildBlogPostStructuredData(post);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={authorName} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="author" href={`${SITE_URL}/about`} />

        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.yoast_head_json?.og_title || title} />
        <meta property="og:description" content={post.yoast_head_json?.og_description || description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={image} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={dateModified} />
        {post.category && <meta property="article:section" content={post.category} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.yoast_head_json?.twitter_title || title} />
        <meta name="twitter:description" content={post.yoast_head_json?.twitter_description || description} />
        <meta name="twitter:image" content={post.yoast_head_json?.twitter_image || image} />

        <script type="application/ld+json">{structuredData}</script>
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
                  alt={post.image_alt || post.title.rendered}
                  className="w-full h-auto mb-8 rounded-lg"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
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
  );
};

export default BlogPostPage;
