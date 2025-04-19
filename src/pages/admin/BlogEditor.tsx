import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface BlogPostFormData {
  title: string;
  content: string;
  excerpt: string;
  image_url: string;
  category: string;
  read_time: number;
  slug: string;
  tags: string[];
  seo_title: string;
  seo_keywords: string[];
  meta_description: string;
}

const BlogEditor: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BlogPostFormData>({
    title: '',
    content: '',
    excerpt: '',
    image_url: '',
    category: '',
    read_time: 5,
    slug: '',
    tags: [],
    seo_title: '',
    seo_keywords: [],
    meta_description: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (value: string) => {
    setFormData(prev => ({ ...prev, content: value }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    setFormData(prev => ({ ...prev, tags }));
  };

  const handleKeywordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seo_keywords = e.target.value.split(',').map(keyword => keyword.trim());
    setFormData(prev => ({ ...prev, seo_keywords }));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const { error } = await supabase
        .from('blog_posts')
        .insert({
          title: formData.title,
          content: formData.content,
          excerpt: formData.excerpt,
          image_url: formData.image_url,
          category: formData.category,
          read_time: formData.read_time,
          slug: formData.slug || generateSlug(formData.title),
          tags: formData.tags,
          seo_title: formData.seo_title,
          seo_keywords: formData.seo_keywords,
          meta_description: formData.meta_description
        })
        .select();
  
      if (error) throw error;
      navigate('/blog');
    } catch (error) {
      console.error('Error saving post:', error);
      alert(`Error: ${(error as any).message}`);
    } finally {
      setLoading(false);
    }
  };

  // Quill editor modules configuration
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link to="/blog" className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
          <h1 className="text-5xl font-bold mb-6">
            Create New Blog Post
          </h1>
        </div>
      </div>

      {/* Editor Form */}
      <div className="container mx-auto px-6 max-w-6xl py-12">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8">
          <div className="space-y-6">
            {/* Main Content Section */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Content</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <ReactQuill
                    value={formData.content}
                    onChange={handleContentChange}
                    modules={modules}
                    theme="snow"
                    className="border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Metadata Section */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Metadata</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    <option value="Technical SEO">Technical SEO</option>
                    <option value="Content Strategy">Content Strategy</option>
                    <option value="Link Building">Link Building</option>
                    <option value="SEO Tools">SEO Tools</option>
                    <option value="Case Studies">Case Studies</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="read_time" className="block text-sm font-medium text-gray-700 mb-2">
                    Read Time (minutes)
                  </label>
                  <input
                    type="number"
                    id="read_time"
                    name="read_time"
                    value={formData.read_time}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  id="image_url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags.join(', ')}
                  onChange={handleTagsChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seo, marketing, strategy"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                  Slug (optional)
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Leave empty to generate from title"
                />
              </div>
            </div>

            {/* SEO Section */}
            <div className="pb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">SEO Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="seo_title" className="block text-sm font-medium text-gray-700 mb-2">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    id="seo_title"
                    name="seo_title"
                    value={formData.seo_title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Optimized title for search engines"
                  />
                </div>

                <div>
                  <label htmlFor="seo_keywords" className="block text-sm font-medium text-gray-700 mb-2">
                    SEO Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    id="seo_keywords"
                    name="seo_keywords"
                    value={formData.seo_keywords.join(', ')}
                    onChange={handleKeywordsChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seo tips, search optimization, marketing"
                  />
                </div>

                <div>
                  <label htmlFor="meta_description" className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Description
                  </label>
                  <textarea
                    id="meta_description"
                    name="meta_description"
                    value={formData.meta_description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description for search engine results"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 disabled:opacity-50"
              >
                <Save size={20} />
                {loading ? 'Saving...' : 'Save Post'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;