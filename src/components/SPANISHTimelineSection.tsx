import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: '✅',
    title: 'Revisamos tu solicitud',
    description: 'No se necesita pago aún. Verificaremos tus datos y confirmaremos tu interés.',
  },
  {
    icon: '👋',
    title: 'Te contactará Ana',
    description: 'nuestra asesora de admisiones (¡como Ana!) te buscará para conocer tus metas.',
  },
  {
    icon: '🧭',
    title: 'Te ayudamos a elegir el mejor programa',
    description: 'recomendaremos la opción adecuada según tu nivel, objetivos y horarios.',
  },
  {
    icon: '✍️',
    title: 'Te indicamos los pasos siguientes',
    description: 'te ayudamos con la documentación, preguntas de visa y todo lo demás.',
  },
  {
    icon: '🎯',
    title: 'Empiezas cuando estés listo',
    description: 'te ayudaremos a inscribirte, conocer a tus profesores y a mejorar tu inglés.',
  },
];

const SPANISHWhatHappensAfterApply = () => {
  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-4">
            ¿Qué pasa después de que solicitas admisión?
          </h2>
          <p className="text-lg text-gray-700">
            No te estás comprometiendo a nada todavía; solo nos avisas que te interesa. Una vez que solicitas admisión, esto es lo que sucede a continuación:
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 flex items-start gap-4"
            >
              <div className="text-2xl">{step.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-[#064088]">{step.title}</h3>
                <p className="text-gray-700 mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-4">
            ¡Eso es todo! Estás a solo un paso. <p>¿Listo para comenzar? Haz clic aquí y empecemos.</p>
          </p>

<button
  data-open-optin
  className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md"
>
  Solicita Ahora
</button>
        </motion.div>
      </div>
    </section>
  );
};

export default SPANISHWhatHappensAfterApply;
