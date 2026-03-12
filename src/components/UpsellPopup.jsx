import React from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const UpsellPopup = ({ onClose, showClose = true }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 md:p-8"
      >
        {/* Optional Close Icon */}
        {showClose && (
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            <FiX size={22} />
          </button>
        )}

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Text */}
          <div className="text-center md:text-left md:flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#064088] leading-tight mb-3">
              Are you still confused?
            </h2>

            <p className="text-[#3a6ea5] text-lg md:text-xl font-medium leading-snug mb-4">
              Many students say a quick chat with Ana, our admissions director, helped make everything more clear.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              If you’d like guidance on programs, visas, or next steps, fill in the application below and Ana will personally reach out to help! 👍🏻
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => {
                  const url =
                    'https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58';
                  let opened = false;

                  const openTab = () => {
                    if (!opened) {
                      opened = true;
                      window.open(url, '_blank');
                    }
                  };

                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                      send_to: 'AW-1043003990/KpaYCO2GlLQaENb0q_ED',
                      event_callback: openTab,
                    });

                    setTimeout(openTab, 1000); // fallback in case callback is blocked
                  } else {
                    openTab();
                  }

                  onClose();
                }}
                className="bg-[#dc5d33] hover:bg-[#c04d28] text-white font-semibold px-6 py-3 rounded-lg transition w-full sm:w-auto"
              >
                Speak with an expert
              </button>

              <button
                onClick={onClose}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                No thanks, maybe later
              </button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex flex-col items-center md:w-auto">
            <img
              src="https://i0.wp.com/interlink.edu/wp-content/uploads/2017/02/kg021717-valdivia_ana-4.jpg?resize=600%2C600&ssl=1"
              alt="Ana Valdivia"
              className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover shadow-md"
            />
            <p className="mt-2 text-sm font-medium text-[#064088]">Ana Valdivia</p>
            <p className="text-xs text-gray-500">Admissions Director</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UpsellPopup;
