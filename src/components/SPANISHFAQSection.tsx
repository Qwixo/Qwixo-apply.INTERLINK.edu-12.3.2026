import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-[#064088]">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#064088] transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-4 text-gray-700"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const SPANISHFAQSection = () => {
  const [showContactInfo, setShowContactInfo] = useState(false); // ✅ Correct placement

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-4">
            ¿Tienes preguntas? ¡Tenemos respuestas!
          </h2>
          <p className="text-lg text-gray-700">
            Aquí están las preguntas más comunes que hacen los estudiantes antes de postularse a INTERLINK. Haz clic para expandir cada pregunta y ver los detalles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-10"
        >
          <FAQItem
            question="¿Cuánto cuesta?"
            answer={
              <p>
                La matrícula y las tarifas de INTERLINK son de $1,650 por trimestre de estudio a tiempo completo y $825 por trimestre de estudio a tiempo parcial.
              </p>
            }
          />

          <FAQItem
            question="¿Cuál es la duración del programa?"
            answer={
              <p>
                Cada nivel del plan de estudios de 6 niveles de INTERLINK consta de dos módulos de 5 semanas (10 semanas en total). Los estudiantes normalmente completan el programa en 2 a 15 meses, dependiendo de su nivel inicial.
              </p>
            }
          />

          <FAQItem
            question="¿Cuál es el horario de clases?"
            answer={
              <div>
                <p className="mb-2">De lunes a viernes, cada clase dura 2 horas.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tiempo completo: 2 cursos, 4 horas por día</li>
                  <li>Tiempo parcial: 1 curso, 2 horas por día</li>
                </ul>
              </div>
            }
          />

          <FAQItem
            question="¿Necesito una visa de estudiante?"
            answer={
              <div>
                <p className="mb-2">
                  <strong>Para estudiar en EE. UU.:</strong> Sí, los estudiantes a tiempo completo necesitarán una visa de estudiante F-1. INTERLINK proporciona todos los documentos necesarios para el proceso de solicitud de visa.
                </p>
                <p>
                  <strong>Para estudiar en línea:</strong> No se requiere visa.
                </p>
              </div>
            }
          />

          <FAQItem
            question="¿Ayudas con la vivienda?"
            answer={
              <div>
                <p className="mb-2">
                  <strong>¡Sí!</strong> El alojamiento en el campus (dormitorios) está disponible pero debe confirmarse al menos 15 semanas antes del inicio del programa. Se aplica una tarifa de $100 por asistencia de vivienda.
                </p>
                <p>
                  <strong>Nota:</strong> INTERLINK no brinda asistencia de alojamiento fuera del campus (apartamentos).
                </p>
              </div>
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowContactInfo(true)}
            className="bg-[#064088] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#053067] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            <span>¿Aún tienes preguntas? ¡Pregúntale a Ana!</span>
          </motion.button>

          {showContactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="mt-6 bg-white border border-gray-200 rounded-lg shadow-md p-6 text-left max-w-md w-full"
            >
              <h4 className="text-xl font-semibold text-[#064088] mb-2">📬 Contacta a Ana</h4>
              <p className="text-gray-700 mb-1">
                <strong>Correo electrónico:</strong>{' '}
                <a href="mailto:admissions@interlink.edu" className="text-blue-600 underline">
                  admissions@interlink.edu
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                <strong>WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/17203912030?text=Hi%2C+I%27m+interested+in+learning+English"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +1 (720) 391-2030
                </a>
              </p>
              <button
                onClick={() => setShowContactInfo(false)}
                className="text-sm text-gray-500 underline hover:text-gray-700"
              >
                Cerrar
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SPANISHFAQSection;
