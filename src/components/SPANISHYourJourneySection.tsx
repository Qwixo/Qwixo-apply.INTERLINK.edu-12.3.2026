import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './ui/animated-text';

const SPANISHYourJourneySection = () => {
  const steps = [
    {
      number: 1,
      title: "Decide que quieres empezar",
      description: "Comprometerte con una meta es la parte más difícil de cualquier cosa. Una vez que decidas que esto es lo que quieres, todo será más sencillo.",
      imageAlt: "Estudiantes felices juntos"
    },
    {
      number: 2,
      title: "Mejora tu inglés y confianza",
      description: "Adquiere habilidades reales, no solo puntajes—para que estés listo para el éxito universitario.",
      imageAlt: "Estudiantes en clase, presentando y participando"
    },
    {
      number: 3,
      title: "Vive la experiencia en EE. UU.",
      description: "Vive en el campus, haz amigos y disfruta de la vida estudiantil.",
      imageAlt: "Estudiantes en el campus, en dormitorios, socializando"
    },
    {
      number: 4,
      title: "¡Te espera un futuro mejor!",
      description: "Graduarte de Interlink, entrar a la universidad sin TOEFL y ¡comenzar tu carrera!",
      imageAlt: "Estudiante con toga y birrete, sosteniendo libros"
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <AnimatedText 
            text="¡Tu vida soñada en EE. UU. comienza aquí!"
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
            Estudiar en EE. UU. no se trata solo de aprender inglés—es vivir nuevas experiencias, 
            amistades y oportunidades. Imagínate caminando por un campus universitario, 
            mejorando tu inglés y preparándote para tu futura carrera.
          </motion.p>
        </div>
        
        {/* Journey Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Step Number - Changed color to #dc5d33 */}
              <div className="w-12 h-12 rounded-full bg-[#dc5d33] text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">{step.imageAlt}</span>
              </div>
              
              {/* Step Title - Changed color to #dc5d33 */}
              <h3 className="text-xl font-bold text-[#dc5d33] mb-2">{step.title}</h3>
              
              {/* Step Description */}
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SPANISHYourJourneySection;
