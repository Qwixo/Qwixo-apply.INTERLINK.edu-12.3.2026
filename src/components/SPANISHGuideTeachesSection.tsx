import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Rocket, GraduationCap } from 'lucide-react';

const SPANISHGuideTeachesSection = () => {
  const benefits = [
    {
      icon: <Trophy className="w-10 h-10 text-[#064088]" />,
      heading: "¡Tú puedes lograrlo! - Podemos ayudarte con tu inglés.",
      description: "Cada año, cientos de estudiantes con un nivel de inglés intermedio y presupuestos promedio siguen este camino ¡Ahora te toca a ti!"
    },
    {
      icon: <Rocket className="w-10 h-10 text-[#064088]" />,
      heading: "Te ayudaremos en este proceso en tan solo 5 pasos.",
      description: "Planifica tu presupuesto, elige el programa adecuado y aprende nuestros mejores consejos para que tu entrevista de visa sea un éxito; con nuestra guía será más sencillo."
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#064088]" />,
      heading: "Una aventura que te cambiará la vida",
      description: "Estudia en EE.UU. para aumentar tus oportunidades profesionales, hacer amistades para toda la vida y desarrollar habilidades que puedas usar tanto en el aula como fuera de ella."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#064088] mb-12"
        >
          ¿Quieres estudiar en los Estados Unidos?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-start"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {benefit.heading}
              </h3>
              <p className="text-gray-700">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SPANISHGuideTeachesSection;
