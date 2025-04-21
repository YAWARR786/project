import React from "react";
import { Link } from "react-router-dom";

const services = [
    {
      title: "Technical SEO Audit",
      description: "Comprehensive analysis of your website's technical health and performance",
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      link: "/services/technical-seo-audit"
    },
    {
      title: "Keyword Strategy",
      description: "Data-driven keyword research focused on commercial intent and conversions",
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      link: "/services/keyword-strategy"
    },
    {
        title: "Content Strategy",
        description: "Strategic content planning that targets high-value buying keywords",
        icon: (
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
          </svg>
        ),
        link: "/services/content-strategy"
      },
      {
        title: "SEO Blogs",
        description: "High-quality, optimized content that ranks and drives organic traffic",
        icon: (
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
        ),
        link: "/services/seo-blogs"
      },
      {
        title: "Local SEO",
        description: "Optimization strategies to dominate local search results",
        icon: (
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        ),
        link: "/services/local-seo"
      },
      {
        title: "International SEO",
        description: "Multi-market optimization strategies for global brands",
        icon: (
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
          </svg>
        ),
        link: "/services/international-seo"
      },
      {
        title: "SEO Analytics",
        description: "Advanced tracking and reporting to measure SEO performance",
        icon: (
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        ),
        link: "/services/seo-analytics"
      },
      {
        title: "Custom AI Agent Creation",
        description: "Detailed content outlines optimized for search intent and rankings",
        icon: (
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        ),
        link: "/services/Custom-AI-Agent-Creation"
      },
      {
        title: "Generative Engine Optimzation (GEO)",
        description: "Generative Engine Optimization (GEO) is about positioning your brand inside AI-generated answers",
        icon: (
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        ),
        link: "/services/GEO"
      },
      {
        title: "Seo Content Briefs",
        description: "A custom AI agent is a task-specific, brand-trained assistant designed to support your team where it matters most",
        icon: (
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        ),
        link: "/services/seo-content-briefs"
      }
      ];
      const EnhancedServicesSection = () => {
        return (
          <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center mb-20">
                <span className="inline-block bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-full mb-6 text-sm">
                  OUR EXPERTISE
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Comprehensive SEO Solutions for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Sustainable Growth</span>
                </h2>
                <p className="text-xl text-gray-600 md:px-10">
                  We architect complete SEO ecosystems that combine technical precision with strategic content to deliver compounding organic growth.
                </p>
              </div>
      
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <Link
                    to={service.link}
                    key={index}
                    className="group relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-8 h-full">
                      <div className="bg-blue-100/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                      <div className="mt-6 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                        <span className="font-medium">Learn more</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      };
      
      export default EnhancedServicesSection;
      