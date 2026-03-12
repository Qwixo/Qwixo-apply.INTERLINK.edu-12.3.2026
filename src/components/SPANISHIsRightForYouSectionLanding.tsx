import React from 'react';
import { motion } from 'framer-motion';
import { Map, FileText, DollarSign, Rocket, HelpCircle } from 'lucide-react';

const SPANISHIsRightForYouSectionLanding = () => {
  const cards = [
    {
      icon: <Map className="w-10 h-10 text-[#064088] mb-4" />,
      title: "Sueñas con EE. UU., pero necesitas pasos claros y sencillos para comenzar.",
      description: "Tienes el sueño, pero necesitas pasos claros para hacerlo realidad."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-[#064088] mb-4" />,
      title: "Quieres planificar tu presupuesto sin conjeturas.",
      description: "Te proporcionaremos un cronograma y gastos que muchas personas pasan por alto."
    },
    {
      icon: <FileText className="w-10 h-10 text-[#064088] mb-4" />,
      title: "No estás seguro sobre el proceso de visa o los requisitos de la escuela.",
      description: "No te estreses por dominar el inglés antes de postularte. Te mostraremos cómo mejorar tu inglés mientras estudias en EE. UU."
    },
    {
      icon: <HelpCircle className="w-10 h-10 text-[#064088] mb-4" />,
      title: "¿Te preocupa tu inglés?",
      description: "No te preocupes por tus habilidades lingüísticas. Te mostraremos cómo tener éxito."
    },
    {
      icon: <Rocket className="w-10 h-10 text-[#064088] mb-4" />,
      title: "Quieres una experiencia que cambie tu vida y abra puertas a carreras globales.",
      description: "Esta podría ser la mejor decisión de tu vida. ¡Hagámosla realidad!"
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
          ¿Por qué necesitas esta guía?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.slice(0, 4).map((card, index) => (
            <CardItem key={index} card={card} index={index} />
          ))}
        </div>
        
        {/* The 5th card spans full width */}
        <div className="mt-6 relative">
          <CardItem card={cards[4]} index={4} fullWidth highlightText />
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  card: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  index: number;
  fullWidth?: boolean;
  highlightText?: boolean;
}

const CardItem = ({ card, index, fullWidth = false, highlightText = false }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${
        fullWidth ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''
      } ${highlightText ? 'border-2 border-[#064088]' : ''}`}
    >
      <div className="flex flex-col">
        {card.icon}
        <h3 className="text-xl font-bold text-[#064088] mb-2">{card.title}</h3>
        {highlightText ? (
          <p className="text-lg font-medium text-[#dc5d33]">
            {card.description}
          </p>
        ) : (
          <p className="text-gray-700">{card.description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default SPANISHIsRightForYouSectionLanding;
