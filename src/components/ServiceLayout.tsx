import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ServiceLayout = ({ 
  children,
  service
}: {
  children: React.ReactNode;
  service: any;
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-90"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <Link 
            to="/services" 
            className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to All Services
          </Link>
          <h1 className="text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-6xl py-16">
        {children}
      </div>
    </div>
  );
};