import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const SPANISHStudentJourneyComparisonSection = () => {
  const scrollToApplicationForm = () => {
    const applicationSection = document.getElementById('application-form-section');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-16"
        >
          ¿Cómo te prepara INTERLINK para la universidad?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Column A */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md"
          >
            {/* Image */}
            <div className="flex justify-center mb-6">
              <img
                src="https://i.imgur.com/uwwcFbj.png"
                alt="Carlos antes de INTERLINK"
                className="w-full h-48 object-cover rounded-lg max-w-xs"
              />
            </div>

            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <X className="text-red-600 w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-[#064088] leading-snug">
                Carlos usaba <span className="text-[#c24e2b] underline">apps</span> gratuitas
                <br />
                <span className="text-lg font-medium text-gray-700">
                  para practicar inglés y obtuvo la puntuación mínima para ser admitido en la universidad
                </span>
              </h3>
            </div>

            {/* Bullet Points */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Habilidades Académicas</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">dificultades con la redacción académica y los requisitos de investigación</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Participación en clase</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">demasiado nervioso para hablar o hacer preguntas cuando está confundido</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Comprensión de profesores y tareas</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">se pierde información importante en clases y en las instrucciones de las tareas</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Estrategias de aprendizaje</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">carece de hábitos de estudio efectivos y estudia durante largas horas sin resultados</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Tasa de graduación</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">en riesgo de desertar o de prolongar la carrera</p>
              </div>
            </div>

            <div className="mt-8 bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="font-bold text-red-700 text-center">
                Abrumado, sin preparación, reprobó materias y está en riesgo de abandonar
              </p>
            </div>
          </motion.div>

          {/* Column B */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md"
          >
            {/* Image */}
            <div className="flex justify-center mb-6">
              <img
                src="https://i.imgur.com/68eMW06.png"
                alt="Gabriela después de INTERLINK"
                className="w-full h-48 object-cover rounded-lg max-w-xs"
              />
            </div>

            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#064088] leading-snug">
                Gabriela asistió a <span className="text-green-700 underline">INTERLINK</span>
                <br />
                <span className="text-lg font-medium text-gray-700">
                  para aprender inglés y prepararse para la universidad
                </span>
              </h3>
            </div>

            {/* Bullet Points */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Habilidades Académicas</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">aprende redacción académica, investigación y habilidades de presentación</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Participación en clase</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">hace preguntas con seguridad y participa en debates</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Comprensión de profesores y tareas</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">entiende claramente las clases y los requisitos de las tareas</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Estrategias de aprendizaje</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">cuenta con hábitos de estudio efectivos y habilidades para administrar el tiempo</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Tasa de graduación</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">alta probabilidad de terminar su carrera a tiempo</p>
              </div>
            </div>

            <div className="mt-8 bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-bold text-green-700 text-center">
                Segura de sí misma, preparada para la universidad, sobresaliendo en clases y con altas probabilidades de graduarse
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
<motion.button
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md"
  data-open-optin
>
  Solicita Ahora y Comienza
</motion.button>
        </div>
      </div>
    </section>
  );
};

export default SPANISHStudentJourneyComparisonSection;
