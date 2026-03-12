import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-[#064088]">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#064088] transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-4 text-gray-700"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const VNFAQSection = () => {
  const [showContactInfo, setShowContactInfo] = useState(false); // ✅ Correct placement

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-4">
            Có câu hỏi? Chúng tôi có câu trả lời!
          </h2>
          <p className="text-lg text-gray-700">
            Đây là những câu hỏi phổ biến nhất mà sinh viên thường đặt ra trước khi đăng ký vào INTERLINK. Nhấp vào từng câu hỏi để xem chi tiết.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-10"
        >
          <FAQItem
            question="Học phí là bao nhiêu?"
            answer={
              <p>
                Học phí và chi phí của INTERLINK là $1,650 mỗi kỳ học cho hai lớp học (20 giờ trong lớp mỗi tuần), và $825 mỗi kỳ học cho một lớp học (10 giờ trong lớp mỗi tuần). Nhiều sinh viên có visa du học quốc tế bắt buộc phải học toàn thời gian.
              </p>
            }
          />

          <FAQItem
            question="Thời gian chương trình là bao lâu?"
            answer={
              <p>
                Mỗi khóa học kéo dài 5 tuần. Mỗi cấp độ có hai kỳ, kỳ học kéo dài 5 tuần và kỳ học kéo dài 10 tuần. Tổng thời gian trong chương trình phụ thuộc vào kiến thức tiếng Anh có sẵn của sinh viên. Thời gian lưu trú của một sinh viên tại INTERLINK có thể từ hai đến mười lăm tháng.
              </p>
            }
          />

          <FAQItem
            question="Lịch trình của lớp học như thế nào?"
            answer={
              <p>
                "Từ thứ Hai đến thứ Sáu; Mỗi ngày lớp học kéo dài 2 giờ<br /><br />Học:Đọc và Viết, cùng kỹ năng giao tiếp."
              </p>
            }
          />

          <FAQItem
            question="Tôi có cần một visa du học không?"
            answer={
              <p>
                Có. Tất cả sinh viên dự định học toàn thời gian đều cần có visa du học F-1. Khi bạn hoàn tất đơn đăng ký học, chúng tôi sẽ cấp tất cả các tài liệu cần thiết. Sau đó, bạn có thể xin visa du học F-1.
              </p>
            }
          />

          <FAQItem
            question="Bạn có giúp đỡ về chỗ ở không?"
            answer={
              <p>
                Có. Chỗ ở tại khuôn viên trường phải được xác nhận ít nhất 15 tuần trước khi bắt đầu chương trình.
              </p>
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowContactInfo(true)}
            className="bg-[#064088] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#053067] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            <span>Vẫn còn câu hỏi? Hãy hỏi Ana!</span>
          </motion.button>

          {showContactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="mt-6 bg-white border border-gray-200 rounded-lg shadow-md p-6 text-left max-w-md w-full"
            >
              <h4 className="text-xl font-semibold text-[#064088] mb-2">📬 Liên hệ Ana</h4>
              <p className="text-gray-700 mb-1">
                <strong>Email:</strong>{' '}
                <a href="mailto:admissions@interlink.edu" className="text-blue-600 underline">
                  admissions@interlink.edu
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                <strong>WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/17203912030?text=Hi%2C+I%27m+interested+in+learning+English"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +1 (720) 391-2030
                </a>
              </p>
              <button
                onClick={() => setShowContactInfo(false)}
                className="text-sm text-gray-500 underline hover:text-gray-700"
              >
                Đóng
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VNFAQSection;
