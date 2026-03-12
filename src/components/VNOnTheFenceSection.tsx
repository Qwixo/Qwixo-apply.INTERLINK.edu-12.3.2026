import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const VNMessageFromAnna = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#064088] mb-2">
              🤫 Pssst… Nếu bạn không chắc chắn, hãy đọc phần này
            </h2>
            <h3 className="text-xl text-[#3a6ea5] font-medium">
              Thông điệp cá nhân từ Ana, Giám đốc Tuyển sinh của bạn
            </h3>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <img
              src="https://i0.wp.com/interlink.edu/wp-content/uploads/2017/02/kg021717-valdivia_ana-4.jpg?resize=600%2C600&ssl=1"
              alt="Anna Valdivia"
              className="w-[150px] h-[150px] rounded-full object-cover border-4 border-[#064088]/20 flex-shrink-0 mx-auto md:mx-0"
            />

            <div className="bg-gray-50 p-6 rounded-xl shadow-md w-full">
              <p className="text-lg text-gray-700 italic font-medium leading-relaxed">
                Tôi biết rằng quyết định này có thể cảm thấy quá sức. Tôi đã nói chuyện với rất nhiều sinh viên trong suốt những năm qua, những người không chắc chắn về tiếng Anh, tương lai của họ, hoặc liệu họ có thể thực sự thành công tại Mỹ không.
                <br /><br />
                Một số người trong số họ không tin rằng việc học tại Mỹ là khả thi đối với họ. Những người khác cảm thấy bối rối về cách thực hiện điều đó. Nhưng tôi đã chứng kiến sự thay đổi khi sinh viên nhận được sự hỗ trợ đúng đắn. Sự tự tin phát triển, tiến bộ xảy ra, và những ước mơ bắt đầu trở nên thật sự.
                <br /><br />
                Đó là lý do chúng tôi ở đây tại INTERLINK. Chúng tôi sẽ giúp bạn từng bước một — từ việc nộp đơn và phỏng vấn visa, đến khi bạn đến Mỹ và bắt đầu hành trình học tiếng Anh, cho đến khi chuyển tiếp vào các lớp đại học. Bạn không phải làm điều này một mình — chúng tôi sẽ hướng dẫn bạn từng bước.
                <br /><br />
                Nếu bạn đang đọc điều này, có nghĩa là bạn đã đang xem xét việc thực hiện một bước đi lớn cho tương lai của mình. Tôi rất mong được giúp bạn thực hiện điều đó.
                <br /><br />
                Đừng ngần ngại gửi email cho tôi tại admissions@interlink.edu và tôi sẽ rất vui khi được giúp đỡ!
              </p>

              <p className="text-right text-gray-700 italic font-medium mt-6">
                — Ana Valdivia, Giám đốc Tuyển sinh tại INTERLINK
              </p>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center mt-4">
            {/* 🔗 CTA from Anna’s Message — opens application form in new tab with tracking */}
<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="bg-[#dc5d33] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
  data-open-optin
>
  <span>Nộp đơn ngay và cùng trò chuyện</span>
  <ArrowRight size={16} />
</motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VNMessageFromAnna;
