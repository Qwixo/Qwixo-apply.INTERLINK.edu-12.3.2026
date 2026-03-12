import React from 'react';
import { motion } from 'framer-motion';

const SPANISHTransitionToInterlinkSection = () => {
  return (
    <section className="w-full py-20 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#064088] mb-6"
        >
          ¿Y ahora qué sucede?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto"
        >
          Has visto los 5 pasos. Ahora, así es como INTERLINK hace todo fácil — desde la ayuda con la visa hasta el inicio de tus estudios en EE. UU. o en línea.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-gray-600 max-w-2xl mx-auto"
        >
          Ya sea que solicites estudios presenciales o en línea, te guiaremos en cada paso — para que no tengas que averiguarlo por tu cuenta.
        </motion.p>
      </div>
    </section>
  );
};

export default SPANISHTransitionToInterlinkSection;
