import React, { useState } from 'react';
import { LineChart, ArrowRight, BarChart2, Target, Filter, Users, FileText, Bell } from 'lucide-react';

const SeoAnalytics = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    metrics: ''
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
              If You Can't Measure It, You Can't Scale It
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              SEO without analytics is guesswork. I build custom tracking systems that go beyond rankings — helping you understand what's working, where revenue is leaking, and how to make smarter SEO decisions across every stage of the funnel.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 mx-auto text-lg">
              Request SEO Performance Report Setup <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* What Is SEO Analytics Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Visibility Alone Doesn't Mean Growth — Data Tells the Real Story
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              SEO analytics isn't about checking if a keyword moved from position 12 to 9. It's about tying every piece of content, every ranking, and every pageview back to real business outcomes.
            </p>
            <p className="text-xl text-gray-600 font-semibold">
              A proper analytics setup reveals which pages are driving sales, where users are dropping off, and what traffic is actually worth — so that every SEO move is backed by insight, not instinct.
            </p>
          </div>
        </div>
      </section>

      {/* Why It's Essential Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Algorithms Change. Data Doesn't Lie.
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Too many teams invest in SEO but never track what truly matters. Without a custom analytics framework, you risk:
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <LineChart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Celebrating traffic spikes that don't convert</p>
                </li>
                <li className="flex items-start gap-4">
                  <LineChart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Failing to see which content drives pipeline</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <LineChart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Overlooking hidden content cannibalization</p>
                </li>
                <li className="flex items-start gap-4">
                  <LineChart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Making strategy decisions based on incomplete or inaccurate data</p>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900 text-center italic">
            You don't need more reports — you need clarity.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            From Tracking Setup to Growth Visibility
          </h2>
          <div className="space-y-8">
            {[
              {
                icon: <BarChart2 className="w-8 h-8 text-blue-500" />,
                title: "Analytics Platform Configuration",
                description: "I audit and configure Google Analytics 4 and Search Console to accurately track SEO-specific data — filtering out noise and inconsistencies."
              },
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: "Goal & Event Setup Based on Business KPIs",
                description: "I align tracking to your actual business goals: form submissions, purchases, scroll depth, lead magnets — not just sessions."
              },
              {
                icon: <Filter className="w-8 h-8 text-blue-500" />,
                title: "Content & Landing Page Performance Dashboards",
                description: "I build dashboards to isolate which blog posts, product pages, or URLs are driving traffic, engagement, and conversion."
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "Organic Channel Segmentation",
                description: "I separate branded vs non-branded, new vs returning, country-based traffic, and more — giving you deeper insight into search behavior."
              },
              {
                icon: <Bell className="w-8 h-8 text-blue-500" />,
                title: "Technical Issue & Drop Detection",
                description: "I implement alerts for sudden ranking drops, page speed issues, or crawl anomalies — so you're never flying blind."
              },
              {
                icon: <FileText className="w-8 h-8 text-blue-500" />,
                title: "Monthly Reporting Framework",
                description: "You receive a monthly performance template with actionable metrics, content opportunities, and strategic notes — not vanity data."
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

      {/* What You'll Receive Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            A Custom SEO Performance System — Not Just a Spreadsheet
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "GA4 + GSC properly configured",
              "Business-aligned KPIs and event tracking",
              "Organic performance dashboards (Looker Studio or Sheets)",
              "Keyword-level performance insights",
              "Strategic reporting templates for monthly reviews",
              "Optional 1:1 walkthrough of your setup"
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <p className="text-lg text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            This Is Built for You If…
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "You're getting traffic but don't know what's converting",
              "Your SEO reports are vague or unclear",
              "Your team can't distinguish content performance",
              "You're spending on SEO but lack insight into ROI",
              "You want to shift from guessing to precision-led execution"
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
              Turn Raw Traffic Into Actionable Intelligence
            </h2>
            <p className="text-xl text-blue-100 mb-12 text-center">
              Let's build a reporting system that gives your SEO team clarity, your content team direction, and your leadership real performance metrics — all from day one.
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
                <label htmlFor="metrics" className="block text-sm font-medium text-gray-700 mb-2">
                  What SEO metrics do you want clarity on?
                </label>
                <textarea
                  id="metrics"
                  name="metrics"
                  value={formData.metrics}
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
                Set Up SEO Performance Tracking <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
  export default SeoAnalytics;