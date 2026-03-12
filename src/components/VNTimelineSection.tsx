import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: '✅',
    title: 'Chúng tôi Xem Xét Đơn Đăng Ký của bạn',
    description: 'Bạn chưa cần thanh toán — chúng tôi sẽ kiểm tra thông tin và xác nhận sự quan tâm của bạn.',
  },
  {
    icon: '👋',
    title: 'Bạn sẽ nhận được phản hồi từ Ana',
    description: 'Cố vấn tuyển sinh của chúng tôi (như Ana!) sẽ liên lạc để tìm hiểu về mục tiêu của bạn.',
  },
  {
    icon: '🧭',
    title: 'Chúng tôi Giúp Bạn Chọn Chương Trình Phù Hợp Nhất',
    description: 'Chúng tôi sẽ gợi ý chương trình phù hợp dựa trên trình độ, mục tiêu và lịch trình của bạn.',
  },
  {
    icon: '✍️',
    title: 'Bạn Sẽ Nhận Được Các Bước Tiếp Theo Rõ Ràng',
    description: 'Chúng tôi sẽ hướng dẫn bạn qua các thủ tục giấy tờ, câu hỏi visa và bất kỳ điều gì khác.',
  },
  {
    icon: '🎯',
    title: 'Bạn Bắt Đầu Khi Bạn Sẵn Sàng',
    description: 'Chúng tôi sẽ giúp bạn đăng ký, gặp gỡ giáo viên và bắt đầu xây dựng kỹ năng tiếng Anh.',
  },
];

const VNWhatHappensAfterApply = () => {
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
            Điều gì xảy ra sau khi bạn nộp đơn?
          </h2>
          <p className="text-lg text-gray-700">
            Bạn chưa cam kết gì cả — chỉ đơn giản cho chúng tôi biết bạn quan tâm. Sau khi bạn nộp đơn, đây là những gì sẽ xảy ra tiếp theo:
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
          <p className="text-lg text-gray-700 mb-4">
            Đó là tất cả! - Bạn chỉ còn một bước nữa thôi!
            <br />
            Sẵn sàng bắt đầu chưa? Nhấp vào dưới đây và chúng ta cùng bắt đầu.
          </p>

<button
  data-open-optin
  className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md"
>
  Nộp đơn ngay
</button>
        </motion.div>
      </div>
    </section>
  );
};

export default VNWhatHappensAfterApply;
