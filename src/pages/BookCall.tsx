import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Sparkles,
  Video,
} from 'lucide-react';

const CALENDLY_URL =
  'https://calendly.com/yawarkhanmbd789/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=111827&primary_color=3b82f6';

const BookCall: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-20">
        <div className="absolute inset-0 booking-grid opacity-40" />
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl calendar-glow" />
        <div className="absolute top-20 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl calendar-glow-delayed" />

        <div className="container relative mx-auto max-w-6xl px-6">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="lg:sticky lg:top-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
                <Sparkles size={16} />
                FREE 30-MINUTE SEO STRATEGY CALL
              </div>

              <h1 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Find the SEO moves most likely to grow your revenue next.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Bring me your site, your goals, and your biggest SEO question. I’ll help you spot the highest-impact opportunities and leave you with a clearer path forward.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  { icon: Clock3, title: '30 minutes', text: 'Focused and practical' },
                  { icon: Video, title: 'Online meeting', text: 'Join from anywhere' },
                  { icon: CalendarDays, title: 'Instant invite', text: 'Added to your calendar' },
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
                  >
                    <Icon className="mb-3 text-blue-400" size={22} />
                    <div className="font-bold text-white">{title}</div>
                    <div className="mt-1 text-sm text-slate-400">{text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Pinpoint the biggest constraint holding back organic growth',
                  'Identify realistic quick wins and higher-leverage opportunities',
                  'Leave with clear next steps — whether you decide to work with me or not',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-blue-400" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-slate-400">
                No hard sell. If I’m not the right fit, I’ll still point you toward the most useful next step I can.
              </p>
            </div>

            <div className="animate-slide-up overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl shadow-blue-950/40">
              <div className="flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 text-slate-900 sm:px-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Choose a time</p>
                  <h2 className="mt-1 text-xl font-extrabold sm:text-2xl">Book your strategy call</h2>
                </div>
                <div className="hidden rounded-xl bg-blue-50 p-3 text-blue-600 sm:block">
                  <CalendarDays size={24} />
                </div>
              </div>

              <iframe
                title="Book a 30-minute SEO strategy call with Yawar Khan"
                src={CALENDLY_URL}
                className="block min-h-[760px] w-full bg-white"
                frameBorder="0"
                loading="eager"
              />

              <div className="border-t border-slate-100 bg-slate-50 px-5 py-4 text-center sm:px-7">
                <a
                  href="https://calendly.com/yawarkhanmbd789/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  Having trouble with the calendar? Open Calendly directly
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCall;
