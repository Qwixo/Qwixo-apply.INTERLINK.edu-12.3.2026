import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Check, Laptop, Wifi, Award } from 'lucide-react';

const SPANISHStudyOptionsSection = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#064088] mb-4">
            Opciones de Estudio – Elige lo Mejor para Ti
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ya sea que prefieras la experiencia completa de un campus en EE. UU. o la flexibilidad del aprendizaje en línea, INTERLINK tiene un programa para ti.
          </p>
        </motion.div>
        
        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* Card 1: In-Person Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Program Header with Dark Blue Background */}
            <div className="bg-[#064088] p-6 flex items-center">
              <MapPin className="w-6 h-6 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Cursos presenciales</h3>
            </div>
            
            <div className="p-8">
              {/* Program Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Ubicación:</span>
                    <span className="ml-2 text-gray-700">En el campus de la University of North Carolina Greensboro<br />Greensboro, North Carolina, EE. UU.</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Duración:</span>
                    <span className="ml-2 text-gray-700">10 semanas por nivel (dos periodos de 5 semanas)</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Matrícula:</span>
                    <span className="ml-2 text-gray-700 font-bold">$1,650 por periodo</span>
                    <div className="text-sm text-gray-600 mt-1">Nota: estudiantes con visa F-1 deben estudiar a tiempo completo.</div>
                  </div>
                </div>
              </div>

{/* Who Is This Best For? */}
<div className="mb-8">
  <h4 className="text-lg font-semibold text-gray-800 mb-4">
    <Users className="inline-block w-5 h-5 mr-2 text-[#064088]" />
    ¿Para quién es ideal?
  </h4>
  <ul className="space-y-2 text-gray-700">
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">
        Personas de <span className="font-semibold">17 años o más</span> que pueden solicitar visa y viajar a EE. UU.
      </span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">
        Estudiantes que quieren <span className="font-semibold">sumergirse completamente</span> en la vida universitaria estadounidense
      </span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">
        Quienes planean ingresar a una <span className="font-semibold">universidad de EE. UU.</span>
      </span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">
        Estudiantes que aprenden mejor con <span className="font-semibold">interacciones presenciales</span>
      </span>
    </li>
  </ul>
</div>


              {/* Benefits Section */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Award className="inline-block w-5 h-5 mr-2 text-[#064088]" />
                  Beneficios:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Clases pequeñas e interactivas (8–12 estudiantes) para un aprendizaje personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Acceso completo a instalaciones universitarias (bibliotecas, deportes, clubes)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Inmersión cultural: vivir, estudiar e interactuar con estudiantes de EE. UU. y de todo el mundo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Admisión a universidades de EE. UU. sin TOEFL/IELTS al completar el programa</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Card 2: Online Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Program Header with Dark Orange Background */}
            <div className="bg-[#dc5d33] p-6 flex items-center">
              <Wifi className="w-6 h-6 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Cursos de inglés en línea</h3>
            </div>
            
            <div className="p-8">
              {/* Program Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Duración:</span>
                    <span className="ml-2 text-gray-700">10 semanas por nivel (dos periodos de 5 semanas)</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Matrícula tiempo completo:</span>
                    <span className="ml-2 text-gray-700 font-bold">$1,650 por periodo</span>
                    <div className="text-sm text-gray-600 mt-1">(2 clases por día)</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Matrícula medio tiempo:</span>
                    <span className="ml-2 text-gray-700 font-bold">$825 por periodo</span>
                    <div className="text-sm text-gray-600 mt-1">(1 clase por día)</div>
                  </div>
                </div>
              </div>
              
              {/* Who Is This Best For? */}
<div className="mb-8">
  <h4 className="text-lg font-semibold text-gray-800 mb-4">
    <Users className="inline-block w-5 h-5 mr-2 text-[#dc5d33]" />
    ¿Para quién es ideal?
  </h4>
  <ul className="space-y-2 text-gray-700">
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">
        Personas de <span className="font-semibold">15 años o más</span> que quieren mejorar su inglés desde cualquier lugar
      </span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">
        Estudiantes que necesitan un horario <span className="font-semibold">flexible</span> y prefieren estudiar desde casa
      </span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">
        Quienes quieren <span className="font-semibold">prepararse para estudiar en EE. UU.</span> antes de mudarse
      </span>
    </li>
    <li className="flex items-start">
      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="ml-2">
        Profesionales ocupados que quieren <span className="font-semibold">aprender sin tener que desplazarse</span>
      </span>
    </li>
  </ul>
</div>


              {/* Benefits Section */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Award className="inline-block w-5 h-5 mr-2 text-[#dc5d33]" />
                  Beneficios:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Lecciones en vivo e interactivas con instructores expertos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Mismo plan de estudios que el programa presencial</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Aprende desde cualquier parte del mundo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Comienza tu inglés en línea mientras solicitas la visa</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* TIP and Inclusive Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100"
        >
          <p className="text-lg font-semibold text-[#dc5d33] mb-2">
            CONSEJO: Comienza en línea mientras solicitas tu visa y ahorra tiempo y dinero.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Ya sea que estés en el extranjero o enfrentes demoras migratorias, puedes empezar tus estudios de inglés en línea y unirte presencialmente cuando estés listo.
          </p>
        </motion.div>

        {/* Apply Now Button */}
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

export default SPANISHStudyOptionsSection;
