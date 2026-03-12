import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';


const V2LastCTASection = () => {
  const APPLY =
    "https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58"
  const ADS_SEND_TO = 'AW-1043003990/KpaYCO2GlLQaENb0q_ED'

  const handleApplyClick = () => {
    const openInNewTab = () => {
      window.open(APPLY, "_blank")
    }

    if (typeof window !== "undefined" && (window as any).gtag && navigator.onLine) {
      let fired = false
      const cb = () => {
        if (!fired) {
          fired = true
          openInNewTab()
        }
      }

      ;(window as any).gtag("event", "conversion", {
        send_to: ADS_SEND_TO,
        event_callback: cb,
      })

      setTimeout(cb, 1000)
    } else {
      console.warn("❌ gtag not defined or offline — opening application directly")
      openInNewTab()
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#064088] mb-4"
          >
            Let's Make This Real – Apply Now & Get Expert Guidance!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 mb-8"
          >
            Applying to study in the U.S. can feel overwhelming—but you're not doing this alone.
            At INTERLINK, we personally guide every student through the process, ensuring you have everything you need to succeed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-sm mb-8"
          >
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <span className="text-[#064088] font-bold mr-2">✅</span>
                <span className="text-gray-700">Not sure which program is best for you? We'll help you decide.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#064088] font-bold mr-2">✅</span>
                <span className="text-gray-700">Need help with visas and documents? We'll walk you through it.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#064088] font-bold mr-2">✅</span>
                <span className="text-gray-700">Want to plan your journey step by step? We're here every step of the way.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-700 font-medium mb-8"
          >
            Your future starts with one simple step: Fill out the application, and we'll guide you from there!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            {/* 🔗 Final CTA Button — Orbund redirect with tracking */}
 <Button
  onClick={handleApplyClick}
  className="bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold py-5 px-6 rounded-lg text-lg flex items-center gap-2 w-full sm:w-auto min-h-[4rem] justify-center"
>
  <span className="text-center">Apply Now – Let's Plan Your Future Together</span>
  <ArrowRight size={20} className="flex-shrink-0" />
</Button>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default V2LastCTASection;
