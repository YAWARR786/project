import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight, Search, FileText, Target, Layout, Brain, MessageSquare } from 'lucide-react';

const GEO = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    queries: ''
  });
 const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.queries.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!validateForm()) return;
      
      setIsSubmitting(true);
      setSubmitStatus(null);
  
    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwlzBiQ-6Ss1qccQCLZtVobaILd-PHKAJ2XtUE0_R0iHuzbVcFYHPtfiRPCMpx-Ig0-/exec';
      
      // Important: Add a random parameter to prevent caching
      const cacheBusterUrl = `${scriptUrl}?t=${Date.now()}`;
      
      const response = await fetch(cacheBusterUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'service-geo'
        }),
      });
  
      // With no-cors mode, we can't read the response directly
      // So we'll assume success if we get any response
      setSubmitStatus({
        success: true,
        message: 'Thank you for your interest in GEO services! We will contact you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        website: '',
        queries: ''
      });
  
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your form. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
       {/* Back to Home */}
    <div className="absolute top-6 right-6 z-10">
      <a
        href="/"
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition"
      >
        ← Back to Home
      </a>
    </div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-black pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Your Audience Is Asking AI — Not Google
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              67% of users now prefer direct AI-generated answers over clicking through to external websites. If your brand isn't optimized for large language models like ChatGPT, Gemini, or Claude — you're not just missing traffic, you're missing visibility where it matters next.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 mx-auto text-lg">
              Book a GEO Strategy Session <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* What Is GEO Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              This Isn't Search Engine Optimization — It's Future Visibility Engineering
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Generative Engine Optimization (GEO) is about positioning your brand inside AI-generated answers. It's how you get mentioned when someone asks:
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-xl text-blue-600 italic">"What's the best CRM for solopreneurs?"</p>
              <p className="text-xl text-blue-600 italic">"Which tools are trusted by marketers?"</p>
              <p className="text-xl text-blue-600 italic">"How do I rank in local SEO?"</p>
            </div>
            <p className="text-xl text-gray-600 font-semibold">
              You're not fighting for page 1 anymore. You're fighting to be spoken by the model. GEO ensures you're present — not as an ad, but as the recommended answer.
            </p>
          </div>
        </div>
      </section>

      {/* Why GEO Matters Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Users Aren't Searching the Same Way — and the Data Proves It
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            According to recent research, It is anticipated that by 2026, AI-generated results would account for 55% of all searches instead of conventional online results.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Generative models are now influencing:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <Bot className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-lg">Buying decisions</span>
                </li>
                <li className="flex items-center gap-4">
                  <Bot className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-lg">B2B vendor comparisons</span>
                </li>
                <li className="flex items-center gap-4">
                  <Bot className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-lg">Service provider evaluations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-4 mt-12">
                <li className="flex items-center gap-4">
                  <Bot className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-lg">Product recommendations</span>
                </li>
                <li className="flex items-center gap-4">
                  <Bot className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-lg">Local business discovery</span>
                </li>
                <li className="flex items-center gap-4">
                  <Bot className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-lg">Industry expertise validation</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900 text-center italic">
            Unlike traditional SEO, GEO isn't about ranking — it's about being referenced. If you're not in the LLM's training signals, you don't show up. Full stop.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Your Brand, Trained Into the Answers
          </h2>
          <div className="space-y-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-blue-500" />,
                title: "Query & Use-Case Research",
                description: "I map what your audience is asking AI (not just Google), using prompt engines, LLM query datasets, and platform-specific patterns."
              },
              {
                icon: <FileText className="w-8 h-8 text-blue-500" />,
                title: "Content Re-Engineering for LLM Visibility",
                description: "I restructure your content with clear, factual, context-rich language that large models love — including entity linking, brand anchors, and citation formatting."
              },
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: "Third-Party Signals Injection",
                description: "I identify platforms that LLMs frequently cite (Reddit, Quora, review sites, niche publications) and work to insert your brand into those ecosystems."
              },
              {
                icon: <Layout className="w-8 h-8 text-blue-500" />,
                title: "LLM-Specific Authority Building",
                description: "I implement structured data, external citations, and strategic brand mentions across sources LLMs crawl heavily — without relying on backlinks."
              },
              {
                icon: <Brain className="w-8 h-8 text-blue-500" />,
                title: "Prompt Simulation & Model Testing",
                description: "I test how your brand responds inside ChatGPT, Bard, Claude, Perplexity, and You.com — optimizing based on output relevance, order, and context."
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
            Not Page Rank — Answer Rank
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "A full GEO audit with prompt-level analysis",
              "Re-optimized website and content assets",
              "Brand presence map across AI-cited platforms",
              "Targeted content recommendations to influence AI responses",
              "Visibility scorecard across top generative models",
              "Optional post-deployment testing and refinement"
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <p className="text-lg text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO vs SEO Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            GEO vs SEO — What's the Difference?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Aspect</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Traditional SEO</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Generative Engine Optimization (GEO)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Platform</td>
                  <td className="px-6 py-4">Google, Bing, DuckDuckGo</td>
                  <td className="px-6 py-4">ChatGPT, Gemini, Claude, Perplexity, You.com</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Goal</td>
                  <td className="px-6 py-4">Rank on search result pages</td>
                  <td className="px-6 py-4">Be cited directly in AI-generated answers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Signals</td>
                  <td className="px-6 py-4">Keywords, backlinks, on-page optimization</td>
                  <td className="px-6 py-4">Authority, context clarity, AI-trainable phrasing</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Content Structure</td>
                  <td className="px-6 py-4">Long-form, keyword clusters</td>
                  <td className="px-6 py-4">Structured facts, clean context, conversational phrasing</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Measurement</td>
                  <td className="px-6 py-4">SERP position, CTR, traffic</td>
                  <td className="px-6 py-4">Prompt tests, output presence, brand mentions</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">User Behavior</td>
                  <td className="px-6 py-4">Click-based research</td>
                  <td className="px-6 py-4">Ask → Receive → Decide</td>
                </tr>
              </tbody>
            </table>
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
              "You're already doing SEO but want to stay ahead of AI disruption",
              "Your audience is using tools like ChatGPT, Gemini, or Perplexity to discover products or services",
              "You want to influence buying decisions before a search ever happens",
              'You want your brand to show up in "What\'s best?" type questions',
              "You're ready to future-proof your visibility before your competitors catch up"
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
              Be the Brand AI Recommends — Not the One It Overlooks
            </h2>
            <p className="text-xl text-blue-100 mb-12 text-center">
              The future of visibility isn't a blue link. It's a sentence in a generated answer. Let's get your brand there — with strategy, not chance.
            </p>
            
            {/* Form Submission Status */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="queries" className="block text-sm font-medium text-gray-700 mb-2">
                  What kind of queries do you want your brand to show up in?
                </label>
                <textarea
                  id="queries"
                  name="queries"
                  value={formData.queries}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Book Your GEO Strategy Session <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GEO;