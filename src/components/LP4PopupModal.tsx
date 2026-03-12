import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LP4PopupModal = ({ onClose }: { onClose: () => void }) => {
  const openInNewTab = () => {
    const url = 'https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58';
    window.open(url, '_blank');
  };

  const handleClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        send_to: 'AW-1043003990/KpaYCO2GlLQaENb0q_ED',
        event_callback: openInNewTab,
      });
      setTimeout(openInNewTab, 1000);
    } else {
      console.warn('❌ gtag not defined');
      openInNewTab();
    }
  };

  const steps = [
    { icon: '✅', text: 'We Review Your Application – no payment needed yet.' },
    { icon: '👋', text: 'You’ll Hear from Ana – your personal advisor will reach out.' },
    { icon: '🧭', text: 'We Help You Choose the Best Program based on your goals.' },
    { icon: '✍️', text: 'You Get Clear Next Steps on paperwork, visas, etc.' },
    { icon: '🎯', text: 'You Start When You’re Ready – we’ll support every step.' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl max-w-xl w-full p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-[#064088] mb-2 text-center">🎉 You’re in!</h3>
          <p className="text-gray-700 text-center mb-4">
            We’ve sent the guide to your email. It should arrive within 5 minutes.
          </p>
          <p className="text-sm text-center italic text-gray-500 mb-10">
            *Please check your SPAM and Promotions folder.
          </p>

          <h4 className="text-2xl font-bold text-[#064088] mb-4 text-center">
            Let’s Make This Real – Apply Now & Get Expert Guidance!
          </h4>

          <div className="space-y-3 text-left mb-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start">
                <span className="mr-2 text-lg">{step.icon}</span>
                <span className="text-gray-700">{step.text}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleClick}
            className="w-full bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold py-4 px-6 rounded-lg text-lg flex items-center justify-center gap-2"
          >
            <span>Apply Now – Let's Plan Your Future</span>
            <ArrowRight size={20} className="flex-shrink-0" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LP4PopupModal;
