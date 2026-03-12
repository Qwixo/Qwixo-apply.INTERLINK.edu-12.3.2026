import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Check, Wifi, Award } from 'lucide-react';

const VNStudyOptionsSection = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#064088] mb-4">
            Các lựa chọn học tập – Chọn phương án phù hợp nhất với bạn
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Cho dù bạn muốn trải nghiệm đầy đủ tại một trường đại học ở Mỹ hay cần sự linh hoạt khi học trực tuyến, INTERLINK đều có một chương trình dành cho bạn.
          </p>
        </motion.div>
        
        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* Card 1: In-Person Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Header */}
            <div className="bg-[#064088] p-6 flex items-center">
              <MapPin className="w-6 h-6 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Chương trình học trực tiếp</h3>
            </div>
            
            <div className="p-8">
              {/* Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Địa điểm:</span>
                    <span className="ml-2 text-gray-700">
                      Tại khuôn viên&nbsp;Đại học North Carolina Greensboro<br />
                      (Greensboro, North Carolina, USA)
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Thời gian:</span>
                    <span className="ml-2 text-gray-700">10&nbsp;tuần mỗi cấp độ (hai học kỳ&nbsp;5&nbsp;tuần)</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Học phí:</span>
                    <span className="ml-2 text-gray-700 font-bold">$1,650&nbsp;mỗi học kỳ</span>
                    <div className="text-sm text-gray-600 mt-1">
                      Lưu ý: Sinh viên visa&nbsp;F-1 phải học toàn thời gian.
                    </div>
                  </div>
                </div>
              </div>

{/* Who Is This Best For? */}
<div className="mb-8">
  <h4 className="text-lg font-semibold text-gray-800 mb-4">
    <Users className="inline-block w-5 h-5 mr-2 text-[#064088]" />
    Phù hợp với ai?
  </h4>
  <ul className="space-y-2 text-gray-700">
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">
        <span className="font-semibold">Từ 17 tuổi trở lên</span> và đủ điều kiện xin visa & du lịch đến Mỹ
      </span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">Sinh viên muốn <span className="font-semibold">hòa nhập hoàn toàn</span> vào cuộc sống đại học Mỹ</span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">Người dự định chuyển tiếp vào <span className="font-semibold">đại học ở Mỹ</span></span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">Sinh viên học tốt nhất qua <span className="font-semibold">phương pháp học trực tiếp</span></span>
    </li>
  </ul>
</div>


              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Award className="inline-block w-5 h-5 mr-2 text-[#064088]" />
                  Lợi ích:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Lớp học nhỏ, tương tác (8–12&nbsp;sinh viên)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Đầy đủ quyền truy cập vào cơ sở vật chất của trường đại học</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Hòa nhập văn hóa cùng sinh viên quốc tế</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Được nhập học đại học Mỹ <strong>không cần&nbsp;TOEFL/IELTS</strong> sau khi hoàn thành</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Online Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Header */}
            <div className="bg-[#dc5d33] p-6 flex items-center">
              <Wifi className="w-6 h-6 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Chương trình học trực tuyến</h3>
            </div>
            
            <div className="p-8">
              {/* Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Thời gian:</span>
                    <span className="ml-2 text-gray-700">10&nbsp;tuần mỗi cấp độ (hai học kỳ&nbsp;5&nbsp;tuần)</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Học phí toàn thời gian:</span>
                    <span className="ml-2 text-gray-700 font-bold">$1,650&nbsp;mỗi học kỳ</span>
                    <div className="text-sm text-gray-600 mt-1">(2&nbsp;lớp mỗi ngày)</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Học phí bán thời gian:</span>
                    <span className="ml-2 text-gray-700 font-bold">$825&nbsp;mỗi học kỳ</span>
                    <div className="text-sm text-gray-600 mt-1">(1&nbsp;lớp mỗi ngày)</div>
                  </div>
                </div>
              </div>

{/* Who Is This Best For? */}
{/* Phù hợp với ai? */}
<div className="mb-8">
  <h4 className="text-lg font-semibold text-gray-800 mb-4">
    <Users className="inline-block w-5 h-5 mr-2 text-[#dc5d33]" />
    Phù hợp với ai?
  </h4>
  <ul className="space-y-2 text-gray-700">
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">
        <span className="font-semibold">Từ 15 tuổi trở lên</span> muốn cải thiện tiếng Anh từ bất cứ đâu
      </span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">Sinh viên cần <span className="font-semibold">lịch học linh hoạt</span> và thích học tại nhà</span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">Người chuẩn bị cho việc <span className="font-semibold">du học Mỹ</span> trước khi di chuyển</span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">Chuyên gia bận rộn muốn <span className="font-semibold">học tiếng Anh mà không cần đi lại</span></span>
    </li>
  </ul>
</div>


              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Award className="inline-block w-5 h-5 mr-2 text-[#dc5d33]" />
                  Lợi ích:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Bài học trực tiếp, tương tác cùng chương trình giảng dạy</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Học từ bất kỳ đâu trên thế giới</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Có thể bắt đầu học trực tuyến trong khi xin visa</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* TIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100"
        >
          <p className="text-lg font-semibold text-[#dc5d33] mb-2">
            Mẹo: Bắt đầu học trực tuyến trong khi xin visa — tiết kiệm thời gian và tiền bạc.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Dù bạn ở nước ngoài hay gặp phải sự chậm trễ trong quá trình xin visa, bạn có thể bắt đầu học tiếng Anh trực tuyến và tham gia lớp học trực tiếp khi bạn sẵn sàng.
          </p>
        </motion.div>

        {/* Apply Now */}
        <div className="flex justify-center mt-10">
<motion.button
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md"
  data-open-optin
>
  Đăng ký ngay và bắt đầu hành trình của bạn!
</motion.button>
        </div>
      </div>
    </section>
  );
};

export default VNStudyOptionsSection;
