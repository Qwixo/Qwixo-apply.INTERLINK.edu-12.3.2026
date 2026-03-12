import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const SPANISHIsRightForYouSection = () => {
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
          ¿INTERLINK es la opción adecuada para ti?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Perfect For You Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 md:p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-[#064088]">
                INTERLINK es perfecto para ti si…
              </h3>
            </div>
            
            <ul className="space-y-4">
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                Sueñas con estudiar en EE. UU. y necesitas un camino claro y guiado.
              </ListItem>
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                Quieres mejorar tu inglés rápidamente con profesores expertos y clases reducidas.
              </ListItem>
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                Buscas una comunidad de apoyo que te acompañe en cada paso del camino.
              </ListItem>
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                Quieres una ruta hacia la universidad en EE. UU. sin TOEFL.
              </ListItem>
              <ListItem icon={<CheckCircle className="w-5 h-5 text-green-600" />}>
                Prefieres orientación personalizada en lugar de cursos masivos con un único enfoque.
              </ListItem>
            </ul>
          </motion.div>
          
          {/* Might Not Be For You Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 md:p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <XCircle className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-[#064088]">
                INTERLINK podría no ser para ti si…
              </h3>
            </div>
            
            <ul className="space-y-4">
              <ListItem icon={<XCircle className="w-5 h-5 text-red-500" />}>
                Solo necesitas inglés básico e informal sin objetivos académicos.
              </ListItem>
              <ListItem icon={<XCircle className="w-5 h-5 text-red-500" />}>
                Buscas un curso totalmente autodidacta sin apoyo estructurado.
              </ListItem>
              <ListItem icon={<XCircle className="w-5 h-5 text-red-500" />}>
                No te interesa estudiar en EE. UU. en el futuro ni mejorar tus oportunidades profesionales.
              </ListItem>
            </ul>
          </motion.div>
        </div>
        
        {/* Apply Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#dc5d33] text-white font-bold py-4 px-8 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2 text-lg"
          >
            <span>Solicita ahora – Descubre cómo podemos ayudarte</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const ListItem = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => {
  return (
    <li className="flex items-start">
      <div className="mt-1 mr-3 flex-shrink-0">
        {icon}
      </div>
      <span className="text-gray-700">{children}</span>
    </li>
  );
};

export default SPANISHIsRightForYouSection;
