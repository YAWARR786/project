import React, { useState, useEffect } from 'react';
import { Routes, Route, Link ,BrowserRouter,useLocation } from 'react-router-dom';
import { ArrowRight, BarChart, BookOpen, LineChart as ChartLineUp, Download, FileCheck, Globe, Layout, LineChart, MessageSquare, Search, Settings, Target, Zap, Menu, X } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import EnhancedServicesSection from './components/EnhancedServicesSection';
import Services from './pages/Services';
import About from './pages/About';
import Process from './pages/Process';
import Contact from './pages/Contact';
import TechnicalSeoAudit from './pages/TechnicalSeoAudit';
import ContentStrategy from './pages/ContentStrategy';
import InternationalSeo from './pages/InternationalSEO';
import LocalSeo from './pages/LocalSeoOptimization';
import SeoAnalytics from './pages/SEO Analytics';
import SeoBlogs from './pages/SEOBlogs';
import SEOContentBriefs from './pages/SEOContentBriefs';
import KeywordStrategy from './pages/KeywordStrategy';
import TestimonialSlider from './components/TestimonialSlider';
import { BlogPost } from './types/blog';
import BlogPostComponent from './pages/BlogPost';
import GEO from './pages/GEO';
import CustomAIAgent from './pages/CustomAIAgent';
import BlogPage from './pages/BlogPage';
import PrivacyPolicy from './pages/PrivacyPolicy ';
import TermsOfService from './pages/TermsAndService';

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          'https://aliceblue-frog-801440.hostingersite.com/wp-json/wp/v2/posts?_embed&per_page=3'
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Transform WordPress data to match BlogPost type
        const formattedPosts = data.map((post: any) => {
          const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
          const terms = post._embedded?.['wp:term']?.flat() || [];
          const categories = terms.filter((t: any) => t.taxonomy === 'category');
          const tags = terms.filter((t: any) => t.taxonomy === 'post_tag');
          
          return {
            id: post.id,
            date: post.date,
            slug: post.slug,
            title: {
              rendered: post.title.rendered
            },
            content: {
              rendered: post.content.rendered
            },
            excerpt: {
              rendered: post.excerpt.rendered.replace(/<[^>]+>/g, '') // Remove HTML tags
            },
            image_url: featuredMedia?.source_url || '/default-blog-image.jpg',
            category: categories[0]?.name || 'Uncategorized',
            read_time: Math.ceil(post.content.rendered.split(' ').length / 200) || 5,
            yoast_head_json: post.yoast_head_json,
            _embedded: post._embedded
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
    
    fetchLatestPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mb-16">
            <span className="text-blue-600 font-semibold mb-6 block">INSIGHTS & STRATEGIES</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest SEO Insights and Action Plans
            </h2>
            <p className="text-xl text-gray-600">
              Practical SEO strategies and insights you can implement today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-gray-100 rounded-xl h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <div className="max-w-4xl mb-16">
            <span className="text-blue-600 font-semibold mb-6 block">INSIGHTS & STRATEGIES</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest SEO Insights and Action Plans
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              {error}
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-4xl mb-16">
          <span className="text-blue-600 font-semibold mb-6 block">INSIGHTS & STRATEGIES</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Latest SEO Insights and Action Plans
          </h2>
          <p className="text-xl text-gray-600">
            Practical SEO strategies and insights you can implement today. No fluff, just results-driven advice.
          </p>
        </div>
        
        {posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="group cursor-pointer hover-lift animate-slide-up" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link to={`/blog/${post.slug}`} className="block h-full">
                    <div className="relative overflow-hidden rounded-xl mb-6 h-64">
                      <img 
                        src={post.image_url || '/default-blog-image.jpg'} 
                        alt={post.title.rendered}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-blue-600 font-semibold">{post.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{post.read_time} min read</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title.rendered}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {post.excerpt.rendered}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:gap-4 transition-all duration-200">
                      Read Article <ArrowRight className="ml-2" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
           
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};
const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl font-bold text-blue-900">
            <img 
            src="https://i.ibb.co/67XCdBdd/logo.png" 
            alt="SEO Expert Logo" 
            className="h-20 w-auto" 
          />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-gray-600 hover:text-blue-600 transition">
                Services
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">
                About
              </Link>
              <Link to="/process" className="text-gray-600 hover:text-blue-600 transition">
                Process
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition">
                Blog
              </Link>
              <Link to="/contact" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-6`}>
            <div className="flex flex-col space-y-4">
              <Link 
                to="/services" 
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/process" 
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-black pt-32 pb-24 animate-fade-in">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 max-w-6xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-blue-400 font-semibold mb-6 block">RANK N CONVERT</span>
              <h1 className="text-6xl font-bold text-white mb-8 leading-tight italic">
                <span className="text-white">3+ Years. 30+ Niches. $800k In Revenue From SEO Alone.</span>
              </h1>
              <p className="text-xl text-blue-100 mb-12">
                With <span className="font-bold">3+ years</span> of hands-on experience across <span className="font-bold">50+ brands</span>, I build SEO systems that don't just rank - they grow revenue. Every move I make is rooted in data, driven by strategy, and aligned with real business goals.
              </p>
              <div className="flex gap-6">
                <Link 
                  to="/contact"
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 text-lg"
                >
                  Get Your Free SEO Audit <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl transform lg:translate-y-12">
                <img 
                  src="https://media-hosting.imagekit.io/93d1c9b1a86d460e/Untitled%20design-Photoroom.png?Expires=1839169613&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ic2Tulka-xPtdIeL6cs~bWULEs9iwUHPVed602dq4obSlUsuG4JQF0hQoFH1LJ1GahfymMzHCx-yfQERWsjM3Es81i4tBe~85Em1b8McRdovNiH4QMdpLSWBObSVeorG02wz5tCakb5hgXI9rsPQqJKrNFhU2bTN29~trRAyiIfFLvbFPzyI7MC8vjpR4Kf8dxHWWlD5AC3Jl21o44bVwoSqkc6I6~2BJQZ9MWaDch5PPv4DsovlbCvDuQ7eHZdRhyGoyj6SPKuul0une8Rsqv482FNCy6YPz120DUbTiatiEx8ixh2jTdNXvL0z4jReCrIYjkw-1XJmzFXkLvzE0A__" 
                  alt="SEO Consultant" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Trust Bar - Enhanced */}
            <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 border-t border-blue-900/30">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                  <span className="inline-block bg-blue-900/20 text-blue-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                    TRUSTED PARTNERSHIPS
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                    Trusted By Industry Leaders
                  </h2>
                  <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Collaborating with innovative brands to drive exceptional growth and digital transformation
                  </p>
                </div>
                
                <div className="relative">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent animate-pulse-slow"></div>
                  </div>
                  {/* Brand logos with hover effects - 8 logos */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 relative z-10">
                    {[
                      { name: 'iToolab AnyGo', logo: 'https://i.ibb.co/yJWHpXP/1.jpg' },
                      { name: 'Fones GO', logo: 'https://i.ibb.co/kgzgfB4W/2.png' },
                      { name: 'Moc Pogo', logo: 'https://i.ibb.co/QLHYCt6/3.jpg' },
                      { name: 'Travel Triangle', logo: 'https://i.ibb.co/MDsKBJ6s/4.png' },
                      { name: 'Security Base Group', logo: 'https://i.ibb.co/TDCFN9hh/5.jpg' },
                      { name: 'Qyubic', logo: 'https://i.ibb.co/Kc1vL4bC/6.png' },
                      { name: 'Thrive Together', logo: 'https://i.ibb.co/4ZBpGk20/7.jpg' },
                      { name: 'Pepper Content', logo: 'https://i.ibb.co/4ZkPtWKL/10.jpg' }
                    ].map((brand, index) => (
                      <div 
                        key={index} 
                        className="group flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-blue-900/20"
                      >
                        <div className="relative h-16 w-full mb-4 flex items-center justify-center">
                          <img 
                            src={brand.logo} 
                            alt={brand.name} 
                            className="h-full w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 blur-md group-hover:scale-110 transition-all duration-500"></div>
                        </div>
                        <span className="text-gray-300 font-medium text-sm group-hover:text-blue-400 transition-colors duration-300">
                          {brand.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 border border-blue-900/20 rounded-2xl pointer-events-none animate-border-pulse"></div>
                </div>
                
                {/* CTA at bottom linking to contact page */}
                <div className="text-center mt-20">
                  <p className="text-gray-400 mb-6 text-lg">Ready to join our network of success stories?</p>
                  <Link 
                    to="/contact" 
                    className="relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full overflow-hidden group hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <span className="relative z-10">Become a Partner</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute right-4 group-hover:translate-x-1 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </section>


      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl">
            <span className="text-blue-600 font-semibold mb-6 block">ABOUT ME</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              An SEO Strategist Who Gets What Your Business Really Needs
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              With 3+ years of hands-on experience across 50+ brands, I build SEO systems that don't just rank - they grow revenue. Every move I make is rooted in data, driven by strategy, and aligned with real business goals.
            </p>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://docs.google.com/document/d/1gQNswrPK4h7YgS0Fc-mJobFiqN-Wq_40e5Jd4Yip-H0/export?format=pdf';
                link.download = 'SEO-Framework.pdf';
                link.click();
              }}
              className="flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition text-lg"
            >
              Download My SEO Framework <Download size={20} />
            </button>
          </div>
        </div>
      </section>
      <EnhancedServicesSection />
      {/* Stats Section */}
      <section id="stats-section" className="py-24 bg-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold mb-6 block">THE IMPACT</span>
            <h2 className="text-4xl font-bold mb-6">
              Real Results, Measured in Revenue
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Average client results after 6 months of implementation.
            </p>
          </div>
          <div className="flex flex-nowrap overflow-x-auto md:overflow-x-visible gap-8 pb-4 md:pb-0">
            {[
              { number: "136%", label: "Average Traffic Growth" },
              { number: "$800k", label: "Additional Revenue" },
              { number: "90%", label: "Clients on Page 1" },
              { number: "4.5x", label: "ROI on SEO Investment" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`hover-lift animate-scale-in flex-none w-[250px] md:flex-1 text-center bg-blue-800/50 p-8 rounded-xl transform transition-all duration-700 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms`, animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold text-white mb-4">{stat.number}</div>
                <div className="text-blue-200 text-lg whitespace-nowrap">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Process Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-6 block">PROCESS</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              My 7-Step SEO Process for 5x Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that consistently delivers results across different industries and markets.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Timeline Steps */}
            <div className="space-y-24">
              {[
                {
                  step: "Step 1: Site Audit",
                  description: "First, I uncover what's broken and what's blocking growth.",
                  icon: <Search className="w-6 h-6" />
                },
                {
                  step: "Step 2: Content Optimization",
                  description: "Then comes the clean-up—tuning your content for both users and search engines.",
                  icon: <FileCheck className="w-6 h-6" />
                },
                {
                  step: "Step 3: Competitor Analysis",
                  description: "Now it's time to study what's working for others—and build something smarter.",
                  icon: <Target className="w-6 h-6" />
                },
                {
                  step: "Step 4: User Persona Creation",
                  description: "With that, I craft detailed user personas to steer every SEO move.",
                  icon: <MessageSquare className="w-6 h-6" />
                },
                {
                  step: "Step 5: Keyword Research",
                  description: "Here, I dig into real search behavior and map keywords that actually bring results.",
                  icon: <Search className="w-6 h-6" />
                },
                {
                  step: "Step 6: Build a Quarterly Calendar",
                  description: "Next, I turn all that insight into a clear 90-day content roadmap.",
                  icon: <Settings className="w-6 h-6" />
                },
                {
                  step: "Step 7: Content Production",
                  description: "Finally, I put strategy into motion-creating content that ranks, converts, and compounds over time.",
                  icon: <FileCheck className="w-6 h-6" />
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Timeline Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-blue-200 ${
                    index % 2 === 0 ? 'bg-blue-500' : 'bg-blue-600'
                  } flex items-center justify-center text-white z-10`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className={`w-1/2 ${
                    index % 2 === 0 
                      ? 'pr-16 text-right' 
                      : 'pl-16 ml-auto'
                  }`}>
                    <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 ${
                      index % 2 === 0 
                        ? 'hover:-translate-x-2' 
                        : 'hover:translate-x-2'
                    }`}>
                      <h3 className="text-xl font-bold mb-4">{item.step}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection/>
      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <span className="text-blue-400 font-semibold mb-6 block">GET STARTED</span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dominate Your Market?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Get a free, comprehensive SEO audit worth $1,500. I'll analyze your site, compare it against competitors, and show you exactly how to outrank them.
          </p>
          <Link to="/contact">
      <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 mx-auto text-lg">
        Get Your Free SEO Audit <ArrowRight size={20} />
      </button>
    </Link>
        </div>
      </section>
        <ScrollToTop />
    </div>
  );
};
const AppLayout = () => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
         <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostComponent  />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/services/technical-seo-audit" element={<TechnicalSeoAudit />} />
          <Route path="/services/content-strategy" element={<ContentStrategy />} />
          <Route path="/services/keyword-strategy" element={<KeywordStrategy />} />
          <Route path="/services/seo-analytics" element={<SeoAnalytics />} />
          <Route path="/services/seo-blogs" element={<SeoBlogs />} />
          <Route path="/services/local-seo" element={<LocalSeo />} />
          <Route path="/services/Custom-AI-Agent-Creation" element={<CustomAIAgent />} />
          <Route path="/services/international-seo" element={<InternationalSeo />} />
          <Route path="/services/seo-content-briefs" element={<SEOContentBriefs />} />
          <Route path="/services/GEO" element={<GEO />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      {/* Conditionally render footer */}
      {!location.pathname.startsWith('/admin') && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      {/* Public layout */}
      <Route path="/*" element={<AppLayout />} />

      {/* Admin routes */}
      {/* <Route path="/admin/blog/new" element={<BlogEditor />} />
      <Route path="/admin/blog/edit/:slug" element={<BlogEditor />} /> */}o
    </Routes>
  );
};

export default App;