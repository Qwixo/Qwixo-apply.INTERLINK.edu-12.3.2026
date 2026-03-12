import React from 'react';
import { motion } from 'framer-motion';
import { Timeline, TimelineItem } from './ui/timeline';

const SPANISHCleanJourneyTimeline = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-4">
            Tu Cronograma de Viaje
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Desde la solicitud hasta la graduación, esto es lo que te espera cuando estudias con INTERLINK.
          </p>
        </motion.div>

        {/* Timeline Items */}
        <Timeline>
          <TimelineItem title="Solicitud y Aceptación" icon="📝">
            <p className="text-gray-700">
              Envía tu solicitud en línea, recibe la carta de aceptación y el formulario I-20, y programa tu prueba de ubicación.
            </p>
          </TimelineItem>

          <TimelineItem title="Proceso de Visa (para estudiantes presenciales)" icon="🛂">
            <p className="text-gray-700">
              te guiaremos con los documentos, entrevistas y la preparación en la embajada.
            </p>
          </TimelineItem>

          <TimelineItem title="Planea tu viaje (solo presencial)" icon="✈️">
            <p className="text-gray-700">
              reserva tu vuelo, prepara lo necesario y prepárate para una experiencia inolvidable.
            </p>
          </TimelineItem>

          <TimelineItem title="Llegada y Orientación" icon="🏫">
            <p className="text-gray-700">
              llega al campus, asiste a la orientación, conoce a tus profesores y acomódate.
            </p>
          </TimelineItem>

          <TimelineItem title="Estudia inglés con INTERLINK" icon="📚">
            <p className="text-gray-700">
              únete a un programa inmersivo y adquiere habilidades académicas y de comunicación.
            </p>
          </TimelineItem>

          <TimelineItem title="Transición Universitaria" icon="🎓">
            <p className="text-gray-700">
              completa tu programa de inglés y pasa a tu carrera sin exámenes de inglés.

            </p>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
};

export default SPANISHCleanJourneyTimeline;
