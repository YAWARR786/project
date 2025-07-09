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
                I'm <span className="font-bold">Yawar Khan</span>, and my
                journey didn't start in a shiny agency or with high-profile
                clients. It began in the lecture halls of{" "}
                <span className="font-bold">
                  Jawaharlal Nehru University (JNU)
                </span>{" "}
                — one of India's most respected institutions for foreign
                language studies — where I earned both my graduation and
                master's in{" "}
                <span className="font-bold">
                  Spanish and Latin American Studies
                </span>
                .
              </p>
              <p className="text-gray-600 italic">
                Those years weren't just about mastering a language. They taught
                me the real power of communication — how the right words, at the
                right time, can build bridges and spark trust.
              </p>
              <p className="text-gray-600">
                In my final semester, I took on a small freelance writing
                project. One gig led to another, and just like that, I found
                myself completely immersed in content writing. I loved how good
                writing could inform, engage, and move people — but soon
                realized content alone wasn't enough.
              </p>
              <p className="text-gray-600 font-semibold">
                So I taught myself SEO.
              </p>
              <p className="text-gray-600 italic">
                No mentors. No courses. Just countless nights learning how
                search engines work, breaking websites, fixing them, and slowly
                connecting the dots between visibility and conversions.
              </p>
              <p className="text-gray-600">
                Over time, I saw the same problem everywhere: businesses were
                ranking — but not converting. That's where I stepped in,
                combining <span className="font-bold">technical SEO</span> with{" "}
                <span className="font-bold">content strategy</span> built for
                results.
              </p>
              <p className="text-gray-600">
                Today, with <span className="font-bold">3+ years</span> of
                experience, <span className="font-bold">50+ clients</span>{" "}
                across <span className="font-bold">10+ countries</span>, and
                over <span className="font-bold">$800K</span> in added revenue,
                I help brands grow — not with gimmicks, but with systems that
                turn traffic into trust.
              </p>
              <p className="text-gray-600 italic">
                What I bring to the table isn't just SEO. It's a mix of
                storytelling, strategy, and sharp thinking — turning passive
                visitors into paying customers.
              </p>
              <p className="text-gray-600 font-bold text-xl">
                This has never been just about traffic. And it still isn't.
              </p>
              <p className="text-gray-600 text-xl font-semibold italic">
                It's about understanding people — and building systems that help
                them find you, trust you, and choose you.
              </p>
            </div>
          </div>
          <div className="relative">
            <iframe
              src="https://imagekit.io/player/embed/aeduijn8u/Your%20paragraph%20text.mp4?updatedAt=1752056927868&thumbnail=https%3A%2F%2Fik.imagekit.io%2Faeduijn8u%2FYour%2520paragraph%2520text.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1752056927868&updatedAt=1752056927868.mp4"
              className="w-full rounded-xl shadow-lg"
              allow="autoplay; fullscreen"
            ></iframe>
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
