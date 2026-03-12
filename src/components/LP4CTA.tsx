import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useUTMParams } from '../hooks/useUTMParams';
import LP4PopupModal from './LP4PopupModal';

const LP4CTA = () => {
  const utmParams = useUTMParams();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="lp4cta" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#064088] mb-4"
        >
          Ready to Prepare for U.S. University?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-700 mb-6"
        >
          Get our free guide with the 5 essential steps to start your journey. You'll learn how to choose the right program, plan your budget, and prepare your English. If you're seriously considering studying with INTERLINK, we can also connect you with a personal advisor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg p-6 shadow-sm"
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const data = new URLSearchParams();

              data.append('FNAME', formData.get('FNAME') as string);
              data.append('EMAIL', formData.get('EMAIL') as string);
              data.append('u', '607289d66021f9dbd8e30d04c');
              data.append('id', 'f16b13f8cc');
              data.append('UTM_SOURCE', formData.get('UTM_SOURCE') as string);
              data.append('UTM_MEDIUM', formData.get('UTM_MEDIUM') as string);
              data.append('UTM_CAMP', formData.get('UTM_CAMP') as string);
              data.append('UTM_CONT', formData.get('UTM_CONT') as string);
              data.append('UTM_TERM', formData.get('UTM_TERM') as string);
              data.append('MMERGE13', 'jan-lead');
              data.append('ADVISOR', formData.get('ADVISOR') as string);


              await fetch('https://interlink.us11.list-manage.com/subscribe/post', {
                method: 'POST',
                mode: 'no-cors',
                body: data,
              });
              
              // ⬇️ ADD THIS
              if (typeof gtag !== 'undefined') {
                const callback = () => {
                  console.log('✅ Google Ads conversion fired (callback)');
                };
              
                gtag('event', 'conversion', {
                  send_to: 'AW-1043003990/gNYTCOqGlLQaENb0q_ED', // 🔁 same as HeroSection
                  event_callback: callback,
                });
              
                setTimeout(callback, 1000);
              } else {
                console.warn('❌ gtag not defined');
              }
              
              // ⬇️ Keep this AFTER the gtag firing
              setShowPopup(true);
                          }}
            className="space-y-4"
          >
            <input
              type="text"
              name="FNAME"
              placeholder="First Name (e.g. John)"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064088] focus:border-transparent text-black"
            />

            <input
              type="email"
              name="EMAIL"
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064088] focus:border-transparent text-black"

            />

            <div className="relative">
            <select
  name="ADVISOR"
  required
  defaultValue=""
  onChange={(e) => {
    const select = e.currentTarget;
    select.classList.remove('text-gray-500');
    if (select.value !== '') {
      select.classList.add('text-black');
    } else {
      select.classList.add('text-gray-500');
    }
  }}
  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg appearance-none bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#064088] focus:border-transparent"
>
  <option value="" disabled hidden>
    Would you like to speak with an advisor?
  </option>
  <option value="Yes">Yes, I’m seriously considering studying with INTERLINK.</option>
  <option value="No">No, just curious for now.</option>
</select>
  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
    </svg>
  </div>
</div>

            <input type="hidden" name="u" value="607289d66021f9dbd8e30d04c" />
            <input type="hidden" name="id" value="f16b13f8cc" />
            <input type="hidden" name="UTM_SOURCE" value={utmParams.utm_source} />
            <input type="hidden" name="UTM_MEDIUM" value={utmParams.utm_medium} />
            <input type="hidden" name="UTM_CAMP" value={utmParams.utm_campaign} />
            <input type="hidden" name="UTM_CONT" value={utmParams.utm_content} />
            <input type="hidden" name="UTM_TERM" value={utmParams.utm_term} />
            <input type="hidden" name="MMERGE13" value="jan-lead-LP4" />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-[#dc5d33] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Get The Free Guide</span>
              <ArrowRight size={16} />
            </motion.button>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs text-gray-500 mt-4 flex items-center justify-center"
          >
            <span className="mr-1">📨</span> We'll send you the guide via email and show you the next steps!
          </motion.p>
        </motion.div>

        {showPopup && <LP4PopupModal onClose={() => setShowPopup(false)} />}
      </div>
    </section>
  );
};

export default LP4CTA;
