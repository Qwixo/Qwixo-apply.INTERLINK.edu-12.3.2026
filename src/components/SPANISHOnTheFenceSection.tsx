import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SPANISHMessageFromAnna = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#064088] mb-2">
              🤫 Pssst… Si aún no estás seguro, lee esto
            </h2>
            <h3 className="text-xl text-[#3a6ea5] font-medium">
              Un Mensaje Personal de Ana, tu Directora de Admisiones
            </h3>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <img
              src="https://i0.wp.com/interlink.edu/wp-content/uploads/2017/02/kg021717-valdivia_ana-4.jpg?resize=600%2C600&ssl=1"
              alt="Anna Valdivia"
              className="w-[150px] h-[150px] rounded-full object-cover border-4 border-[#064088]/20 flex-shrink-0 mx-auto md:mx-0"
            />

            <div className="bg-gray-50 p-6 rounded-xl shadow-md w-full">
              <p className="text-lg text-gray-700 italic font-medium leading-relaxed">
                Sé que tomar esta decisión puede parecer abrumador. A lo largo d...uro o de si realmente podrían tener éxito en los Estados Unidos.
                <br /><br />
                Algunos no creían que estudiar en EE. UU. fuera una posibilidad ...ece, el progreso llega y los sueños comienzan a sentirse reales.
                <br /><br />
                Para eso estamos en INTERLINK. Te acompañamos en cada paso del c...o tienes que resolver todo esto solo — te guiaremos paso a paso.
                <br /><br />
                Si estás leyendo esto, significa que ya estás considerando dar un gran paso hacia tu futuro. Me encantaría ayudarte a lograrlo.
                <br /><br />
                Puedes escribirme con toda confianza a admissions@interlink.edu ...é más que feliz de ayudarte. ¡Hablo inglés y español también! :)
              </p>

              <p className="text-right text-gray-700 italic font-medium mt-6">
                — Ana Valdivia, Directora de Admisiones en INTERLINK
              </p>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center mt-4">
            {/* 🔗 CTA from Anna’s Message — opens application form in new tab with tracking */}
<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="bg-[#dc5d33] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
  data-open-optin
>
  <span>Solicita Ahora y Conversemos</span>
  <ArrowRight size={16} />
</motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SPANISHMessageFromAnna;
