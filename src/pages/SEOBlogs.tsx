import React, { useState } from 'react';
import { FileText, ArrowRight, Target, Layout, Calendar, BookOpen, FileCheck, Users } from 'lucide-react';

const SeoBlogs = () => {
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
              Blogs Shouldn't Just Rank — They Should Convert
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              Most blogs waste time chasing keywords and padding word counts. I create SEO blogs that are driven by strategy, backed by research, and built to drive meaningful traffic, build authority, and generate qualified leads over time.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 mx-auto text-lg">
              Request Blog Strategy & Samples <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* What Are SEO Blogs Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Your Blog Isn't Just a Content Hub — It's a Scalable Traffic Engine
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              SEO blogs aren't generic how-to articles or keyword-stuffed posts. When done right, they answer specific search intent, guide users through decision stages, and fuel your organic visibility across dozens of queries.
            </p>
            <p className="text-xl text-gray-600 font-semibold">
              The goal isn't just clicks — it's trust, traffic, and conversions. Every blog I create is mapped to search intent, funnel stages, and business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Most Blogs Never Pay Off Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ranking Doesn't Equal Relevance — Or Revenue
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            The problem isn't that you're not publishing. It's that you're publishing without strategy. Without a well-researched content plan, your blog may:
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Target keywords no one is searching for</p>
                </li>
                <li className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Compete with your own pages (cannibalization)</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Fail to move readers toward a CTA</p>
                </li>
                <li className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Blend into the noise of generic content</p>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900 text-center italic">
            A blog without intent-backed content becomes a cost — not an asset.
          </p>
        </div>
      </section>

      {/* SEO Blogging Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Every Blog Starts With Strategy — Not Just Keywords
          </h2>
          <div className="space-y-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: "Topic Ideation Through Intent & Funnel Mapping",
                description: "I don't just brainstorm topics — I map them based on audience pain points, search behavior, and business objectives."
              },
              {
                icon: <Layout className="w-8 h-8 text-blue-500" />,
                title: "Keyword Research & Opportunity Sizing",
                description: "Each blog is backed by high-intent, low-competition keywords with contextual alignment to your offerings."
              },
              {
                icon: <FileText className="w-8 h-8 text-blue-500" />,
                title: "On-Page Structure & Content Briefing",
                description: "I create detailed outlines including title, meta data, subheadings, word count targets, internal links, and schema suggestions."
              },
              {
                icon: <BookOpen className="w-8 h-8 text-blue-500" />,
                title: "SEO-Optimized Writing",
                description: "Content is written (or reviewed) to align with Google's expectations — using clarity, value, and originality, not filler."
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "Internal Link Architecture Integration",
                description: "Every blog supports key commercial pages through carefully placed internal links — building topical relevance and boosting authority."
              },
              {
                icon: <FileCheck className="w-8 h-8 text-blue-500" />,
                title: "Upload-Ready & Publish-Optimized",
                description: "Each blog is delivered with formatting, image tags, meta tags, and CTA suggestions — ready to go live."
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
            Blogs That Rank With Purpose — And Perform Over Time
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Monthly blog strategy plan (topic + keyword + intent)",
              "Professionally written SEO blogs",
              "On-page optimized (meta title, description, headings)",
              "Internal link and CTA integration",
              "Upload-ready formatting (Google Docs or CMS-ready)",
              "Optional content calendar for monthly/quarterly publishing"
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
            This Service Is Built for You If…
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "You want blog content that actually drives business results",
              "You're publishing content that's not ranking or converting",
              "You've run out of strategic blog ideas",
              "You're entering a new niche and want visibility",
              "You need a repeatable content engine that scales"
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
              Stop Publishing for the Sake of Publishing
            </h2>
            <p className="text-xl text-blue-100 mb-12 text-center">
              Let's turn your blog into a traffic-generating, authority-building, lead-converting engine — built with strategy, not shortcuts.
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
                <label htmlFor="topics" className="block text-sm font-medium text-gray-700 mb-2">
                  What topics or services are you trying to rank for?
                </label>
                <textarea
                  id="topics"
                  name="topics"
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
                Get Your SEO Blog Strategy <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
  
  export default SeoBlogs;