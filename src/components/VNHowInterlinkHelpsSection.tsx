import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './ui/animated-text';
import { Button } from './ui/button';

const VNHowInterlinkHelpsSection = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Học tiếng Anh nhanh chóng",
      description: "Sử dụng tiếng Anh ngay từ ngày đầu tiên của lớp học. Bằng cách sử dụng tiếng Anh để giao tiếp trong lớp mỗi ngày, bạn sẽ tiến bộ nhanh chóng trong việc đạt được mục tiêu tiếng Anh."
    },
    {
      icon: "🎓",
      title: "Lộ trình vào đại học",
      description: "Xây dựng kỹ năng học thuật cần thiết để chuẩn bị cho đại học. Sau đó, chuyển tiếp vào đại học một cách suôn sẻ mà không cần phải nộp điểm kiểm tra tiếng Anh."
    },
    {
      icon: "🤝",
      title: "Hỗ trợ và hướng dẫn cá nhân",
      description: "Chúng tôi sẽ hướng dẫn bạn qua từng bước trong hành trình của bạn với mục tiêu riêng biệt của bạn. Từ việc đăng ký INTERLINK và quy trình visa, đến việc khám phá các lựa chọn đại học của bạn, chúng tôi sẽ"
    },
    {
      icon: "🚀",
      title: "Con đường hiệu quả đến mục tiêu của bạn",
      description: "Việc đăng ký vào đại học là một khoản đầu tư lớn. Đừng lãng phí thời gian và tiền bạc bắt đầu khi bạn chưa sẵn sàng. INTERLINK chuẩn bị cho bạn về ngôn ngữ, học thuật, và sự khác biệt văn hóa để bạn có thể bắt đầu một cách tự tin."
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <AnimatedText 
            text="Bắt đầu theo đuổi mục tiêu của bạn với INTERLINK!" 
            textClassName="text-3xl md:text-4xl font-bold text-[#064088]"
            underlineClassName="text-[#dc5d33] w-64 md:w-96 mx-auto"
          />
          
          {/* Short Motivational Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 mt-6 max-w-3xl mx-auto"
          >
            INTERLINK giúp bạn đạt được mục tiêu học tập và nghề nghiệp thông qua việc dạy tiếng Anh cá nhân hóa và chuẩn bị vào đại học.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-2">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-[#064088]">{benefit.title}</h3>
              </div>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-10"
        >
{/*          <Button 
            variant="primary" 
            size="lg"
            className="bg-[#dc5d33] hover:bg-[#c04d28] text-white font-semibold px-8 py-3 text-lg rounded-lg shadow-md"
          >
            Be confident that you are prepared
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default VNHowInterlinkHelpsSection;
