import React, { useState } from 'react';
import { Target, ArrowRight, Search, FileText, Users, BarChart, Layout, Filter } from 'lucide-react';

const KeywordStrategy = () => {
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
              Keywords Alone Don't Rank. Strategy Does.
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              Most SEO efforts fail not because of weak content, but because they're built on irrelevant or shallow keyword targeting. My keyword strategy process goes beyond search volume — it's built to capture intent, map buyer journeys, and drive measurable business outcomes.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 mx-auto text-lg">
              Request Keyword Strategy Consultation <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Section 1: What Is Keyword Strategy? */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              The Foundation of Every Successful SEO Campaign
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Keyword strategy isn't about stuffing a blog with popular phrases. It's about understanding your market, identifying how your audience searches, and building a structured content map that speaks their language.
            </p>
            <p className="text-xl text-gray-600 font-semibold">
              Done right, it becomes your SEO blueprint — aligning content, structure, and sales objectives with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Why It Matters More Than Ever */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Traffic Means Nothing Without Intent
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Ranking for keywords that don't reflect your buyer's mindset wastes time, effort, and resources.
            Here's what happens without a focused keyword strategy:
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">You attract the wrong audience</p>
                </li>
                <li className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Your bounce rate climbs</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Conversion drops despite "traffic growth"</p>
                </li>
                <li className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">You rank, but it doesn't move revenue</p>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900 text-center italic">
            What you need is a plan that balances data, psychology, and relevance.
          </p>
        </div>
      </section>

      {/* Section 3: How I Build Keyword Strategies */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            A Research Process That Doesn't Miss the Mark
          </h2>
          <div className="space-y-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-blue-500" />,
                title: "Audience & Competitor Analysis",
                description: "I start by identifying your ideal buyer's behavior, search patterns, and how competitors are capturing that traffic."
              },
              {
                icon: <Filter className="w-8 h-8 text-blue-500" />,
                title: "Search Intent Mapping",
                description: "Every keyword is categorized by stage of intent: informational, navigational, transactional — so each page has a defined purpose."
              },
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: "Commercial Keyword Prioritization",
                description: "Focus shifts from volume to value. I prioritize high-intent, commercially viable keywords that align with your services or products."
              },
              {
                icon: <BarChart className="w-8 h-8 text-blue-500" />,
                title: "SERP Feature & Difficulty Analysis",
                description: "I study what Google is actually showing for each term — and how difficult it is to outrank what's there."
              },
              {
                icon: <Layout className="w-8 h-8 text-blue-500" />,
                title: "Cluster & Content Mapping",
                description: "Keywords are organized into topic clusters to inform your blog structure, landing pages, and content calendar."
              },
              {
                icon: <FileText className="w-8 h-8 text-blue-500" />,
                title: "Actionable Keyword Blueprint",
                description: "You receive a clean, filtered, fully annotated keyword strategy file — ready to brief to writers or execute with my help."
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
            Not a Dump of Keywords — A Strategy With Direction
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "A complete keyword strategy (Excel or Google Sheet)",
              "Segmented by priority, page type, and intent",
              "Opportunity gaps missed by competitors",
              "Roadmap for 3-6 months of SEO content",
              "Optional walkthrough call with Q&A"
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
            This Is Built for You If…
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "You've published content but nothing is ranking",
              "You're targeting high-volume keywords but not converting",
              "You don't know which keywords to target next",
              "You're launching a new product or entering a new niche",
              "You want to clean up keyword cannibalization and overlap"
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
              Start Targeting Keywords That Drive Revenue
            </h2>
            <p className="text-xl text-blue-100 mb-12 text-center">
              Let's build a keyword strategy tailored to your business goals — not just what looks good on paper.
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
                <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell me about your SEO goal
                </label>
                <textarea
                  id="goal"
                  name="goal"
                  value={formData.queries}
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
                Book Your Keyword Strategy Session <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
  export default KeywordStrategy;