import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Rocket, GraduationCap } from 'lucide-react';

const VNGuideTeachesSection = () => {
  const benefits = [
    {
      icon: <Trophy className="w-10 h-10 text-[#064088]" />,
      heading: "Điều đó hoàn toàn có thể – Hãy để chúng tôi giúp bạn học tiếng Anh",
      description: "Hàng trăm sinh viên tiếng Anh trung bình, ngân sách hạn chế đã làm được – giờ là đến bạn!"
    },
    {
      icon: <Rocket className="w-10 h-10 text-[#064088]" />,
      heading: "Chúng tôi sẽ hướng dẫn bạn từng bước trong 5 bước đơn giản",
      description: "Lập ngân sách, chọn chương trình phù hợp, và mẹo phỏng vấn visa – tất cả trong hướng dẫn của chúng tôi."
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#064088]" />,
      heading: "Một hành trình thay đổi cuộc đời",
      description: "Học tập tại Mỹ để tăng cơ hội nghề nghiệp, kết bạn và phát triển kỹ năng hữu ích lâu dài."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#064088] mb-12"
        >
          Bạn đang nghĩ đến việc du học Mỹ?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-start"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {benefit.heading}
              </h3>
              <p className="text-gray-700">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VNGuideTeachesSection;
