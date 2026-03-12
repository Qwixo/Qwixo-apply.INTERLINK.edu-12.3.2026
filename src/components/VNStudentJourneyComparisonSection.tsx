import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const VNStudentJourneyComparisonSection = () => {
  const scrollToApplicationForm = () => {
    const applicationSection = document.getElementById('application-form-section');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-16"
        >
          INTERLINK giúp bạn chuẩn bị cho đại học như thế nào?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Column A */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md"
          >
            {/* Image */}
            <div className="flex justify-center mb-6">
              <img
                src="https://i.imgur.com/nCobOnt.png"
                alt="Minh trước INTERLINK"
                className="w-full h-48 object-cover rounded-lg max-w-xs"
              />
            </div>

            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <X className="text-red-600 w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-[#064088] leading-snug">
                Minh đã sử dụng <span className="text-[#c24e2b] underline">các ứng dụng</span> miễn phí
                <br />
                <span className="text-lg font-medium text-gray-700">
                  để luyện tập tiếng Anh và đạt được điểm số tối thiểu cần thiết để nhập học đại học.
                </span>
              </h3>
            </div>

            {/* Bullet Points */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Kỹ năng học thuật</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Gặp khó khăn với viết bài học thuật và yêu cầu nghiên cứu.</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Tham gia lớp học</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Quá lo lắng để phát biểu hoặc đặt câu hỏi khi không hiểu bài.</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Hiểu giảng viên & bài tập</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Bỏ lỡ thông tin quan trọng trong bài giảng và hướng dẫn bài tập.</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Chiến lược học tập</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Thiếu thói quen học tập hiệu quả, học nhiều giờ mà không có kết quả.</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Tỷ lệ tốt nghiệp</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Có nguy cơ bỏ học hoặc kéo dài thời gian học.</p>
              </div>
            </div>

            <div className="mt-8 bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="font-bold text-red-700 text-center">
                Cảm thấy quá tải, chưa chuẩn bị, học kém và có nguy cơ bỏ học.
              </p>
            </div>
          </motion.div>

          {/* Column B */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md"
          >
            {/* Image */}
            <div className="flex justify-center mb-6">
              <img
                src="https://i.imgur.com/3LtZD6I.png"
                alt="Hải sau INTERLINK"
                className="w-full h-48 object-cover rounded-lg max-w-xs"
              />
            </div>

            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#064088] leading-snug">
                Hải sau khi học tại <span className="text-green-700 underline">INTERLINK</span>
                <br />
                <span className="text-lg font-medium text-gray-700">
                  Hải đã tham gia INTERLINK để học tiếng Anh và chuẩn bị cho đại học.
                </span>
              </h3>
            </div>

            {/* Bullet Points */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Kỹ năng học thuật</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Học viết học thuật, nghiên cứu và kỹ năng thuyết trình.</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Tham gia lớp học</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Tự tin đặt câu hỏi và tham gia thảo luận trong lớp.</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Hiểu giảng viên & bài tập</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Hiểu rõ bài giảng và yêu cầu bài tập.</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Chiến lược học tập</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Có thói quen học tập hiệu quả và kỹ năng quản lý thời gian.</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Tỷ lệ tốt nghiệp</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Xác suất hoàn thành bằng đúng hạn cao.</p>
              </div>
            </div>

            <div className="mt-8 bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-bold text-green-700 text-center">
                Tự tin, chuẩn bị tốt cho đại học, thành công trong các lớp học và có khả năng tốt nghiệp.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
<motion.button
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md"
  data-open-optin
>
  Hãy đăng ký ngay và bắt đầu hành trình của bạn!
</motion.button>
        </div>
      </div>
    </section>
  );
};

export default VNStudentJourneyComparisonSection;
