import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-6xl">
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
                <li>
                  <Link 
                    to="/services/Custom-AI-Agent-Creation" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Custom AI Agent Creation
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
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/process" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Contact Us
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
                    href="https://linkedin.com/company" 
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
                    href="https://twitter.com" 
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
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    YouTube
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
                <li>
                  <Link 
                    to="/cookies" 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
    
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link to="/" className="flex items-center">
                <svg className="w-8 h-8 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                <span className="text-xl font-bold">SEOConsult</span>
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