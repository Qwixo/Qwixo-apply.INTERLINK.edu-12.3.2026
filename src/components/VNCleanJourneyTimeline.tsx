import React from 'react';
import { motion } from 'framer-motion';
import { Timeline, TimelineItem } from './ui/timeline';

const VNCleanJourneyTimeline = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-4">
            Lộ trình hành trình của bạn
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Từ khi nộp đơn đến khi tốt nghiệp, đây là những gì bạn sẽ trải nghiệm khi học cùng INTERLINK.
          </p>
        </motion.div>

        {/* Timeline Items */}
        <Timeline>
          <TimelineItem title="Đăng ký và Nhận chấp nhận" icon="📝">
            <p className="text-gray-700">
              Nộp đơn trực tuyến, nhận thư chấp nhận và mẫu&nbsp;I-20, lên lịch kiểm tra xếp&nbsp;lớp.
            </p>
          </TimelineItem>

          <TimelineItem title="Quá trình xin visa (dành cho sinh viên học trực tiếp)" icon="🛂">
            <p className="text-gray-700">
              Chúng tôi sẽ hướng dẫn bạn qua các tài liệu, phỏng vấn và quá trình chuẩn bị tại đại&nbsp;sứ&nbsp;quán.
            </p>
          </TimelineItem>

          <TimelineItem title="Lên kế hoạch cho chuyến đi của bạn (dành cho sinh viên học trực tiếp)" icon="✈️">
            <p className="text-gray-700">
              Đặt vé máy bay, chuẩn bị đồ dùng cần thiết và sẵn sàng cho hành trình suốt đời.
            </p>
          </TimelineItem>

          <TimelineItem title="Đến nơi và Hướng dẫn nhập học" icon="🏫">
            <p className="text-gray-700">
              Đến trường, tham gia buổi hướng dẫn, gặp gỡ giáo viên và ổn định chỗ&nbsp;ở.
            </p>
          </TimelineItem>

          <TimelineItem title="Học tiếng Anh cùng INTERLINK" icon="📚">
            <p className="text-gray-700">
              Tham gia chương trình học thực tế, phát triển kỹ năng học thuật và giao&nbsp;tiếp.
            </p>
          </TimelineItem>

          <TimelineItem title="Chuyển tiếp vào Đại học" icon="🎓">
            <p className="text-gray-700">
              Hoàn thành chương trình tiếng Anh và chuyển tiếp vào chương trình đại học mà không cần kỳ thi tiếng&nbsp;Anh.
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
};

export default VNCleanJourneyTimeline;
