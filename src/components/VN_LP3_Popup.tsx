import React from 'react'
import { ArrowRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUTMParams } from '../hooks/useUTMParams'

type Props = {
  open: boolean
  onClose: () => void
  guideUrl: string                 // ví dụ "/vi/guide"
  redirectUrl?: string             // ví dụ: liên kết hồ sơ Orbund
  tag?: string                     // thẻ Mailchimp; định danh popup LP3 VI
}

const MC_U = '607289d66021f9dbd8e30d04c'
const MC_ID = 'f16b13f8cc'
// ⚡️ cùng nhãn chuyển đổi như nút gốc
const ADS_SEND_TO = 'AW-1043003990/KpaYCO2GlLQaENb0q_ED'

export default function VN_LP3_Popup({
  open,
  onClose,
  guideUrl,
  redirectUrl,
  tag = 'lp3-popup-vi',
}: Props) {
  const utm = useUTMParams()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 md:p-8 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-lg hover:bg-gray-100"
              aria-label="Đóng"
            >
              <X size={18} />
            </button>

            <div className="text-center mb-4">
              <div className="text-xs md:text-sm uppercase tracking-wide text-[#064088] font-semibold">
                HÔM NAY BẠN ĐƯỢC TẶNG KÈM BẢN HƯỚNG DẪN MIỄN PHÍ!
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#064088] mt-2">
                NHẬP THÔNG TIN ĐỂ TIẾP TỤC HỒ SƠ ĐĂNG KÝ
              </h2>
              <div className="text-[#064088]/90 mt-1">
                Nếu chưa nhận, chúng tôi sẽ gửi hướng dẫn qua email ngay.
              </div>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault()
                const fd = new FormData(e.currentTarget as HTMLFormElement)

                const data = new URLSearchParams()
                data.append('u', MC_U)
                data.append('id', MC_ID)
                data.append('FNAME', (fd.get('FNAME') as string) || '')
                data.append('EMAIL', (fd.get('EMAIL') as string) || '')
                data.append('UTM_SOURCE', utm.utm_source || 'lp3')
                data.append('UTM_MEDIUM', utm.utm_medium || 'popup')
                data.append('UTM_CAMP', utm.utm_campaign || 'lp3-vn-vietnam')
                data.append('UTM_CONT', utm.utm_content || '')
                data.append('UTM_TERM', utm.utm_term || '')
                data.append('MMERGE17', tag)
                data.append('COUNTRY', 'Vietnam');



                try {
                  await fetch('https://interlink.us11.list-manage.com/subscribe/post', {
                    method: 'POST',
                    mode: 'no-cors',
                    body: data,
                  })
                } catch (err) {
                  console.warn('Gửi Mailchimp thất bại (có thể đang offline). Tiếp tục…', err)
                }

                // ✅ Như nút gốc: mở Orbund ở tab mới
                const openInNewTab = () => {
                  const dest =
                    redirectUrl ||
                    'https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58'
                  window.open(dest, '_blank')

                  // Tuỳ chọn: cũng chuyển đến trang hướng dẫn ở tab hiện tại
                  // window.location.href = guideUrl
                }

                if (typeof window !== 'undefined' && (window as any).gtag && navigator.onLine) {
                  let fired = false
                  const cb = () => {
                    if (!fired) {
                      fired = true
                      openInNewTab()
                    }
                  }

                  ;(window as any).gtag('event', 'conversion', {
                    send_to: ADS_SEND_TO,
                    event_callback: cb,
                  })

                  // fallback chỉ chạy nếu callback không kích hoạt
                  setTimeout(cb, 1000)
                } else {
                  console.warn('❌ gtag chưa sẵn sàng hoặc đang offline — mở trang đăng ký trực tiếp')
                  openInNewTab()
                }
              }}
              className="space-y-3"
            >
              <input
                type="text"
                name="FNAME"
                placeholder="HỌ VÀ TÊN"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064088] focus:border-transparent text-gray-800"
              />

              <input
                type="email"
                name="EMAIL"
                placeholder="EMAIL"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064088] focus:border-transparent text-gray-800"
              />

              <button
                type="submit"
                className="w-full bg-[#dc5d33] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Tiếp tục & nhận hướng dẫn</span>
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="mt-4 text-sm text-center text-gray-600">
              Được tin tưởng bởi hàng nghìn học viên tại 60+ quốc gia
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
