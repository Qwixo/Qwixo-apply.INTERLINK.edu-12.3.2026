import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useUTMParams } from '../hooks/useUTMParams'; // adjust path if needed

const VNFinalCTASection = () => {
  const utmParams = useUTMParams()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#064088] mb-4"
          >
            Vẫn đang suy nghĩ? Nhận hướng dẫn ngay bây giờ.
            <br />
            <span className="text-[#dc5d33]">MIỄN PHÍ!</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 mb-8"
          >
            Hàng ngàn sinh viên đã làm theo 5 bước này – tại sao không phải bạn?
            <br />
            Nhập tên và email để khám phá việc du học Mỹ đơn giản như thế nào.
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
  data.append('MMERGE17', 'jan-lead-vn-footer-form');

  await fetch('https://interlink.us11.list-manage.com/subscribe/post', {
    method: 'POST',
    mode: 'no-cors',
    body: data,
  });

  // Unified callback
  const callback = () => {
    console.log('✅ Callback: firing Google + Facebook');

    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }

    window.location.href = '/vn/guide';
  };

  // Fire Google conversion if available
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
      send_to: 'AW-1043003990/gNYTCOqGlLQaENb0q_ED',
      event_callback: callback,
    });

    // Fallback in case callback doesn’t run
    setTimeout(callback, 1000);
  } else {
    console.warn('❌ gtag not defined, fallback to callback');
    callback();
  }
}}

              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="FNAME"
                  placeholder="Tên (ví dụ: John)"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064088] focus:border-transparent text-gray-800"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064088] focus:border-transparent text-gray-800"
                />
              </div>

              <input type="hidden" name="u" value="607289d66021f9dbd8e30d04c" />
<input type="hidden" name="id" value="f16b13f8cc" />

<input type="hidden" name="UTM_SOURCE" value={utmParams.utm_source} />
<input type="hidden" name="UTM_MEDIUM" value={utmParams.utm_medium} />
<input type="hidden" name="UTM_CAMP" value={utmParams.utm_campaign} />
<input type="hidden" name="UTM_CONT" value={utmParams.utm_content} />
<input type="hidden" name="UTM_TERM" value={utmParams.utm_term} />
<input type="hidden" name="MMERGE17" value="jan-lead-vn-footer-form" />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[#dc5d33] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2"
                type="submit"
              >
                <span>Nhận truy cập ngay</span>
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
              <span className="mr-1">📨</span> Chúng tôi sẽ gửi hướng dẫn đến email của bạn ngay lập tức!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VNFinalCTASection;
