import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';

// Mobile accordion component for responsive design
const MobileAccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button 
        className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <span className="font-semibold text-gray-800">{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
};

const VNComparisonTableSection = () => {
  // State for mobile accordion
  const [openItem, setOpenItem] = useState(null);
  
  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  const scrollToApplicationForm = () => {
    const applicationSection = document.getElementById('application-form-section');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Comparison data
const comparisonData = [
  {
    feature: "Kỹ năng nói & lưu loát",
    interlink: "Luyện tập hàng ngày trong môi trường thực tế",
    freePrograms: "Không có tương tác thực tế",
    largeCompetitors: "Kỹ năng nói & lưu loát: Luyện tập hàng ngày trong môi trường thực tế"
  },
  {
    feature: "Sẵn sàng cho đại học",
    interlink: "Nhập học trực tiếp vào đại học, trang bị kỹ năng tư duy phản biện và học thuật",
    freePrograms: "Không có kỹ năng học tập",
    largeCompetitors: "Không có sự bảo đảm nhập học hoặc chuẩn bị"
  },
  {
    feature: "Hỗ trợ cá nhân",
    interlink: "Giảng viên người Mỹ giàu kinh nghiệm",
    freePrograms: "Không có giáo viên",
    largeCompetitors: "Lớp học đông, khóa học chung chung"
  },
  {
    feature: "Chi phí & Giá trị",
    interlink: "Giá cả hợp lý, kết quả tốt nhất",
    freePrograms: "Miễn phí nhưng chậm và không hiệu quả",
    largeCompetitors: "Hơn $5,000 mỗi học kỳ, giá quá cao"
  },
  {
    feature: "Lớp học hấp dẫn",
    interlink: "Các dự án thực tế, liên quan đến mục tiêu của bạn. Không có sách giáo khoa/thi cử",
    freePrograms: "Không có lớp học",
    largeCompetitors: "Bài học nhàm chán, sách giáo khoa, thi cử"
  }
];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-12"
        >
          Tại sao chọn INTERLINK? Xem sự khác biệt ngay lập tức
        </motion.h2>
        
        {/* Desktop Comparison Table - Hidden on mobile */}
        <div className="hidden md:block overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <span className="text-lg font-bold text-gray-700">Tiêu chí</span>
                </th>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-[#064088]">INTERLINK</span>
                    <Check className="ml-2 text-green-500 w-5 h-5" />
                  </div>
                </th>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-700">Chương trình miễn phí</span>
                    <X className="ml-2 text-red-500 w-5 h-5" />
                  </div>
                </th>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-700">Đối thủ lớn</span>
                    <DollarSign className="ml-2 text-yellow-500 w-5 h-5" />
                  </div>
                </th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <span className="font-semibold text-gray-800">{row.feature}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-start">
                      <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.interlink}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-start">
                      <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.freePrograms}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-start">
                      <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.largeCompetitors}</span>
                    </div>
                  </td>
                </tr>
              ))}
              
              {/* Conclusion Row */}
              <tr className="border-t-2 border-gray-300 bg-gray-50">
                <td className="p-4">
                  <span className="font-bold text-lg text-gray-800">Kết luận</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-green-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-[#064088] font-bold text-lg">Giá trị tốt nhất, kết quả đã được chứng minh</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="text-red-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-gray-800 font-bold text-lg">Thiếu cấu trúc, không tiến bộ thực</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="text-yellow-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-gray-800 font-bold text-lg">Bài học đắt và nhàm chán, không chuẩn bị cho đại học</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Mobile Comparison Cards - Visible only on mobile */}
        <div className="md:hidden mb-12">
          {/* Provider Cards */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            {/* INTERLINK Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#064088] p-4">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-white">INTERLINK</span>
                  <Check className="ml-2 text-green-100 w-5 h-5" />
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <div key={index} className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{row.feature}</h4>
                    <div className="flex items-start">
                      <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.interlink}</span>
                    </div>
                  </div>
                ))}
                
                {/* Conclusion for INTERLINK */}
                <div className="p-4 bg-green-50">
                  <h4 className="font-semibold text-gray-800 mb-2">Kết luận</h4>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-green-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-[#064088] font-bold text-lg">Giá trị tốt nhất, kết quả đã được chứng minh</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Free Programs Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-700 p-4">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-white">Chương trình miễn phí</span>
                  <X className="ml-2 text-red-300 w-5 h-5" />
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <div key={index} className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{row.feature}</h4>
                    <div className="flex items-start">
                      <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.freePrograms}</span>
                    </div>
                  </div>
                ))}
                
                {/* Conclusion for Free Programs */}
                <div className="p-4 bg-red-50">
                  <h4 className="font-semibold text-gray-800 mb-2">Kết luận</h4>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="text-red-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-gray-800 font-bold text-lg">Thiếu cấu trúc, không tiến bộ bền vững</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Large Competitors Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-700 p-4">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-white">Đối thủ lớn</span>
                  <DollarSign className="ml-2 text-yellow-300 w-5 h-5" />
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <div key={index} className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{row.feature}</h4>
                    <div className="flex items-start">
                      <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.largeCompetitors}</span>
                    </div>
                  </div>
                ))}
                
                {/* Conclusion for Large Competitors */}
                <div className="p-4 bg-yellow-50">
                  <h4 className="font-semibold text-gray-800 mb-2">Kết luận</h4>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="text-yellow-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-gray-800 font-bold text-lg">Ổn nhưng đắt và không cá nhân hóa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Alternative: Feature Accordion */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mt-8">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-800">So sánh theo tiêu chí</h3>
            </div>
            
            {comparisonData.map((row, index) => (
              <MobileAccordionItem 
                key={index}
                title={row.feature}
                isOpen={openItem === index}
                onClick={() => toggleItem(index)}
              >
                <div className="space-y-4">
                  {/* INTERLINK */}
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <div className="flex items-center mb-2">
                      <span className="font-bold text-[#064088]">INTERLINK</span>
                      <Check className="ml-2 text-green-500 w-4 h-4" />
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.interlink}</span>
                    </div>
                  </div>
                  
                  {/* Free Programs */}
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <div className="flex items-center mb-2">
                      <span className="font-bold text-gray-700">Chương trình miễn phí</span>
                      <X className="ml-2 text-red-500 w-4 h-4" />
                    </div>
                    <div className="flex items-start">
                      <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.freePrograms}</span>
                    </div>
                  </div>
                  
                  {/* Large Competitors */}
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <div className="flex items-center mb-2">
                      <span className="font-bold text-gray-700">Đối thủ lớn</span>
                      <DollarSign className="ml-2 text-yellow-500 w-4 h-4" />
                    </div>
                    <div className="flex items-start">
                      <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{row.largeCompetitors}</span>
                    </div>
                  </div>
                </div>
              </MobileAccordionItem>
            ))}
            
            {/* Final Takeaway Accordion Item */}
            <MobileAccordionItem 
              title="Kết luận"
              isOpen={openItem === comparisonData.length}
              onClick={() => toggleItem(comparisonData.length)}
            >
              <div className="space-y-4">
                {/* INTERLINK */}
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <div className="flex items-center mb-2">
                    <span className="font-bold text-[#064088]">INTERLINK</span>
                    <Check className="ml-2 text-green-500 w-4 h-4" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-green-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-[#064088] font-bold text-lg">Giá trị tốt nhất, kết quả đã được chứng minh</span>
                  </div>
                </div>
                
                {/* Free Programs */}
                <div className="bg-red-50 p-3 rounded border border-red-200">
                  <div className="flex items-center mb-2">
                    <span className="font-bold text-gray-700">Chương trình miễn phí</span>
                    <X className="ml-2 text-red-500 w-4 h-4" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="text-red-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-gray-800 font-bold text-lg">Thiếu cấu trúc, không tiến bộ bền vững</span>
                  </div>
                </div>
                
                {/* Large Competitors */}
                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                  <div className="flex items-center mb-2">
                    <span className="font-bold text-gray-700">Đối thủ lớn</span>
                    <DollarSign className="ml-2 text-yellow-500 w-4 h-4" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="text-yellow-600 w-4 h-4" />
                    </div>
                    <span className="ml-2 text-gray-800 font-bold text-lg">Ổn nhưng đắt và không cá nhân hóa</span>
                  </div>
                </div>
              </div>
            </MobileAccordionItem>
          </div>
        </div>
        
        {/* Apply Now Button */}
        <div className="flex justify-center mt-10">
<button
  data-open-optin
  className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md"
>
  Nộp đơn ngay &nbsp;và bắt đầu
</button>
        </div>
      </div>
    </section>
  );
};

export default VNComparisonTableSection;
