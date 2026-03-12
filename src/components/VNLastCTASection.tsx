import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const VNLastCTASection = () => {
  // Function to track application clicks
  const trackApplicationClick = (section: string) => {
    // This function would implement tracking logic
    console.log(`Application clicked from ${section}`);
  };

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
            Hãy Biến Điều Này Thành Hiện Thực – Đăng Ký Ngay và Nhận Hướng Dẫn Chuyên Gia!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 mb-8"
          >
            Tương lai của bạn bắt đầu với một bước đơn giản: Điền vào đơn đăng ký, và chúng tôi sẽ hướng dẫn bạn từ đó!
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
                <span className="text-gray-700">Không chắc chắn chương trình nào phù hợp với bạn nhất? Chúng tôi sẽ giúp bạn quyết định.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#064088] font-bold mr-2">✅</span>
                <span className="text-gray-700">Cần giúp đỡ về visa và giấy tờ? Chúng tôi sẽ hướng dẫn bạn từng bước.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#064088] font-bold mr-2">✅</span>
                <span className="text-gray-700">Muốn lên kế hoạch cho hành trình của bạn từng bước một? Chúng tôi sẽ đồng hành cùng bạn suốt hành trình.</span>
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
            Tương lai của bạn bắt đầu với một bước đơn giản: Điền vào đơn đăng ký, và chúng tôi sẽ hướng dẫn bạn từ đó!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            {/* 🔗 Final CTA Button — opens external application form in new tab */}
<Button
  data-open-optin
  className="bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold py-5 px-6 rounded-lg text-lg flex items-center gap-2 w-full sm:w-auto min-h-[4rem] justify-center"
>
  <span className="text-center">Đăng Ký Ngay – Cùng Lên Kế Hoạch Cho Tương Lai Của Bạn</span>
  <ArrowRight size={20} className="flex-shrink-0" />
</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VNLastCTASection;
