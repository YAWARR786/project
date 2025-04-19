import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, FileCheck, Target, Users, BarChart, Calendar, FileText } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Technical Site Audit",
      description: "Comprehensive analysis of your website's technical health and SEO foundation.",
      details: [
        "Site architecture review",
        "Mobile optimization check",
        "Page speed analysis",
        "Crawlability assessment",
        "Technical SEO audit report"
      ]
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Content Optimization",
      description: "Strategic enhancement of existing content to improve search visibility and user engagement.",
      details: [
        "Content gap analysis",
        "On-page SEO optimization",
        "Meta data enhancement",
        "Internal linking strategy",
        "Content quality assessment"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Competitor Analysis",
      description: "In-depth research of competitor strategies and market opportunities.",
      details: [
        "Competitor backlink analysis",
        "Content comparison",
        "Keyword gap identification",
        "Market positioning review",
        "Competitive advantage analysis"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Persona Creation",
      description: "Development of detailed user personas to guide content and SEO strategy.",
      details: [
        "Audience research",
        "Behavior analysis",
        "Need identification",
        "Journey mapping",
        "Content alignment"
      ]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Keyword Research",
      description: "Comprehensive keyword analysis to identify high-value search opportunities.",
      details: [
        "Search intent analysis",
        "Long-tail keyword research",
        "Keyword prioritization",
        "Search volume analysis",
        "Conversion potential assessment"
      ]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Content Calendar",
      description: "Strategic planning of content creation and optimization activities.",
      details: [
        "Topic planning",
        "Content type selection",
        "Publication scheduling",
        "Resource allocation",
        "Goal alignment"
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Content Production",
      description: "Creation and optimization of high-quality, SEO-driven content.",
      details: [
        "Content brief creation",
        "SEO optimization",
        "Quality assurance",
        "Performance tracking",
        "Continuous improvement"
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
          <h1 className="text-5xl font-bold mb-6">Our Process</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            A systematic approach to SEO that delivers consistent results through proven methodologies.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="container mx-auto px-6 max-w-6xl py-24">
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute left-0 top-0 -mt-4 text-8xl font-bold text-gray-100">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              <div className="relative ml-12 md:ml-24">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      <ul className="grid md:grid-cols-2 gap-4">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-full h-24 w-px bg-gray-200"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;