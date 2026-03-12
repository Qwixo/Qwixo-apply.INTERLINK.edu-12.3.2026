import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './ui/animated-text';

const VNYourJourneySection = () => {
  const steps = [
    {
      number: 1,
      title: "Quyết định rằng bạn muốn bắt đầu",
      description: "Cam kết với một mục tiêu là phần khó nhất của bất cứ điều gì. Một khi bạn đã quyết định đây là điều bạn muốn, mọi thứ sẽ dễ dàng hơn.",
      imageAlt: "Sinh viên vui vẻ bên nhau"
    },
    {
      number: 2,
      title: "Cải thiện tiếng Anh và sự tự tin",
      description: "Phát triển kỹ năng thực tế, không chỉ là điểm số — để bạn sẵn sàng thành công tại đại học.",
      imageAlt: "Sinh viên trong lớp học, thuyết trình và tham gia"
    },
    {
      number: 3,
      title: "Trải nghiệm cuộc sống tại Mỹ",
      description: "Sống trong khuôn viên trường, kết bạn và tận hưởng cuộc sống sinh viên.",
      imageAlt: "Sinh viên trong khuôn viên trường, trong ký túc xá, giao lưu"
    },
    {
      number: 4,
      title: "Một tương lai tốt đẹp đang chờ bạn!",
      description: "Tốt nghiệp từ Interlink, vào đại học mà không cần TOEFL và bắt đầu sự nghiệp của bạn!",
      imageAlt: "Sinh viên đội mũ tốt nghiệp, cầm sách"
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <AnimatedText 
            text="Cuộc sống mơ ước của bạn tại Mỹ bắt đầu từ đây!"
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
            Du học Mỹ không chỉ là học tiếng Anh — mà là trải nghiệm mới, 
            tình bạn mới và những cơ hội mới. Hãy tưởng tượng bạn đang đi dạo quanh khuôn viên đại học, 
            cải thiện tiếng Anh và chuẩn bị cho sự nghiệp tương lai của mình.
          </motion.p>
        </div>
        
        {/* Journey Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Step Number - Changed color to #dc5d33 */}
              <div className="w-12 h-12 rounded-full bg-[#dc5d33] text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">{step.imageAlt}</span>
              </div>
              
              {/* Step Title - Changed color to #dc5d33 */}
              <h3 className="text-xl font-bold text-[#dc5d33] mb-2">{step.title}</h3>
              
              {/* Step Description */}
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VNYourJourneySection;
