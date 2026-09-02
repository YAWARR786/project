import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock3 } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-14 rounded-[28px] border border-blue-400/20 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent p-7 sm:p-9">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-blue-300">
                  <CalendarDays size={16} /> Talk growth with me
                </div>
                <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  Want to know what I’d fix first on your SEO?
                </h2>
                <p className="mt-3 text-gray-300">Book a free 30-minute strategy call and leave with clearer priorities.</p>
              </div>
              <div className="shrink-0">
                <Link
                  to="/book-call"
                  className="cta-shine group inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-500 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 sm:w-auto"
                >
                  Book My Free Call
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={19} />
                </Link>
                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-400">
                  <Clock3 size={13} /> 30 minutes · instant calendar invite
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Services Column - Expanded */}
            <div>
              <h3 className="font-bold text-xl mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Services
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/services/technical-seo-audit" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Technical SEO Audit
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/keyword-strategy" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Keyword Strategy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/content-strategy" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Content Strategy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/seo-blogs" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    SEO Blogs
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/international-seo" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    International SEO
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/seo-analytics" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    SEO Analytics
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/local-seo" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Local SEO Optimization
                  </Link>
                </li>
                {/* <li>
                  <Link 
                    to="/services/seo-content-briefs" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    SEO Content Brief
                  </Link>
                </li> */}
                <li>
                  <Link 
                    to="/services/custom-ai-agent-creation" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Custom AI Agent Creation
                  </Link>
                </li>
                
                <li>
                  <Link 
                    to="/services/geo" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    GEO
                  </Link>
                </li>
              </ul>
            </div>
    
            {/* Company Column */}
            <div>
              <h3 className="font-bold text-xl mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                Explore
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/process" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    My Process
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
    
            {/* Connect Column */}
            <div>
              <h3 className="font-bold text-xl mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Connect
              </h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/yawar-khan-97727a20a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/YawarKh0558563" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/__yawar_khan__" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-bold text-xl mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                Legal
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/privacy" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/terms" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Terms of Service
                  </Link>
                </li>

              </ul>
            </div>
          </div>
    
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link to="/" className="text-2xl font-bold text-blue-900">
                          <img 
                          src="https://i.ibb.co/cc4HktwD/Subheading-1472-x-372-px.png" 
                          alt="SEO Expert Logo" 
                          className="h-20 w-auto" 
                          loading="lazy"
                          decoding="async"
                        />
                          </Link>
              <span className="text-gray-400 ml-4">© {new Date().getFullYear()} All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Footer;