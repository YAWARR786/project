import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Users, Target, Layout, Calendar, BookOpen, FileCheck } from 'lucide-react';

const ContentStrategy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    challenge: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-black pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Content Without Strategy Is Just Noise
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              Your competitors are publishing more than ever — but most of it doesn't move the needle. I design content strategies that don't just get clicks — they bring clarity, capture demand, and connect your SEO goals to business growth.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 mx-auto text-lg">
              Request Content Strategy Session <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Section 1: What Is a Content Strategy? */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              A System That Transforms Ideas Into Impact
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              A content strategy is more than deciding what to post next. It's a research-driven, persona-aligned system that defines what to say, who to say it to, and when to say it.
            </p>
            <p className="text-xl text-gray-600 font-semibold">
              It connects your brand's positioning to search intent, channel behavior, and user psychology — so that every piece of content serves a measurable purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Why Most SEO Content Fails */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            More Isn't Better — Alignment Is
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Content underperforms when it lacks strategy. If you're publishing blogs, landing pages, or product content without a clear structure, you're likely:
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Targeting broad terms instead of buyer-specific ones</p>
                </li>
                <li className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Creating redundant or cannibalizing content</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Publishing reactively instead of following a roadmap</p>
                </li>
                <li className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Speaking to everyone — and converting no one</p>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900 text-center italic">
            The solution isn't more words. It's a smarter system.
          </p>
        </div>
      </section>

      {/* Section 3: Content Strategy Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            A Strategy That Starts With People — Not Just Keywords
          </h2>
          <div className="space-y-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "User Persona Development",
                description: "Every strategy begins by defining who you're speaking to. I create audience personas based on behavior, needs, objections, and search language — not demographics."
              },
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: "Content Audit & Gap Analysis",
                description: "I audit existing pages to identify what's outdated, misaligned, or underperforming — and what's missing based on buyer stages and keyword intent."
              },
              {
                icon: <Layout className="w-8 h-8 text-blue-500" />,
                title: "Topic Clustering & Content Mapping",
                description: "I organize topics into structured clusters that align with personas, funnel stages, and commercial goals — ensuring consistency and internal linking."
              },
              {
                icon: <BookOpen className="w-8 h-8 text-blue-500" />,
                title: "Content Format Planning",
                description: "I determine which content types support your goals: product-led blogs, comparison pages, service explainers, educational hubs, etc."
              },
              {
                icon: <Calendar className="w-8 h-8 text-blue-500" />,
                title: "Content Calendar Creation",
                description: "I build a full SEO content calendar tailored to your resources — broken into quarterly themes, monthly goals, and weekly execution plans."
              },
              {
                icon: <FileCheck className="w-8 h-8 text-blue-500" />,
                title: "Briefing & Execution Roadmap",
                description: "Each page is mapped with purpose, keywords, structure guidance, and internal link opportunities — ready to brief to your writers or execute through me."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What You'll Receive */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            A Clear Plan Built Around Buyers — Not Trends
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Content strategy document (Google Doc or PDF)",
              "User persona breakdown with search behavior insights",
              "Content cluster map for 3–6 months",
              "Monthly publishing calendar (editable)",
              "Prioritized brief list by funnel stage and traffic opportunity",
              "Optional 1:1 walkthrough call"
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <p className="text-lg text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Who This Is For */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            This Strategy Is Right for You If…
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "You've been publishing but aren't gaining traffic or traction",
              "Your blog has no clear structure or direction",
              "You don't know what content to create next — or why",
              "You're targeting the wrong audience and seeing poor conversion",
              "You want a system that can scale with your team or agency"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-lg text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Get a Content Strategy That Moves the Right Metrics
            </h2>
            <p className="text-xl text-blue-100 mb-12 text-center">
              Stop creating content for content's sake. Let's build a system that ranks, educates, and converts — mapped to your audience and your goals.
            </p>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-2">
                  What's your current content challenge?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center justify-center gap-2"
              >
                Start With a Strategy Call <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
  export default ContentStrategy;