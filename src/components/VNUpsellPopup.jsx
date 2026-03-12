import React from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const VNUpsellPopup = ({ onClose, showClose = true }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 md:p-8"
      >
        {/* Nút đóng (tuỳ chọn) */}
        {showClose && (
          <button
            aria-label="Đóng"
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            <FiX size={22} />
          </button>
        )}

        {/* Nội dung */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Văn bản */}
          <div className="text-center md:text-left md:flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#064088] leading-tight mb-3">
              Bạn vẫn còn băn khoăn?
            </h2>

            <p className="text-[#3a6ea5] text-lg md:text-xl font-medium leading-snug mb-4">
              Nhiều sinh viên nói rằng một cuộc trò chuyện nhanh với Ana, Giám đốc Tuyển sinh của chúng tôi, đã giúp họ hiểu rõ mọi thứ hơn rất nhiều.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Nếu bạn cần tư vấn về chương trình học, visa hoặc các bước tiếp theo, hãy điền vào biểu mẫu bên dưới và Ana sẽ liên hệ trực tiếp để hỗ trợ bạn. 👍🏻
            </p>

            {/* Nút hành động */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => {
                  const url = 'https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58';
                  let opened = false;

                  const openTab = () => {
                    if (!opened) {
                      opened = true;
                      window.open(url, '_blank');
                    }
                  };

                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                      send_to: 'AW-1043003990/KpaYCO2GlLQaENb0q_ED',
                      event_callback: openTab,
                    });

                    setTimeout(openTab, 1000); // dự phòng nếu callback bị chặn
                  } else {
                    openTab();
                  }

                  onClose();
                }}
                className="bg-[#dc5d33] hover:bg-[#c04d28] text-white font-semibold px-6 py-3 rounded-lg transition w-full sm:w-auto"
              >
                Trò chuyện với chuyên gia
              </button>

              <button
                onClick={onClose}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Không, có thể sau
              </button>
            </div>
          </div>

          {/* Ảnh */}
          <div className="flex flex-col items-center md:w-auto">
            <img
              src="https://i0.wp.com/interlink.edu/wp-content/uploads/2017/02/kg021717-valdivia_ana-4.jpg?resize=600%2C600&ssl=1"
              alt="Ana Valdivia"
              className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover shadow-md"
            />
            <p className="mt-2 text-sm font-medium text-[#064088]">Ana Valdivia</p>
            <p className="text-xs text-gray-500">Giám đốc Tuyển sinh</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VNUpsellPopup;
