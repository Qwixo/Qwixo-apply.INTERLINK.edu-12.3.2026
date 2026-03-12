import React from 'react';
import { motion } from 'framer-motion';

const GreensboroHero = () => {
  const handleCTAClick = () => {
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white pt-3 md:pt-4 pb-1 md:pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base uppercase tracking-wider text-[#064088] font-medium mb-3"
          >
            On-campus at UNCG • Greensboro
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Speak English with confidence faster.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto"
          >
            Live classes. You speak every day. Small groups. Fast progress.
          </motion.p>

          {/* Google Drive Video Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-6"
          >
            <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://drive.google.com/file/d/1rA8y00AqAgvszZZ6zD6kPBwNodRVi7dK/preview"
                title="INTERLINK Video"
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center gap-3"
          >
            <button
              onClick={handleCTAClick}
              className="bg-[#dc5d33] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#c24e2b] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start speaking fast
            </button>

            {/* Selective tagline */}
            <p className="text-sm md:text-base text-gray-600 font-medium">
              This program is for serious learners ONLY.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GreensboroHero;
