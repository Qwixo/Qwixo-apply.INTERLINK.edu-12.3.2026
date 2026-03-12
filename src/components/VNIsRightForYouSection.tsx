import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const VNIsRightForYouSection = () => {
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
          INTERLINK có phù hợp với bạn không?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Perfect For You Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 md:p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-[#064088]">
                INTERLINK hoàn hảo cho bạn nếu bạn…
              </h3>
            </div>
            
            <ul className="space-y-4">
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                Mơ ước được học tập tại Hoa Kỳ và cần một lộ trình rõ ràng, có người hướng dẫn.
              </ListItem>
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                Muốn cải thiện tiếng Anh nhanh chóng với giáo viên giàu kinh nghiệm và lớp học nhỏ.
              </ListItem>
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                Tìm kiếm một cộng đồng hỗ trợ đồng hành cùng bạn trong suốt hành trình.
              </ListItem>
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                Muốn có con đường vào đại học Mỹ mà không cần TOEFL.
              </ListItem>
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                Thích sự hướng dẫn cá nhân hóa thay vì khóa học đại trà một kiểu cho tất cả.
              </ListItem>
            </ul>
          </motion.div>
          
          {/* Might Not Be For You Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 md:p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <XCircle className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-[#064088]">
                INTERLINK có thể không dành cho bạn nếu bạn…
              </h3>
            </div>
            
            <ul className="space-y-4">
              <ListItem icon={<XCircle className="w-5 h-5 text-red-500" />}>
                Chỉ cần tiếng Anh cơ bản không chính thức và không có mục tiêu học thuật.
              </ListItem>
              <ListItem icon={<XCircle className="w-5 h-5 text-red-500" />}>
                Muốn một khóa học hoàn toàn tự học không có sự hỗ trợ có cấu trúc.
              </ListItem>
              <ListItem icon={<XCircle className="w-5 h-5 text-red-500" />}>
                Không có ý định học tập tại Mỹ trong tương lai hay cải thiện cơ hội nghề nghiệp.
              </ListItem>
            </ul>
          </motion.div>
        </div>
        
        {/* Apply Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#dc5d33] text-white font-bold py-4 px-8 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2 text-lg"
          >
            <span>Nộp đơn ngay – Khám phá cách chúng tôi có thể giúp bạn</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const ListItem = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => {
  return (
    <li className="flex items-start">
      <div className="mt-1 mr-3 flex-shrink-0">
        {icon}
      </div>
      <span className="text-gray-700">{children}</span>
    </li>
  );
};

export default VNIsRightForYouSection;
