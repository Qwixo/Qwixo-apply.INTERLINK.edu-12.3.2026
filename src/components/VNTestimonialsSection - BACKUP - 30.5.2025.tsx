import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { Testimonials } from './ui/testimonials';

const VNTestimonialsSection = ({ guideStyle = false }) => {
  const scrollToApplicationForm = () => {
    const applicationSection = document.getElementById('application-form-section');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      quote:
        'Tôi có bạn học từ các quốc gia khác và họ không nói tiếng Tây Ban Nha… đối với tôi, điều đó rất hữu ích vì tôi cần luyện tập mỗi ngày. Bây giờ tôi sắp tốt nghiệp. Học tại INTERLINK đã thúc đẩy tôi nói chuyện mỗi ngày — và nó đã hiệu quả!',
      name: 'Lina Rois',
      designation: 'Colombia',
      src: 'https://i.imgur.com/KXVOcwe.jpeg',
    },
    {
      quote:
        'Tôi quyết định ra khỏi vùng an toàn và đầu tư vào sự phát triển cá nhân. Tôi nghĩ rằng khám phá một nền văn hóa mới là cách tốt nhất để mở rộng tầm nhìn của mình. Vì vậy, tôi thấy chương trình INTERLINK là cơ hội hoàn hảo cho gia đình tôi và tôi.',
      name: 'Jimena',
      designation: 'Ecuador',
      src: 'https://i.imgur.com/J1w7fcm.jpeg',
    },
    {
      quote:
        'Tranh luận là điều tôi yêu thích! Tôi thích học cách xây dựng các luận điểm và diễn đạt ý tưởng rõ ràng — điều đó giúp tôi tự tin hơn và giao tiếp tốt hơn. Tôi tự hào về những gì tôi đã phát triển!',
      name: 'Estephania',
      designation: 'Colombia',
      src: 'https://i.imgur.com/oYY7Zxb.png',
    },
    {
      quote:
        'Nhờ INTERLINK, tôi hiểu không chỉ ngôn ngữ tiếng Anh mà còn cả văn hóa và con người ở Mỹ. Tôi đã kết bạn từ nhiều quốc gia và trải nghiệm rất nhiều điều mới mẻ — từ các chuyến tham quan lịch sử trường học đến các lễ hội quốc tế.',
      name: 'Mikey',
      designation: 'Việt Nam',
      src: 'https://i.imgur.com/i4SnHq0.png',
    },
    {
      quote:
        'Tiếng Anh của tôi trước khi học tại INTERLINK không tốt. Tôi phải dừng lại và suy nghĩ trước khi nói, và tôi không biết làm sao để người khác hiểu tôi. Giờ đây, tôi cảm thấy tự tin — tôi có thể nói chuyện, viết bài luận, và người khác hiểu những gì tôi nói!',
      name: 'Chau',
      designation: 'Việt Nam',
      src: 'https://i.imgur.com/bQLjGzi.png',
    },
    {
      quote:
        'Ở đất nước tôi, các lớp học chỉ tập trung vào kiểm tra. INTERLINK tập trung nhiều hơn vào việc áp dụng tiếng Anh vào thực tế.',
      name: 'Huizi',
      designation: 'Trung Quốc',
      src: 'https://i.imgur.com/UN85w6p.jpeg',
    },
    {
      quote:
        'Tôi học được rất nhiều và trân trọng mọi nỗ lực của các giáo viên trong việc giúp chúng tôi có trải nghiệm này. Tôi có rất nhiều kỷ niệm đẹp và vẫn mang theo tất cả bài học cuộc sống. Đó là một cơ hội để học hỏi những điều khác biệt và phát triển bản thân.',
      name: 'Thais',
      designation: 'Brazil',
      src: 'https://i.imgur.com/9VTBhXQ.jpeg',
    },
    {
      quote:
        'Tại INTERLINK, các lớp học rất tương tác, khuyến khích tôi bày tỏ quan điểm và suy nghĩ độc lập. Ban đầu, tôi cảm thấy lo lắng và e ngại khi tham gia, nhưng các thầy cô hỗ trợ đã cung cấp phản hồi quý giá giúp tôi tự tin hơn. Trải nghiệm này không chỉ nâng cao kỹ năng tiếng Anh của tôi mà còn cải thiện khả năng tư duy phản biện. Làm việc nhóm với các bạn học từ nhiều quốc gia đã dạy tôi về sự khác biệt văn hóa và giao tiếp hiệu quả, điều mà tôi tin rằng sẽ có lợi cho việc học của tôi tại UNCG.',
      name: 'Yuna Minami',
      designation: 'Nhật Bản',
      src: 'https://i.imgur.com/ul46HnE.jpeg',
    },
    {
      quote:
        'Việc cân bằng việc học tại INTERLINK với việc làm mẹ toàn thời gian và theo đuổi đam mê nhiếp ảnh là một thử thách, nhưng vô cùng đáng giá. Môi trường hỗ trợ và các lớp học linh hoạt đã giúp tôi phát triển cả về mặt cá nhân lẫn học thuật.',
      name: 'Telma Borges',
      designation: 'Brazil',
      src: 'https://i.imgur.com/Y5lGMLM.jpeg',
    },
  ];

  const shadcnTestimonials = [
    {
      image: 'https://i.imgur.com/KXVOcwe.jpeg',
      text:
        'Tôi có bạn học từ các quốc gia khác và họ không nói tiếng Tây Ban Nha… đối với tôi, điều đó rất hữu ích vì tôi cần luyện tập mỗi ngày. Bây giờ tôi sắp tốt nghiệp. Học tại INTERLINK đã thúc đẩy tôi nói chuyện mỗi ngày — và nó đã hiệu quả!',
      name: 'Lina Rois',
      username: 'Colombia',
      social: 'https://twitter.com',
    },
    {
      image: 'https://i.imgur.com/J1w7fcm.jpeg',
      text:
        'Tôi quyết định ra khỏi vùng an toàn và đầu tư vào sự phát triển cá nhân. Tôi nghĩ rằng khám phá một nền văn hóa mới là cách tốt nhất để mở rộng tầm nhìn của mình. Vì vậy, tôi thấy chương trình INTERLINK là cơ hội hoàn hảo cho gia đình tôi và tôi.',
      name: 'Jimena',
      username: 'Ecuador',
      social: 'https://twitter.com',
    },
    {
      image: 'https://i.imgur.com/oYY7Zxb.png',
      text:
        'Tranh luận là điều tôi yêu thích! Tôi thích học cách xây dựng các luận điểm và diễn đạt ý tưởng rõ ràng — điều đó giúp tôi tự tin hơn và giao tiếp tốt hơn. Tôi tự hào về những gì tôi đã phát triển!',
      name: 'Estephania',
      username: 'Colombia',
      social: 'https://twitter.com',
    },
    {
      image: 'https://i.imgur.com/i4SnHq0.png',
      text:
        'Nhờ INTERLINK, tôi hiểu không chỉ ngôn ngữ tiếng Anh mà còn cả văn hóa và con người ở Mỹ. Tôi đã kết bạn từ nhiều quốc gia và trải nghiệm rất nhiều điều mới mẻ — từ các chuyến tham quan lịch sử trường học đến các lễ hội quốc tế.',
      name: 'Mikey',
      username: 'Việt Nam',
      social: 'https://twitter.com',
    },
    {
      image: 'https://i.imgur.com/bQLjGzi.png',
      text:
        'Tiếng Anh của tôi trước khi học tại INTERLINK không tốt. Tôi phải dừng lại và suy nghĩ trước khi nói, và tôi không biết làm sao để người khác hiểu tôi. Giờ đây, tôi cảm thấy tự tin — tôi có thể nói chuyện, viết bài luận, và người khác hiểu những gì tôi nói!',
      name: 'Chau',
      username: 'Việt Nam',
      social: 'https://twitter.com',
    },
    {
      image: 'https://i.imgur.com/UN85w6p.jpeg',
      text:
        'Ở đất nước tôi, các lớp học chỉ tập trung vào kiểm tra. INTERLINK tập trung nhiều hơn vào việc áp dụng tiếng Anh vào thực tế.',
      name: 'Huizi',
      username: 'Trung Quốc',
      social: 'https://twitter.com',
    },
    {
      image: 'https://i.imgur.com/9VTBhXQ.jpeg',
      text:
        'Tôi học được rất nhiều và trân trọng mọi nỗ lực của các giáo viên trong việc giúp chúng tôi có trải nghiệm này. Tôi có rất nhiều kỷ niệm đẹp và vẫn mang theo tất cả bài học cuộc sống. Đó là một cơ hội để học hỏi những điều khác biệt và phát triển bản thân.',
      name: 'Thais',
      username: 'Brazil',
      social: 'https://twitter.com',
    },
    {
      image: 'https://i.imgur.com/ul46HnE.jpeg',
      text:
        'Tại INTERLINK, các lớp học rất tương tác, khuyến khích tôi bày tỏ quan điểm và suy nghĩ độc lập. Ban đầu, tôi cảm thấy lo lắng và e ngại khi tham gia, nhưng các thầy cô hỗ trợ đã cung cấp phản hồi quý giá giúp tôi tự tin hơn. Trải nghiệm này không chỉ nâng cao kỹ năng tiếng Anh của tôi mà còn cải thiện khả năng tư duy phản biện. Làm việc nhóm với các bạn học từ nhiều quốc gia đã dạy tôi về sự khác biệt văn hóa và giao tiếp hiệu quả, điều mà tôi tin rằng sẽ có lợi cho việc học của tôi tại UNCG.',
      name: 'Yuna Minami',
      username: 'Nhật Bản',
      social: 'https://twitter.com',
    },
    {
      image: 'https://i.imgur.com/Y5lGMLM.jpeg',
      text:
        'Việc cân bằng việc học tại INTERLINK với việc làm mẹ toàn thời gian và theo đuổi đam mê nhiếp ảnh là một thử thách, nhưng vô cùng đáng giá. Môi trường hỗ trợ và các lớp học linh hoạt đã giúp tôi phát triển cả về mặt cá nhân lẫn học thuật.',
      name: 'Telma Borges',
      username: 'Brazil',
      social: 'https://twitter.com',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Tôi đã học nửa năm tại INTERLINK, và tiếng Anh của tôi cải thiện rất nhiều, điều này khiến tôi cảm thấy mình đã sẵn sàng để tham gia chương trình MBA trong tương lai.',
      name: 'Tingting Wang',
      username: 'China',
      social: 'https://twitter.com',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Họ khuyến khích việc học của bạn bằng cách mang đến một môi trường thân thiện nơi bạn có thể phát triển ý tưởng của mình và tương tác với mọi người từ các nền văn hóa khác nhau.',
      name: 'Berta',
      username: 'Brazil',
      social: 'https://twitter.com',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Khi tôi đến đây, tôi không thể viết một đoạn văn bằng tiếng Anh, nhưng bây giờ tôi có thể viết một bài luận dài ba hoặc bốn trang và đó thật tuyệt vời.',
      name: 'Bader',
      username: 'United Arab Emirates',
      social: 'https://twitter.com',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Chương trình này giống như một cánh cổng cho sinh viên quốc tế. Nó đã giúp tôi đạt được mục tiêu khi tôi còn ở đại học... Tôi kết bạn tốt, môi trường xã hội rất động viên, và có nhiều hoạt động bổ sung.',
      name: 'Luis Sandoval',
      username: 'El Salvador',
      social: 'https://twitter.com',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Các giáo viên tại INTERLINK thật tuyệt vời, chuyên nghiệp, nhiệt tình và tận tâm. Họ tập trung vào nhu cầu cá nhân của bạn và giúp bạn cải thiện kỹ năng nói, nghe, đọc và viết.',
      name: 'Concha Muñoz',
      username: 'Spain',
      social: 'https://twitter.com',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Các giáo viên tại INTERLINK quan tâm đến thành công của tôi và họ đảm bảo rằng tôi đã chuẩn bị sẵn sàng cho cuộc sống ở đại học.',
      name: 'Theophilus Twum-Barima',
      username: 'Ghana',
      social: 'https://twitter.com',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Khi tôi tham gia INTERLINK, tôi đã cải thiện kỹ năng viết và nói của mình. Bây giờ, tôi đang hoàn thành chương trình thạc sĩ ngành kỹ thuật công nghiệp với GPA rất cao. Gần đây, tôi đã được nhận vào chương trình tiến sĩ tại cùng trường đại học. Những chương trình này sẽ không thể thực hiện được nếu không có trình độ tiếng Anh mà INTERLINK đã giúp tôi đạt được.',
      name: 'Ayman',
      username: 'Saudi Arabia',
      social: 'https://twitter.com',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Nhờ INTERLINK, tôi có thể giao tiếp thoải mái với người Mỹ cũng như với người nước ngoài.',
      name: 'Mariana',
      username: 'Ecuador',
      social: 'https://twitter.com',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Chương trình chuyên sâu tại Interlink đã cho tôi cơ hội để vượt trội hơn nhiều sinh viên quốc tế tại đại học, vì tại Interlink, các giảng viên đã giúp tôi chuẩn bị cho công việc khối lượng lớn mà tôi có thể phải đối mặt tại trường đại học.',
      name: 'Wesmi Alwesmi',
      username: 'Saudi Arabia',
      social: 'https://twitter.com',
    },
  ];

  // Determine which component to render
  const isGuidePage = guideStyle || window.location.pathname.includes('guide');

  if (isGuidePage) {
    return (
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-6">
            Sinh viên nói gì về chúng tôi
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Mohamed • Lina Rois • Jimena • Estephania • Mikey • Chau • Huizi • Thais • Yuna Minami • Telma Borges
          </p>

          {/* Video Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Video 1 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/knJgo_10Q4I"
                  title="Student Testimonial - Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://i.imgur.com/XlhKLM6.png"
                    alt="Student 1"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#064088]">David Gil-Martinez</h3>
                    <p className="text-sm text-gray-600">Venezuela</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  “Lúc tôi bắt đầu, tôi có một giọng nói rất nặng và so với bản thân lúc đó và bây giờ, thật không thể tin được.”
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/MBqWwl6C7Us"
                  title="Student Testimonial - Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://i.imgur.com/bQLjGzi.png"
                    alt="Student 2"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#064088]">Chau</h3>
                    <p className="text-sm text-gray-600">Việt Nam</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  “Sau khi học khóa học tại INTERLINK, tôi cảm thấy tự tin hơn và tôi có thể giao tiếp với người khác và họ hiểu những gì tôi nói.”
                </p>
              </div>
            </div>
          </div>

          {/* More Students */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[#064088] mb-10">
              Thêm nhiều sinh viên
            </h3>
            <Testimonials
              testimonials={shadcnTestimonials}
              title=""
              description="Đọc những chia sẻ từ các sinh viên đã thay đổi kỹ năng ngôn ngữ của họ với INTERLINK"
            />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-12">
            Sinh viên nói gì về chúng tôi
          </h2>
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>
    );
  }
};

export default VNTestimonialsSection;
