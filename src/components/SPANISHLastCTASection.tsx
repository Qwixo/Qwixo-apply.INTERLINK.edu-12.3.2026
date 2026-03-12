import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const SPANISHLastCTASection = () => {
  // Function to track application clicks
  const trackApplicationClick = (section: string) => {
    // This function would implement tracking logic
    console.log(`Application clicked from ${section}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#064088] mb-4"
          >
            Hagámoslo Real: ¡Solicita Ahora y Obtén Asesoría Experta!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 mb-8"
          >
            Postularte para estudiar en EE. UU. puede resultar abrumador, pero no lo haces solo.
            En INTERLINK, guiamos personalmente a cada estudiante en el proceso, asegurándonos de que tengas todo lo necesario para tener éxito.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-sm mb-8"
          >
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <span className="text-[#064088] font-bold mr-2">✅</span>
                <span className="text-gray-700">¿No sabes cuál programa es el mejor para ti? Te ayudamos a decidir.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#064088] font-bold mr-2">✅</span>
                <span className="text-gray-700">¿Necesitas ayuda con visas y documentos? Te guiaremos paso a paso.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#064088] font-bold mr-2">✅</span>
                <span className="text-gray-700">¿Quieres planificar tu camino paso a paso? Estamos contigo en cada etapa.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-700 font-medium mb-8"
          >
            Tu futuro comienza con un paso sencillo: completa la solicitud y te guiaremos desde ahí.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            {/* 🔗 Final CTA Button — opens external application form in new tab */}
<Button
  data-open-optin
  className="bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold py-5 px-6 rounded-lg text-lg flex items-center gap-2 w-full sm:w-auto min-h-[4rem] justify-center"
>
  <span className="text-center">Solicita Ahora – ¡Planifiquemos Tu Futuro Juntos!</span>
  <ArrowRight size={20} className="flex-shrink-0" />
</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SPANISHLastCTASection;
