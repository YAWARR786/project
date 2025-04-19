import React, { useState } from 'react';
import { Search, ArrowRight, AlertCircle, Zap, LineChart, Shield, FileCheck } from 'lucide-react';


const TechnicalSeoAudit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    concern: ''
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
              Your Traffic Problem Might Be a Technical One
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              Before we talk keywords, let's fix what's broken under the hood. A full technical SEO audit reveals what's silently killing your rankings — and gives you a clear roadmap to fix it.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 mx-auto text-lg">
              Request My SEO Audit <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Section 1: What Is a Technical SEO Audit? */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Behind Every Stuck Site Is a Silent Technical Issue
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              A technical SEO audit is a full diagnostic of your site's health. It uncovers crawl errors, indexation problems, performance bottlenecks, broken links, and code-level issues that confuse search engines and hurt rankings.
            </p>
            <p className="text-xl text-gray-600 font-semibold">
              Most websites are leaking traffic because of technical gaps — not bad content.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Why It's Mission-Critical */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Google Can't Rank What It Can't Crawl
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            If your site is slow, unstructured, or throwing errors, no amount of content or backlinks will help. A flawed technical foundation means:
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Googlebot struggles to understand your pages</p>
                </li>
                <li className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">You lose trust signals from search engines</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Core Web Vitals drop, hurting mobile experience</p>
                </li>
                <li className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Traffic doesn't convert because UX is broken</p>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900 text-center italic">
            Without a technical audit, you're optimizing on sand.
          </p>
        </div>
      </section>

      {/* Section 3: My Audit Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Here's How I Diagnose What's Holding You Back
          </h2>
          <div className="space-y-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-blue-500" />,
                title: "Crawl + Indexing Audit",
                description: "I scan your entire site using industry tools (Screaming Frog, Sitebulb, GSC) to uncover crawling, indexing, and sitemap issues."
              },
              {
                icon: <LineChart className="w-8 h-8 text-blue-500" />,
                title: "Site Architecture & URL Health",
                description: "I review your site structure, internal linking, and hierarchy to ensure everything flows for bots and users."
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-500" />,
                title: "Speed & Core Web Vitals Check",
                description: "I test page load speed, layout shift, interactivity, and mobile responsiveness — and highlight what's slowing you down."
              },
              {
                icon: <FileCheck className="w-8 h-8 text-blue-500" />,
                title: "On-Page Health",
                description: "I review metadata, headers, canonicals, and internal duplication for every key page."
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-500" />,
                title: "Security & Technical Hygiene",
                description: "I check HTTPS issues, redirects, mixed content, and accessibility signals."
              },
              {
                icon: <ArrowRight className="w-8 h-8 text-blue-500" />,
                title: "Fix Report + Action Plan",
                description: "You get a clear, prioritized roadmap — what's urgent, what's hurting rankings, and how to fix it (dev-ready)."
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

      {/* Section 4: What You'll Get */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            A Fix-First Report, Not Just a List of Errors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Full audit report (PDF + video summary)",
              "Prioritized fix list (tech + content)",
              "Developer notes for implementation",
              "30-min walkthrough call (optional)",
              "Free re-audit after implementation (within 30 days)"
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
            This Audit Is Built For You If…
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Your rankings have dropped without reason",
              "Your site is new and hasn't gained traction",
              "You've done content work but still don't rank",
              "You've switched themes/platforms recently",
              "You're scaling into a new market or region"
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
              Let Me Find What Google's Missing on Your Site
            </h2>
            <p className="text-xl text-blue-100 mb-12 text-center">
              No sales pitch. Just a real audit you can act on.
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
                <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your main SEO concern
                </label>
                <textarea
                  id="concern"
                  name="concern"
                  value={formData.concern}
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
                Request My Technical SEO Audit <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
  
  export default TechnicalSeoAudit;