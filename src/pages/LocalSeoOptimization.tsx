import React, { useState } from 'react';
import { MapPin, ArrowRight, Search, FileText, Target, Layout, Star, Building2 } from 'lucide-react';

const LocalSeo = () => {
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
              Visibility in Your City Shouldn't Be Left to Luck
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              If you rely on local customers, your SEO should reflect that. I help service businesses, multi-location brands, and local operators rank in their area by building structured, intent-driven local SEO strategies — from your Google profile to your location pages.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 mx-auto text-lg">
              Request Local SEO Strategy <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* What Is Local SEO Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Optimizing for Where You Actually Do Business
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Local SEO is about making your business discoverable to the people already looking for it nearby. It goes far beyond Google Maps and directory listings — it's about showing up when potential customers in your service area search for what you offer, with credibility and clarity.
            </p>
            <p className="text-xl text-gray-600 font-semibold">
              From your Google Business Profile to local keyword targeting, I build the infrastructure that turns local visibility into phone calls, store visits, and booked services.
            </p>
          </div>
        </div>
      </section>

      {/* Why It's a Game-Changer Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            If You Don't Rank Locally, You're Losing Leads to Competitors Who Do
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Search behavior is hyper-local. Most users search with intent like "near me," city names, or service-specific keywords. If your business isn't optimized for that, you're invisible to the very people most likely to buy.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Inconsistent NAP (Name, Address, Phone) data across directories</p>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Missed opportunities to rank in the local map pack</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Weak local content that doesn't match search queries</p>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Lack of authority in your service area</p>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900 text-center italic">
            I build strategies that fix all of it — without shortcuts or spammy citations.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Rank Where It Matters — In Your Market
          </h2>
          <div className="space-y-8">
            {[
              {
                icon: <Building2 className="w-8 h-8 text-blue-500" />,
                title: "Google Business Profile Optimization",
                description: "I audit and optimize your listing for accuracy, keyword relevance, categories, photos, service areas, and updates — so you appear in map and discovery results."
              },
              {
                icon: <Search className="w-8 h-8 text-blue-500" />,
                title: "Local Keyword Research",
                description: "I identify search terms with geographic modifiers and local intent that your audience actually uses, and map them to pages with high conversion potential."
              },
              {
                icon: <Layout className="w-8 h-8 text-blue-500" />,
                title: "Service & Location Page Strategy",
                description: "I create or optimize dedicated pages for each service or city, using local schema, internal linking, and content that drives both rankings and relevance."
              },
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: "NAP Consistency & Citation Building",
                description: "I clean up and standardize your business data across trusted directories to reinforce trust signals with Google."
              },
              {
                icon: <FileText className="w-8 h-8 text-blue-500" />,
                title: "Local Content Planning",
                description: "I design a blog and content strategy that supports your authority within your city or region — focusing on search intent and seasonal relevance."
              },
              {
                icon: <Star className="w-8 h-8 text-blue-500" />,
                title: "Review Strategy & Local Authority Signals",
                description: "I help you build review acquisition strategies and local backlinks that boost visibility and trust within your target area."
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
            A Fully Executed Local SEO Playbook — Not Just Map Pins
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Google Business Profile optimization checklist",
              "Local keyword research report (city/service-specific)",
              "Optimized or newly built location pages",
              "Citation cleanup and top-tier listings",
              "Local content calendar (monthly or quarterly)",
              "Review strategy framework",
              "Performance tracking setup (calls, clicks, direction requests)"
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
              "You serve clients in a specific geographic area",
              "You're competing with local businesses and need an edge",
              "You have multiple locations and no ranking consistency",
              "Your Google listing isn't showing up or converting",
              "You've never had a local SEO strategy tailored to your market"
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
              Dominate Your Local Market — Without Guessing
            </h2>
            <p className="text-xl text-blue-100 mb-12 text-center">
              If local customers can't find you, they won't choose you. I'll help you build a local presence that drives visibility, traffic, and revenue — all from the areas that matter most.
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
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                  What city or region do you serve?
                </label>
                <textarea
                  id="region"
                  name="region"
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
                Request Local SEO Strategy <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
  export default LocalSeo;