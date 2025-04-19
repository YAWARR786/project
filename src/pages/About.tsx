import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, Globe, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      number: "8+",
      label: "Years Experience",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      number: "200+",
      label: "Happy Clients",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      number: "30+",
      label: "Countries Served",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      number: "$1M+",
      label: "Revenue Generated",
    },
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
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Learn about my journey, expertise, and commitment to delivering exceptional SEO results.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-6xl py-24">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <p className="text-gray-600 mb-6">
              With over 8 years of experience in SEO and digital marketing, I've helped hundreds of businesses achieve their growth goals through strategic SEO implementation.
            </p>
            <p className="text-gray-600 mb-6">
              My journey began in 2015 when I recognized the gap between technical SEO knowledge and business strategy. Since then, I've developed a unique approach that combines both elements to deliver measurable results.
            </p>
            <p className="text-gray-600">
              Today, I work with businesses across various industries, from startups to enterprise companies, helping them achieve sustainable organic growth through proven SEO strategies.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
              alt="Team collaboration"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold mb-1">200+</div>
              <div className="text-blue-100">Projects<br/>Completed</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data-Driven Approach",
                description: "Every strategy is backed by comprehensive data analysis and research."
              },
              {
                title: "Transparency",
                description: "Clear communication and regular reporting on progress and results."
              },
              {
                title: "Long-term Success",
                description: "Focus on sustainable growth rather than quick, temporary wins."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;