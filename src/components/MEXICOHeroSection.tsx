import React from 'react'
import { ArrowRight } from 'lucide-react'
import { AuroraBackground } from './ui/aurora-background'
import { motion } from 'framer-motion'
import { useUTMParams } from '../hooks/useUTMParams' // adjust path if needed


const SPANISHHeroSection = () => {
  const utmParams = useUTMParams()

  return (
    <AuroraBackground className="px-4 pt-4 pb-12 md:pt-6 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center z-10 relative">
        
        {/* Logo */}
 {/*        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center"
        >
          <img 
            src="https://i.imgur.com/P0IOLMW.png" 
            alt="Interlink Logo" 
            className="h-12 md:h-16"
          />
        </motion.div>
 */}


        {/* Hero Content */}
        <div className="text-center max-w-3xl mb-5">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base uppercase tracking-wider text-[#064088] font-medium mb-3"
          >
            GUÍA GRATUITA – ¡OBTÉNLA AHORA!
          </motion.div>
          
<div className="mb-6">
  <motion.h1 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="text-4xl md:text-5xl font-bold text-[#064088]"
  >
    5 pasos sencillos para estudiar en EE. UU.
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.35 }}
    className="text-2xl md:text-3xl font-bold text-[#064088] mt-3"
  >
    - COMO ESTUDIANTE MEXICANO -
  </motion.p>
</div>

          
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="text-lg md:text-xl text-[#064088] mb-2 opacity-90 max-w-2xl mx-auto"
>
  <p className="mb-3">
    Muchos <span className="underline">estudiantes mexicanos</span> han seguido estos mismos pasos y ahora están cumpliendo sus sueños en EE. UU.
  </p>
  <p className="mb-9">
    Esta guía gratuita te guía por todo, desde <span className="font-semibold">elegir el programa adecuado</span>, <span className="font-semibold">consejos de presupuesto</span>, hasta <span className="font-semibold">prepararte para tus estudios</span>.
  </p>
  <p className="italic text-[#064088]">¡Sólo completa tus datos a continuación y te enviaremos la guía de inmediato!</p>
  </motion.div>



        </div>

        {/* Opt-in Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-4xl mx-auto bg-white/90 p-6 md:p-8 rounded-2xl shadow-lg"
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault()

              const form = e.currentTarget
              const formData = new FormData(form)

              const data = new URLSearchParams()
              data.append('u', '607289d66021f9dbd8e30d04c')
              data.append('id', 'f16b13f8cc')
              data.append('FNAME', formData.get('FNAME') as string)
              data.append('EMAIL', formData.get('EMAIL') as string)
              data.append('UTM_SOURCE', formData.get('UTM_SOURCE') as string)
data.append('UTM_MEDIUM', formData.get('UTM_MEDIUM') as string)
data.append('UTM_CAMP', formData.get('UTM_CAMP') as string)
data.append('UTM_CONT', formData.get('UTM_CONT') as string)
data.append('UTM_TERM', formData.get('UTM_TERM') as string)
data.append('MMERGE17', 'jan-lead-es-hero-form'); // MMERGE13 = internal Mailchimp tag for Country




await fetch('https://interlink.us11.list-manage.com/subscribe/post', {
  method: 'POST',
  mode: 'no-cors',
  body: data,
})

// Fire Google Ads conversion with callback
if (typeof gtag !== 'undefined') {
  const callback = () => {
    console.log('✅ Google Ads conversion fired (callback)');
    window.location.href = '/es/guide';
  };

  gtag('event', 'conversion', {
    send_to: 'AW-1043003990/gNYTCOqGlLQaENb0q_ED', // ✅ Correct label
    event_callback: callback,
  });

  // Fallback in case callback fails
  setTimeout(callback, 1000);
} else {
  console.warn('❌ gtag not defined');
  window.location.href = '/es/guide';
}


            }}
            className="space-y-3"
          >
            <input type="hidden" name="u" value="607289d66021f9dbd8e30d04c" />
            <input type="hidden" name="id" value="f16b13f8cc" />

            <div>
              <input
                type="text"
                name="FNAME"
                placeholder="NOMBRE"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064088] focus:border-transparent text-gray-800"
              />
            </div>

            <div>
              <input
                type="email"
                name="EMAIL"
                placeholder="CORREO ELECTRÓNICO"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064088] focus:border-transparent text-gray-800"
              />
            </div>
            <input type="hidden" name="UTM_SOURCE" value={utmParams.utm_source} />
<input type="hidden" name="UTM_MEDIUM" value={utmParams.utm_medium} />
<input type="hidden" name="UTM_CAMP" value={utmParams.utm_campaign} />
<input type="hidden" name="UTM_CONT" value={utmParams.utm_content} />
<input type="hidden" name="UTM_TERM" value={utmParams.utm_term} />
<input type="hidden" name="MMERGE17" value="jan-lead-es-hero-form" />


            <button
              type="submit"
              className="w-full bg-[#dc5d33] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Accede ahora mismo</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-4 text-sm text-center text-gray-600">
            Respaldado por miles de estudiantes en más de 60 países
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  )
}

export default SPANISHHeroSection;
