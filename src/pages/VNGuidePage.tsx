import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VNFooter from '../components/VNFooter';
import { FaHandshake, FaChevronDown } from 'react-icons/fa';
import VNHowInterlinkHelpsSection from '../components/VNHowInterlinkHelpsSection';
import VNSpeakingEnglishPaysOffSection from '../components/VNSpeakingEnglishPaysOffSection';
import VNComparisonTableSection from '../components/VNComparisonTableSection';
import VNStudyOptionsSection from '../components/VNStudyOptionsSection';
import VNTimelineSection from '../components/VNTimelineSection';
import VNTestimonialsSection from '../components/VNTestimonialsSection';
import VNOnTheFenceSection from '../components/VNOnTheFenceSection';
import VNIsRightForYouSection from '../components/VNIsRightForYouSection';
import VNFAQSection from '../components/VNFAQSection';
import VNLastCTASection from '../components/VNLastCTASection';
import VNStudentJourneyComparisonSection from '../components/VNStudentJourneyComparisonSection';
import ScrollToTop from '../components/ScrollToTop';
import VNCleanJourneyTimeline from "../components/VNCleanJourneyTimeline";
import VNTransitionToInterlinkSection from '../components/VNTransitionToInterlinkSection';
import VNStudentLifeSection from '../components/VNStudentLifeSection';
import VNUpsellPopup from '../components/VNUpsellPopup'; // Adjust path if needed
import VNUpsellPopup2 from '../components/VNUpsellPopup2'; // Adjust path if needed
import LP3_Popup_Trigger from '../components/LP3_Popup_Trigger'


const VNGuidePage = () => {
  const [isGuideExpanded, setIsGuideExpanded] = useState(false);
  const [showPopup,  setShowPopup]  = useState(false); // 45-s popup
  const [showPopup2, setShowPopup2] = useState(false); // 5-min popup
  const toggleGuideExpansion = () => setIsGuideExpanded(prev => !prev);
  const APPLY = 'https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58'


  useEffect(() => {
    const t1 = setTimeout(() => setShowPopup(true), 45 * 1000);          // 45s popup
    const t2 = setTimeout(() => setShowPopup2(true), 5 * 60 * 1000);     // 5 min popup
    const t3 = setTimeout(() => setShowPopup2(true), 20 * 60 * 1000);    // 20 min (5 + 15)
    const t4 = setTimeout(() => setShowPopup2(true), 60 * 60 * 1000);    // 60 min
  
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      {/* Section 1: Thank You Confirmation - Updated Title with en dash */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Column - Text Content */}
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-[#064088] mb-4"
              >
                Hướng dẫn của bạn đã sẵn sàng!
              </motion.h1>
              
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl font-normal text-[#3a6ea5] mb-6"
              >
                Chỉ cần cuộn xuống và nhấn “Tiếp tục đọc”.
              </motion.h3>
              
              <motion.h4
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-600"
              >
                Chúng tôi cũng đã gửi cho bạn một liên kết qua email. Vui lòng kiểm tra thư mục “Thư rác” và “Quảng cáo”. Email sẽ đến trong vòng 5 phút.
              </motion.h4>
            </div>
            
            {/* Right Column - Image */}
            <div className="md:w-1/2 flex justify-center">
              <motion.img
                src="https://i.imgur.com/D3CCUzf.jpeg"
                alt="Sinh viên học tập tại Hoa Kỳ"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-[250px] md:h-[300px] rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 2: The Full Guide (Expandable) */}
      <section className="w-full py-12 bg-[#f9fafb]">
        <div className="max-w-5xl mx-auto px-4">
          {/* Guide Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-[#064088]"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">5 bước dễ dàng để du học tại Hoa Kỳ</h1>
            <p className="text-lg md:text-xl text-[#dc5d33] font-semibold">Nó dễ dàng hơn bạn nghĩ!</p>
            <p className="mt-4 max-w-2xl mx-auto text-base opacity-90">
              Hàng nghìn sinh viên từ khắp nơi trên thế giới đã thành công khi làm theo 5 bước này. Dưới đây là cách bạn cũng có thể làm theo — từng bước một.
            </p>
          </motion.div>

          {/* Step 1 Full Preview */}
          <div className="mt-12 mb-6 relative bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="md:w-1/2 relative z-10">
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">
                  📘 Bước 1: Tìm chương trình tiếng Anh phù hợp
                </h2>
                <ul className="list-disc ml-6 space-y-1 text-base text-gray-700">
                  <li>Không yêu cầu TOEFL – Bắt đầu mà không cần bài kiểm tra chuẩn hóa</li>
                  <li>Lớp học nhỏ – Thời gian nói nhiều hơn, hỗ trợ nhiều hơn</li>
                  <li>Chuẩn bị đại học – Tiếng Anh học thuật & kỹ năng học tập</li>
                  <li>Hỗ trợ cho sinh viên quốc tế – Hướng dẫn & giúp đỡ văn hóa</li>
                </ul>
                <p className="mt-2 italic text-sm text-gray-700">
                  Mẹo: Các thành phố nhỏ thường an toàn hơn, thân thiện hơn và chi phí sinh hoạt thấp hơn.
                </p>
              </div>
              
              {/* Step 1 Image */}
              <div className="mt-4 md:mt-0 md:w-1/2">
                <img 
                  src="https://i.imgur.com/3ELUZCJ.jpeg" 
                  alt="Lớp học chương trình tiếng Anh" 
                  className="w-full h-[200px] rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
            
            {!isGuideExpanded && (
              <div className="mt-6 border-t pt-4">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-[#064088]">
                  💵 Bước 2: Lập ngân sách
                </h2>
                <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                  <li>Học phí: 1.500–2.500 USD mỗi kỳ 5 tuần</li>
                  <li>Nhà ở & Thực phẩm: 600–1.200 USD/tháng</li>
                </ul>
                <p className="mt-1 italic text-sm text-gray-600">Chi tiết thêm ở Bước 2…</p>
              </div>
            )}

            {/* Fade overlay */}
            {!isGuideExpanded && (
              <div className="absolute bottom-16 left-0 w-full h-32 bg-gradient-to-b from-transparent via-white/90 to-white pointer-events-none z-20 rounded-b-xl" />
            )}

            {/* Continue Reading Button */}
            {!isGuideExpanded && (
              <div className="flex justify-center mt-4 relative z-30">
                <button 
                  onClick={toggleGuideExpansion}
                  className="flex items-center gap-1 text-[#064088] hover:text-[#053067] font-medium text-sm transition-colors px-3 py-1 rounded-md"
                >
                  <FaChevronDown className="text-xs mr-1" />
                  <span>Tiếp tục đọc</span>
                </button>
              </div>
            )}
          </div>
          {/* Expandable Content */}
          <AnimatePresence>
            {isGuideExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid gap-12"
              >
                {/* Step 2 */}
                <div className="bg-white/80 p-6 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row md:gap-6">
                    <div className="md:w-1/2">
                      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">
                        💵 Bước 2: Lập kế hoạch ngân sách
                      </h2>
                      <ul className="list-disc ml-6 space-y-1 text-base text-gray-700">
                        <li>Học phí: 1.500–2.500 USD mỗi kỳ 5 tuần</li>
                        <li>Phí đăng ký: 200–500 USD</li>
                        <li>Chi phí nhà ở và ăn uống: 1.000–2.000 USD/tháng</li>
                        <li>Phí campus: 500–800 USD</li>
                        <li>Phí I-901 (Visa): 350 USD</li>
                      </ul>
                      <p className="mt-2 text-sm text-gray-700">
                        Ngoài học phí, phí visa và chi phí đi lại, bạn cần tính cả chi phí sinh hoạt và
                        thời gian học để hiểu tổng chi phí. Sinh viên mới bắt đầu có thể cần 12–14 tháng
                        học tiếng Anh; sinh viên trung cấp và nâng cao hoàn thành sớm hơn.
                      </p>
                    </div>

                    {/* Step 2 Image */}
                    <div className="mt-4 md:mt-0 md:w-1/2">
                      <img
                        src="https://i.imgur.com/DsP0w0k.jpeg"
                        alt="Lập kế hoạch ngân sách"
                        className="w-full h-[200px] rounded-lg shadow-md object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white/80 p-6 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row md:gap-6">
                    <div className="md:w-1/2">
                      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">
                        📝 Bước 3: Nộp đơn vào trường của bạn
                      </h2>
                      <p className="mb-2 text-base text-gray-700">
                        Hầu hết các đơn xin học đều đơn giản và trực tuyến. Bạn thường sẽ cần:
                      </p>
                      <ul className="list-disc ml-6 space-y-1 text-base text-gray-700">
                        <li>Mẫu đơn đăng ký</li>
                        <li>Hộ chiếu</li>
                        <li>Bảng điểm</li>
                        <li>Chứng minh tài chính (sao kê ngân hàng hoặc thư bảo lãnh)</li>
                        <li>Bản cam kết tài trợ tài chính (nếu có bảo lãnh)</li>
                      </ul>
                    </div>

                    {/* Step 3 Image */}
                    <div className="mt-4 md:mt-0 md:w-1/2">
                      <img
                        src="https://i.imgur.com/43p5ZH1.jpeg"
                        alt="Đơn xin nhập học"
                        className="w-full h-[200px] rounded-lg shadow-md object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-white/80 p-6 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row md:gap-6">
                    <div className="md:w-1/2">
                      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">
                        📄 Bước 4: Lấy visa của bạn
                      </h2>
                      <p className="mb-2 text-base text-gray-700">Chúng tôi sẽ hướng dẫn bạn qua các bước:</p>
                      <ol className="list-decimal ml-6 space-y-1 text-base text-gray-700">
                        <li>Nhận mẫu I-20 sau khi nộp đơn</li>
                        <li>Hoàn thành DS-160 trực tuyến</li>
                        <li>Thanh toán phí SEVIS (I-901)</li>
                        <li>In biên lai SEVIS</li>
                        <li>Ký và ghi ngày trên mẫu I-20</li>
                        <li>Tham gia phỏng vấn visa với đầy đủ tài liệu</li>
                        <li>Được phê duyệt và nhập cảnh vào Hoa Kỳ</li>
                      </ol>
                    </div>

                    {/* Step 4 Image */}
                    <div className="mt-4 md:mt-0 md:w-1/2">
                      <img
                        src="https://i.imgur.com/N5VdBQO.jpeg"
                        alt="Đơn xin visa"
                        className="w-full h-[200px] rounded-lg shadow-md object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-white/80 p-6 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row md:gap-6">
                    <div className="md:w-1/2">
                      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">
                        ✈️ Bước 5: Sẵn sàng cho cuộc phiêu lưu tại Hoa Kỳ
                      </h2>
                      <ul className="list-disc ml-6 space-y-1 text-base text-gray-700">
                        <li>Mua vé máy bay</li>
                        <li>Sắp xếp chỗ ở (trường của bạn có thể giúp đỡ!)</li>
                        <li>Tham gia buổi định hướng</li>
                        <li>Bắt đầu lớp học và kết bạn mới!</li>
                      </ul>
                    </div>

                    {/* Step 5 Image */}
                    <div className="mt-4 md:mt-0 md:w-1/2">
                      <img
                        src="https://i.imgur.com/5gVSrk2.jpeg"
                        alt="Cuộc phiêu lưu tại Hoa Kỳ"
                        className="w-full h-[200px] rounded-lg shadow-md object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Timeline Section */}
                <div className="bg-[#f9fafb] rounded-xl p-6 shadow-inner">
                  <h2 className="text-xl font-bold mb-4 text-[#064088]">🕒 Lịch trình gợi ý</h2>
                  <ul className="list-disc ml-6 text-sm space-y-1 text-gray-700">
                    <li><strong>12 tháng trước:</strong> Nghiên cứu các trường học, bắt đầu lập ngân sách</li>
                    <li><strong>6 tháng trước:</strong> Nộp đơn vào trường, thu thập tài liệu</li>
                    <li><strong>3 tháng trước:</strong> Chuẩn bị tài chính, nộp đơn xin visa</li>
                    <li><strong>1 tháng trước:</strong> Đặt vé máy bay, xác nhận chỗ ở</li>
                  </ul>
                </div>

                {/* Quick Checklist */}
                <div className="bg-[#064088] text-white p-6 rounded-xl">
                  <h2 className="text-xl font-semibold mb-2">✅ Danh sách kiểm tra nhanh</h2>
                  <ul className="list-disc ml-6 space-y-1 text-sm">
                    <li>Chọn chương trình tiếng Anh phù hợp</li>
                    <li>Lập ngân sách hợp lý</li>
                    <li>Chuẩn bị và nộp đơn xin học</li>
                    <li>Thu thập tài liệu và xin visa</li>
                    <li>Đặt vé máy bay và chỗ ở trước khi chương trình của bạn bắt đầu</li>
                  </ul>
                </div>

                {/* Student Testimonials */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-6 text-[#064088]">📣 Những gì học viên của chúng tôi nói</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <blockquote className="bg-white shadow p-4 rounded-lg text-sm italic text-gray-700">
                      “INTERLINK đã thúc đẩy tôi nói chuyện mỗi ngày — và nó đã thành công.”<br/>
                      <span className="font-semibold text-[#dc5d33]">— Lina, Colombia</span>
                    </blockquote>
                    <blockquote className="bg-white shadow p-4 rounded-lg text-sm italic text-gray-700">
                      “Cảm ơn INTERLINK, tôi không chỉ hiểu được tiếng Anh mà còn hiểu về văn hóa và con người ở Hoa Kỳ.”<br/>
                      <span className="font-semibold text-[#dc5d33]">— Mikey, Vietnam</span>
                    </blockquote>
                  </div>
                </div>

                {/* Help CTA */}
                <div className="py-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl shadow-md p-8 md:p-12"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
                      {/* Left Column */}
                      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <div className="flex items-center mb-4">
                          <FaHandshake className="text-[#064088] text-4xl mr-3" />
                          <h2 className="text-3xl md:text-4xl font-bold text-[#064088]">
                            Vẫn chưa chắc chắn bắt đầu từ đâu?
                          </h2>
                        </div>

                        <p className="text-gray-700 text-lg max-w-xl">
                          Đừng lo! Bạn không cần phải tự tìm hiểu mọi thứ một mình.
                        </p>
                        <div className="h-2" />
                        <p className="text-gray-700 text-lg mb-8 max-w-xl">
                          Chúng tôi sẽ giúp bạn hiểu các lựa chọn và bước đầu tiên — với tốc độ của bạn, khi bạn sẵn sàng.
                        </p>

                        <div className="flex justify-center md:justify-start">
                          <button
                            onClick={() => {
                              const url =
                                'https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58';

                              const openInNewTab = () => {
                                window.open(url, '_blank');
                              };

                              if (typeof gtag !== 'undefined') {
                                gtag('event', 'conversion', {
                                  send_to: 'AW-1043003990/KpaYCO2GlLQaENb0q_ED',
                                  event_callback: openInNewTab,
                                });

                                setTimeout(openInNewTab, 1000);
                              } else {
                                console.warn('gtag not defined');
                                openInNewTab();
                              }
                            }}
                            className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md"
                          >
                            Nhận sự hỗ trợ cá nhân hóa
                          </button>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="md:w-1/2 flex justify-center">
                        <img
                          src="https://i.imgur.com/et7cXT3.png"
                          alt="Đội ngũ tuyển sinh"
                          className="w-full h-[300px] rounded-lg shadow-md object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Show Less */}
                <div className="flex justify-center mt-4 mb-6">
                  <button
                    onClick={toggleGuideExpansion}
                    className="flex items-center gap-1 text-[#064088] hover:text-[#053067] font-medium text-sm transition-colors"
                  >
                    <FaChevronDown className="text-xs rotate-180 mr-1" />
                    <span>Hiển thị ít hơn</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* TRANSITION SECTION */}
      <VNTransitionToInterlinkSection />

      {/* REPLACED SECTION */}
      <VNHowInterlinkHelpsSection />

      {/* STUDENT JOURNEY COMP */}
      <VNStudentJourneyComparisonSection />

      {/* COMPARISON TABLE */}
      <VNComparisonTableSection />

      {/* STUDY OPTIONS */}
      <VNStudyOptionsSection />

      {/* Timeline */}
      <VNCleanJourneyTimeline />

      {/* After-apply Timeline */}
      <VNTimelineSection />

      {/* Testimonials */}
      <VNTestimonialsSection />

      {/* Student Life */}
      <VNStudentLifeSection />

      {/* On The Fence */}
      <VNOnTheFenceSection />

      {/* FAQ */}
      <VNFAQSection />

      {/* Final CTA */}
      <VNLastCTASection />

      <VNFooter />
      {showPopup && <VNUpsellPopup onClose={() => setShowPopup(false)} />}
      {showPopup2 && <VNUpsellPopup2 onClose={() => setShowPopup2(false)} />}


<LP3_Popup_Trigger
  locale="es"
  guideUrl="/es/guide"
  redirectUrl={APPLY}
  tag="lp2-popup-es"
/>




    </div>
  );
};

export default VNGuidePage;
