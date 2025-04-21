import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight, Target, FileText, Settings, Users, Zap, Brain } from 'lucide-react';

const CustomAIAgent = () => {
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
              Build an AI That Understands Your Business — Not Just Your Prompts
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              Most AI tools feel impressive at first — until you realize they don't understand your brand, your tone, or your goals. I create custom-trained AI agents designed to think and respond like someone who knows your business inside out.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 mx-auto text-lg">
              Request AI Agent Strategy Session <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* What Is Custom AI Agent Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Not a Chatbot. Not a Plugin. A Strategic Teammate.
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              A custom AI agent is a task-specific, brand-trained assistant designed to support your team where it matters most — writing content, generating SEO briefs, answering client questions, summarizing documents, or streamlining internal workflows.
            </p>
            <p className="text-xl text-gray-600 font-semibold">
              It doesn't rely on templates or guesswork. It's built on your own tone, materials, and systems — and designed to get smarter over time.
            </p>
          </div>
        </div>
      </section>

      {/* Why You Need More Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Prebuilt AI Feels Smart — Until It Starts Saying Things You'd Never Approve
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Off-the-shelf AI tools aren't built for your business. They don't know your voice. They can't access your internal processes. They treat your SEO agency the same way they'd treat an online clothing store.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Bot className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Inconsistent or off-brand output</p>
                </li>
                <li className="flex items-start gap-4">
                  <Bot className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Rewrites and back-and-forth with your team</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Bot className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Missed opportunities to automate repeatable work</p>
                </li>
                <li className="flex items-start gap-4">
                  <Bot className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">A constant feeling of "almost, but not quite right"</p>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900 text-center italic">
            A custom agent flips that. It speaks like you, writes for you, and works with you.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Built Around Your Workflows — Not Just Your Prompts
          </h2>
          <div className="space-y-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: "Use-Case Definition & Workflow Mapping",
                description: "We start by identifying where an agent will deliver the most leverage — content creation, SEO assistance, summaries, customer support, or internal research."
              },
              {
                icon: <FileText className="w-8 h-8 text-blue-500" />,
                title: "Training Material Curation",
                description: "I collect your documents, writing samples, processes, tone guides, and past outputs to train the agent on how your business thinks and speaks."
              },
              {
                icon: <Settings className="w-8 h-8 text-blue-500" />,
                title: "Instruction Engineering & Logic Building",
                description: "I write the instructions that govern how your AI behaves — including rules, fallbacks, formatting styles, do's/don'ts, and response types."
              },
              {
                icon: <Brain className="w-8 h-8 text-blue-500" />,
                title: "Agent Build & Testing",
                description: "I build your agent using platforms like ChatGPT, Claude, or open-source alternatives — and run multiple rounds of performance testing in real scenarios."
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "Deployment & Team Access",
                description: "I integrate the agent into your preferred platform — whether that's inside ChatGPT, Slack, Notion, your CMS, or a custom UI — with full access control."
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-500" />,
                title: "Iteration & Maintenance (Optional)",
                description: "As your business evolves, I offer performance reviews, updates, and re-training to ensure your agent stays sharp, accurate, and aligned."
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
            A Fully Operational, Brand-Trained AI Agent — Not a Prototype
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Custom-trained AI agent built around your workflows",
              "Detailed instruction logic + tone calibration",
              "Integration into preferred platforms (ChatGPT Pro, Notion, Slack, etc.)",
              "Usage guide + internal SOP for your team",
              "Optional follow-up training or refinements",
              "Ownership and adaptability — it's not locked into a tool you don't control"
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
              "You're spending hours doing work an AI could do in minutes — but can't risk sloppy results",
              "You want a content or SEO assistant that actually understands your strategy",
              "You've tried GPT tools but need something more structured, scalable, and controllable",
              "You want to empower your team without adding headcount",
              "You need AI built around your business — not someone else's prompts"
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
              Let's Build the AI Agent Your Business Deserves
            </h2>
            <p className="text-xl text-blue-100 mb-12 text-center">
              This isn't an experiment. It's a system — built once, used daily, and tailored to how your business thinks, speaks, and delivers value.
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
                <label htmlFor="aiNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                  What would you like your AI assistant to handle?
                </label>
                <textarea
                  id="aiNeeds"
                  name="aiNeeds"
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
                Request Your AI Agent Strategy Session <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomAIAgent;