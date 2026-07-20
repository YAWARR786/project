import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  Users,
  Globe,
  Briefcase,
  ChevronDown,
} from "lucide-react";

const About: React.FC = () => {
  const [activeValue, setActiveValue] = useState<number | null>(null);

  const stats = [
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      number: "3+",
      label: "Years Experience",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      number: "50+",
      label: "Happy Clients",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      number: "10+",
      label: "Countries Served",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      number: "$800k",
      label: "Revenue Generated",
    },
  ];

  const values = [
    {
      title: "Results Matter More Than Rankings",
      description:
        "Getting traffic is easy. What matters is turning that traffic into leads and sales. I focus on what actually helps your business grow - not just being visible.",
      details: [
        "Focus on conversion-driven SEO strategies",
        "Track and measure real business impact",
        "Prioritize revenue over vanity metrics",
        "Build sustainable traffic sources",
      ],
    },
    {
      title: "No Buzzwords, Just Clarity",
      description:
        "I keep things simple and honest. You'll always know what I'm doing, why it matters, and how it helps you - no confusing jargon or fluff.",
      details: [
        "Clear, jargon-free communication",
        "Transparent reporting and updates",
        "Actionable insights and recommendations",
        "Regular strategy discussions",
      ],
    },
    {
      title: "Every Business Is Different",
      description:
        "You're not like everyone else - so your SEO strategy shouldn't be either. I build plans based on your goals, not generic templates.",
      details: [
        "Customized SEO strategies",
        "Industry-specific approach",
        "Competitor analysis and differentiation",
        "Unique value proposition focus",
      ],
    },
    {
      title: "I Treat Your Business Like Mine",
      description:
        "I care deeply about the work I do. If I'm in, I'm all in - thinking about your growth like it's my own brand.",
      details: [
        "Proactive problem-solving",
        "Long-term growth focus",
        "Regular optimization suggestions",
        "Strategic partnership approach",
      ],
    },
    {
      title: "No Quick Fixes - Only What Works Long-Term",
      description:
        "Shortcuts don't last. I focus on strategies that are solid, sustainable, and actually move the needle over time.",
      details: [
        "White-hat SEO techniques only",
        "Future-proof strategies",
        "Sustainable growth patterns",
        "Algorithm-resistant approaches",
      ],
    },
  ];

  const toggleValue = (index: number) => {
    setActiveValue(activeValue === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Learn about my journey, expertise, and commitment to delivering
            exceptional SEO results.
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
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-600">
                I’m <span className="font-bold">Yawar Khan</span>, and my career
                began in the lecture halls of{" "}
                <span className="font-bold">
                  Jawaharlal Nehru University
                </span>{" "}
                , one of India’s leading institutions for foreign language
                studies. I completed both my graduation and master’s degree in{" "}
                <span className="font-bold">
                  Spanish and Latin American Studies
                </span>
                {" "}there.
              </p>
              <p className="text-gray-600">
                Studying language taught me more than grammar and vocabulary. It
                showed me how communication shapes the way people understand,
                connect with, and trust one another.
              </p>
              <p className="text-gray-600">
                During my final semester, I accepted a small freelance writing
                project. That project led to another, and before long, I was
                working regularly as a{" "}
                <span className="font-bold">content writer</span>. I enjoyed
                creating content that helped people learn, solve problems, and
                make decisions. But as I gained more experience, I realised that
                even well-written content had little value if the right people
                could not find it.
              </p>
              <p className="text-gray-600 font-semibold">
                That curiosity led me to <span className="font-bold">SEO</span>.
              </p>
              <p className="text-gray-600">
                I learned it through hands-on work, late-night research, plenty
                of mistakes, and a lot of testing. I studied how search engines
                worked, experimented with websites, fixed what went wrong, and
                gradually understood how{" "}
                <span className="font-bold">
                  content, rankings, user experience, and conversions
                </span>{" "}
                worked together.
              </p>
              <p className="text-gray-600">
                While working with different businesses, I noticed a common
                problem. Many websites were attracting traffic, but that traffic
                was not turning into enquiries or sales.
              </p>
              <p className="text-gray-600 font-semibold">
                That became the focus of my work.
              </p>
              <p className="text-gray-600">
                Today, I combine{" "}
                <span className="font-bold">
                  technical SEO, content strategy, and conversion-focused
                  thinking
                </span>{" "}
                to help businesses attract the right audience and turn visitors
                into customers.
              </p>
              <p className="text-gray-600">
                Over the past <span className="font-bold">three years</span>, I
                have worked with{" "}
                <span className="font-bold">
                  more than 50 clients across 10 countries
                </span>{" "}
                and helped generate{" "}
                <span className="font-bold">
                  over $800,000 in additional revenue
                </span>
                .
              </p>
              <p className="text-gray-600">
                My work is not only about improving rankings. It is about
                understanding what people are searching for, what they need to
                see before making a decision, and how a business can earn their
                trust.
              </p>
              <p className="text-gray-600 font-bold text-xl">
                Because traffic alone does not grow a business.
              </p>
              <p className="text-gray-600 text-xl font-semibold italic">
                The right people finding you, trusting you, and choosing you
                does.
              </p>
            </div>
          </div>
          <div className="relative">
            <video
              className="w-full rounded-xl shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://ik.imagekit.io/aeduijn8u/Your%20paragraph%20text.mp4?tr=orig&updatedAt=1752056927868.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">My Values</h2>
          <div className="space-y-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleValue(index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-left">{value.title}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      activeValue === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeValue === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-gray-600 mb-6">{value.description}</p>
                    <ul className="space-y-3">
                      {value.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center text-gray-700"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
