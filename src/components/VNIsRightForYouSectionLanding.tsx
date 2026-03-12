import React from 'react';
import { motion } from 'framer-motion';
import { Map, FileText, DollarSign, Rocket, HelpCircle } from 'lucide-react';

const VNIsRightForYouSectionLanding = () => {
  const cards = [
    {
      icon: <Map className="w-10 h-10 text-[#064088] mb-4" />,
      title: "Bạn mơ đến Mỹ nhưng cần các bước rõ ràng, đơn giản để bắt đầu.",
      description: "Bạn có ước mơ nhưng cần bước đi cụ thể để biến nó thành hiện thực."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-[#064088] mb-4" />,
      title: "Bạn muốn lập ngân sách mà không phải đoán mò.",
      description: "Chúng tôi sẽ cung cấp mốc thời gian và chi phí mà nhiều người bỏ qua."
    },
    {
      icon: <FileText className="w-10 h-10 text-[#064088] mb-4" />,
      title: "Bạn chưa rõ quy trình xin visa hoặc yêu cầu của trường.",
      description: "Đừng lo lắng phải giỏi tiếng Anh trước khi nộp đơn. Chúng tôi sẽ chỉ bạn cách cải thiện trong lúc học tại Mỹ."
    },
    {
      icon: <HelpCircle className="w-10 h-10 text-[#064088] mb-4" />,
      title: "Lo lắng về khả năng tiếng Anh của bạn?",
      description: "Đừng lo về kỹ năng ngôn ngữ – chúng tôi sẽ giúp bạn thành công."
    },
    {
      icon: <Rocket className="w-10 h-10 text-[#064088] mb-4" />,
      title: "Bạn muốn một trải nghiệm thay đổi cuộc đời, mở ra sự nghiệp toàn cầu.",
      description: "Đây có thể là quyết định tuyệt vời nhất của bạn. Hãy biến nó thành hiện thực!"
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
          Tại sao bạn cần hướng dẫn này?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.slice(0, 4).map((card, index) => (
            <CardItem key={index} card={card} index={index} />
          ))}
        </div>
        
        {/* The 5th card spans full width */}
        <div className="mt-6 relative">
          <CardItem card={cards[4]} index={4} fullWidth highlightText />
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  card: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  index: number;
  fullWidth?: boolean;
  highlightText?: boolean;
}

const CardItem = ({ card, index, fullWidth = false, highlightText = false }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${
        fullWidth ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''
      } ${highlightText ? 'border-2 border-[#064088]' : ''}`}
    >
      <div className="flex flex-col">
        {card.icon}
        <h3 className="text-xl font-bold text-[#064088] mb-2">{card.title}</h3>
        {highlightText ? (
          <p className="text-lg font-medium text-[#dc5d33]">
            {card.description}
          </p>
        ) : (
          <p className="text-gray-700">{card.description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default VNIsRightForYouSectionLanding;
