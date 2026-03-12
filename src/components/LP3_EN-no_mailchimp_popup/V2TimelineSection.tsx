import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: '✅',
    title: 'We Review Your Application',
    description: 'No payment needed yet — we’ll check your info and confirm your interest.',
  },
  {
    icon: '👋',
    title: 'You’ll Hear from Ana',
    description: 'Our admissions counselor (like Ana!) will reach out to learn about your goals.',
  },
  {
    icon: '🧭',
    title: 'We Help You Choose the Best Program',
    description: 'We’ll suggest the right fit based on your level, goals, and schedule.',
  },
  {
    icon: '✍️',
    title: 'You Get Clear Next Steps',
    description: 'We’ll guide you through paperwork, visa questions, and anything else.',
  },
  {
    icon: '🎯',
    title: 'You Start When You’re Ready',
    description: 'We’ll help you enroll, meet your teachers, and start building your English skills.',
  },
];

const V2WhatHappensAfterApply = () => {
  const APPLY = "https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58";
  const ADS_SEND_TO = 'AW-1043003990/KpaYCO2GlLQaENb0q_ED';

  const handleApplyClick = () => {
    const openInNewTab = () => {
      window.open(APPLY, '_blank');
    };

    if (typeof window !== 'undefined' && (window as any).gtag && navigator.onLine) {
      let fired = false;
      const cb = () => {
        if (!fired) {
          fired = true;
          openInNewTab();
        }
      };

      ;(window as any).gtag('event', 'conversion', {
        send_to: ADS_SEND_TO,
        event_callback: cb,
      });

      setTimeout(cb, 1000);
    } else {
      console.warn('❌ gtag not defined or offline — opening application directly');
      openInNewTab();
    }
  };

  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-4">
            What Happens After You Apply?
          </h2>
          <p className="text-lg text-gray-700">
            You’re not committing to anything yet — just letting us know you’re interested.
            Once you apply, here’s what happens next:
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 flex items-start gap-4"
            >
              <div className="text-2xl">{step.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-[#064088]">{step.title}</h3>
                <p className="text-gray-700 mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="mt-12 text-center"
>
  <div className="text-lg text-gray-700 mb-4">
    <p>That’s it! - You’re just one step away!</p>
    <p>Ready to begin? Click below and let’s get started.</p>
  </div>

  <button
    data-open-optin
    onClick={handleApplyClick}
    className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md"
  >
    Apply Now
  </button>
</motion.div>
      </div>
    </section>
  );
};

export default V2WhatHappensAfterApply;
