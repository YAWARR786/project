import React, { useState } from 'react';
import { Globe, ArrowRight, Search, FileText, Target, Layout, BarChart, Languages } from 'lucide-react';

const InternationalSeo = () => {
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
              Scaling Globally Isn't Just About Translation — It's About SEO Localization
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              Expanding into new markets requires more than duplicating content and adding hreflang tags. I help growth-stage brands build SEO strategies tailored to regional search behavior, language intent, and local competition — across every market they serve.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 mx-auto text-lg">
              Request International SEO Strategy <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* What Is International SEO Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              A Market-Ready Framework for Global Search Visibility
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              International SEO ensures your website ranks in the right countries, in the right languages, and for the right users.
            </p>
            <p className="text-xl text-gray-600 mb-6">
              But it's not just about translating pages — it's about understanding local SERPs, adapting content to regional behavior, and configuring your site to meet both technical and cultural expectations.
            </p>
            <p className="text-xl text-gray-600 font-semibold">
              Without this foundation, global expansion often leads to diluted traffic and lost opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Why It's Business-Critical Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Global Search Behavior Isn't Universal — Neither Should Your SEO Be
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Most brands entering new markets rely on a translated version of their original site — and they rarely see results. Why?
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Google doesn't rank duplicate global content</p>
                </li>
                <li className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Search terms change across regions, even in the same language</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Misconfigured hreflang or domain structures confuse crawlers</p>
                </li>
                <li className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Local competitors are already optimizing for regional nuances</p>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900 text-center italic">
            Your international SEO strategy needs to reflect the way users search — not just the way you speak.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            From Market Discovery to Technical Precision
          </h2>
          <div className="space-y-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-blue-500" />,
                title: "Market Research & Target Region Validation",
                description: "I begin by analyzing regional search potential, competitive landscape, and demand gaps — to confirm where you should (and shouldn't) expand."
              },
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: "Localized Keyword & Intent Research",
                description: "I identify region-specific search terms, content preferences, and buyer behavior — not just language translations, but cultural SEO insights."
              },
              {
                icon: <Layout className="w-8 h-8 text-blue-500" />,
                title: "Site Structure & URL Strategy",
                description: "Based on your business model, I define the right domain configuration (subdirectory, subdomain, ccTLD) and ensure technical scalability."
              },
              {
                icon: <Languages className="w-8 h-8 text-blue-500" />,
                title: "Hreflang & Language Tag Implementation",
                description: "I audit or set up hreflang attributes properly — removing conflicts, duplication, and incorrect targeting."
              },
              {
                icon: <FileText className="w-8 h-8 text-blue-500" />,
                title: "Regional Content Mapping & Localization Guidance",
                description: "I advise on content adaptation for each market — not just translation, but keyword alignment, tone, and regulatory requirements."
              },
              {
                icon: <BarChart className="w-8 h-8 text-blue-500" />,
                title: "Performance Tracking by Country/Language",
                description: "I configure segmented analytics and GSC reports to monitor traffic and engagement by region — so your team has clear visibility across markets."
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
            A Market-Ready SEO Blueprint, Customized by Region
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "International SEO roadmap (PDF or Google Doc)",
              "Market opportunity breakdown by country",
              "Localized keyword sets + search intent map",
              "Domain & URL structure recommendations",
              "Hreflang audit/fix plan",
              "Content localization brief (per region)",
              "Optional walkthrough call with Q&A"
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
            This Solution Is Built for You If…
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "You're expanding to multiple regions or languages",
              "Your global traffic isn't converting or ranking",
              "You've duplicated your content but struggle with visibility",
              "Your current hreflang setup is causing indexation issues",
              "You want to scale without SEO conflicts or cannibalization"
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
              Launch Global. Rank Local. Scale Smart.
            </h2>
            <p className="text-xl text-blue-100 mb-12 text-center">
              International expansion starts with technical clarity and market-specific content. I'll help you build a regional SEO system that scales without breaking your site — or your growth.
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
                <label htmlFor="regions" className="block text-sm font-medium text-gray-700 mb-2">
                  Which regions are you targeting?
                </label>
                <textarea
                  id="regions"
                  name="regions"
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
                Request International SEO Strategy <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
  export default InternationalSeo;