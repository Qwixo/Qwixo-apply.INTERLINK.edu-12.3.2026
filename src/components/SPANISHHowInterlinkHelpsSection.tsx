import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './ui/animated-text';
import { Button } from './ui/button';

const SPANISHHowInterlinkHelpsSection = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Aprende inglés rápidamente",
      description: "Utiliza el inglés desde tu primer día de clase. Al interactuar en clase todos los días, avanzarás rápidamente hacia tus objetivos lingüísticos."
    },
    {
      icon: "🎓",
      title: "Camino hacia la universidad",
      description: "Desarrolla las habilidades académicas que necesitas para prepararte para la universidad. Luego, avanza sin problemas a la universidad sin presentar exámenes de inglés."
    },
    {
      icon: "🤝",
      title: "Apoyo y orientación personalizados",
      description: "Te guiaremos en cada paso de tu camino, con tus metas únicas en mente. Desde tu solicitud a INTERLINK y el proceso de visa, hasta explorar tus opciones universitarias, estamos aquí para ayudarte."
    },
    {
      icon: "🚀",
      title: "Un camino eficiente hacia tus metas",
      description: "Matricularse en la universidad es una gran inversión. No desperdicies tu tiempo y dinero comenzando antes de estar listo. INTERLINK te prepara para las diferencias de idioma, académicas y culturales para que puedas comenzar con confianza."
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <AnimatedText 
            text="¡Empieza a perseguir tus metas con INTERLINK!" 
            textClassName="text-3xl md:text-4xl font-bold text-[#064088]"
            underlineClassName="text-[#dc5d33] w-64 md:w-96 mx-auto"
          />
          
          {/* Short Motivational Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 mt-6 max-w-3xl mx-auto"
          >
            INTERLINK te ayuda a lograr tus metas académicas y profesionales mediante clases de inglés personalizadas y preparación universitaria.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-2">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-[#064088]">{benefit.title}</h3>
              </div>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-10"
        >
{/*          <Button 
            variant="primary" 
            size="lg"
            className="bg-[#dc5d33] hover:bg-[#c04d28] text-white font-semibold px-8 py-3 text-lg rounded-lg shadow-md"
          >
            Be confident that you are prepared
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default SPANISHHowInterlinkHelpsSection;
