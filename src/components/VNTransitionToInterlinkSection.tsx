import React from 'react';
import { motion } from 'framer-motion';

const VNTransitionToInterlinkSection = () => {
  return (
    <section className="w-full py-20 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#064088] mb-6"
        >
          Vậy, những gì sẽ xảy ra tiếp theo?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto"
        >
          Bạn đã thấy 5 bước. Giờ đây, INTERLINK giúp mọi thứ trở nên dễ dàng — từ việc hỗ trợ visa đến bắt đầu học tại Hoa Kỳ hoặc trực tuyến.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-gray-600 max-w-2xl mx-auto"
        >
          Cho dù bạn đang nộp đơn học trực tiếp hay trực tuyến, chúng tôi sẽ hướng dẫn bạn qua từng bước — để bạn không phải tự tìm hiểu.
        </motion.p>
      </div>
    </section>
  );
};

export default VNTransitionToInterlinkSection;
