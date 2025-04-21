import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Target, Layout, Globe, LineChart, Zap, FileText, MapPin, FileEdit } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'technical-seo-audit',
      icon: <Search className="w-12 h-12 text-blue-500" />,
      title: "Technical SEO Audit",
      description: "Comprehensive technical analysis to identify and fix critical SEO issues that impact your website's performance and search visibility.",
      features: [
        "Full site crawl and analysis",
        "Site architecture optimization",
        "Core Web Vitals assessment",
        "Indexability and crawlability fixes",
        "Structured data implementation"
      ]
    },
    {
      id: 'keyword-strategy',
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "Keyword Strategy",
      description: "Data-driven keyword research to target high-intent search queries that drive qualified traffic and conversions.",
      features: [
        "Competitor keyword analysis",
        "Search intent mapping",
        "Long-tail keyword identification",
        "Keyword difficulty assessment",
        "Commercial intent targeting"
      ]
    },
    {
      id: 'content-strategy',
      icon: <Layout className="w-12 h-12 text-blue-500" />,
      title: "Content Strategy",
      description: "Strategic content planning and creation that aligns with search intent and business objectives.",
      features: [
        "Content gap analysis",
        "Topic cluster development",
        "Content calendar creation",
        "Performance tracking",
        "Conversion optimization"
      ]
    },
    {
      id: 'seo-blogs',
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      title: "SEO Blogs",
      description: "High-quality, optimized blog content that establishes authority and drives organic traffic.",
      features: [
        "SEO-optimized writing",
        "Keyword-focused content",
        "Internal linking strategy",
        "Readability optimization",
        "Regular content updates"
      ]
    },
    {
      id: 'international-seo',
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: "International SEO",
      description: "Global SEO strategy to expand your reach across multiple countries and languages.",
      features: [
        "Multilingual SEO implementation",
        "hreflang tag setup",
        "Local market research",
        "International link building",
        "Geo-targeting configuration"
      ]
    },
    {
      id: 'seo-analytics',
      icon: <LineChart className="w-12 h-12 text-blue-500" />,
      title: "SEO Analytics",
      description: "Advanced tracking and reporting to measure SEO performance and ROI.",
      features: [
        "Custom dashboard setup",
        "Conversion tracking",
        "Traffic source analysis",
        "Rank tracking",
        "Competitor benchmarking"
      ]
    },
    {
      id: 'local-seo',
      icon: <MapPin className="w-12 h-12 text-blue-500" />,
      title: "Local SEO Optimization",
      description: "Boost your local search presence and get found by customers in your area.",
      features: [
        "Google My Business optimization",
        "Local citations building",
        "NAP consistency audit",
        "Localized content strategy",
        "Review management"
      ]
    },
    {
      id: 'Custom-AI-Agent-Creation',
      icon: <FileEdit className="w-12 h-12 text-blue-500" />,
      title: "Custom AI Agent Creation",
      description: "Detailed content instructions for writers to ensure SEO-optimized output.",
      features: [
        "Keyword targeting guidance",
        "Content structure outline",
        "Competitor content analysis",
        "Search intent alignment",
        "Optimization checklist"
      ]
    },
    {
      id: 'GEO',
      icon: <FileEdit className="w-12 h-12 text-blue-500" />,
      title: "Generative Engine Optimzation (GEO)",
      description: "Generative Engine Optimization (GEO) is about positioning your brand inside AI-generated answers",
      features: [
        "Keyword targeting guidance",
        "Content structure outline",
        "Competitor content analysis",
        "Search intent alignment",
        "Optimization checklist"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link to="/" className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-6">Our SEO Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Comprehensive SEO solutions tailored to drive organic growth and maximize your ROI.
          </p>
        </div>
      </div>

       {/* Services Grid */}
       <div className="container mx-auto px-6 max-w-6xl py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              to={`/services/${service.id}`}
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group hover:translate-y-[-5px] animate-fade-in block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-blue-50 w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-blue-600 font-medium flex items-center mt-4 group-hover:underline">
                Learn more
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;