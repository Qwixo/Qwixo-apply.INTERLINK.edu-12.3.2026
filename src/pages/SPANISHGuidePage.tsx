import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SPANISHFooter from '../components/SPANISHFooter';
import { FaHandshake, FaChevronDown } from 'react-icons/fa';
import SPANISHHowInterlinkHelpsSection from '../components/SPANISHHowInterlinkHelpsSection';
import SPANISHSpeakingEnglishPaysOffSection from '../components/SPANISHSpeakingEnglishPaysOffSection';
import SPANISHComparisonTableSection from '../components/SPANISHComparisonTableSection';
import SPANISHStudyOptionsSection from '../components/SPANISHStudyOptionsSection';
import SPANISHTimelineSection from '../components/SPANISHTimelineSection';
import SPANISHTestimonialsSection from '../components/SPANISHTestimonialsSection';
import SPANISHOnTheFenceSection from '../components/SPANISHOnTheFenceSection';
import SPANISHIsRightForYouSection from '../components/SPANISHIsRightForYouSection';
import SPANISHFAQSection from '../components/SPANISHFAQSection';
import SPANISHLastCTASection from '../components/SPANISHLastCTASection';
import SPANISHStudentJourneyComparisonSection from '../components/SPANISHStudentJourneyComparisonSection';
import ScrollToTop from '../components/ScrollToTop';
import SPANISHCleanJourneyTimeline from "../components/SPANISHCleanJourneyTimeline";
import SPANISHTransitionToInterlinkSection from '../components/SPANISHTransitionToInterlinkSection';
import SPANISHStudentLifeSection from '../components/SPANISHStudentLifeSection';
import SPANISHUpsellPopup from '../components/SPANISHUpsellPopup'; // Adjust path if needed
import SPANISHUpsellPopup2 from '../components/SPANISHUpsellPopup2'; // Adjust path if needed
import LP3_Popup_Trigger from '../components/LP3_Popup_Trigger'



const SPANISHGuidePage = () => {
  const [isGuideExpanded, setIsGuideExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const toggleGuideExpansion = () => setIsGuideExpanded(!isGuideExpanded);

  const APPLY = 'https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58'


  useEffect(() => {
    const t1 = setTimeout(() => setShowPopup(true), 45 * 1000);
    const t2 = setTimeout(() => setShowPopup2(true), 5 * 60 * 1000);
    const t3 = setTimeout(() => setShowPopup2(true), 20 * 60 * 1000);
    const t4 = setTimeout(() => setShowPopup2(true), 60 * 60 * 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      {/* Section 1: Thank You Confirmation */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Column - Text Content */}
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-[#064088] mb-4"
              >
                ¡Tu guía está lista!
              </motion.h1>
              
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl font-normal text-[#3a6ea5] mb-6"
              >
                Solo desplázate hacia abajo y haz clic en «Seguir leyendo».
              </motion.h3>
              
              <motion.h4
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-600"
              >
                También te enviamos un enlace a tu correo electrónico. Revisa las carpetas de «Spam» y «Promociones». Debería llegar en 5&nbsp;minutos.
              </motion.h4>
            </div>
            
            {/* Right Column - Image */}
            <div className="md:w-1/2 flex justify-center">
              <motion.img
                src="https://i.imgur.com/D3CCUzf.jpeg"
                alt="Estudiante estudiando en EE. UU."
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-[250px] md:h-[300px] rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 2: The Full Guide (Expandable) */}
      <section className="w-full py-12 bg-[#f9fafb]">
        <div className="max-w-5xl mx-auto px-4">
          {/* Guide Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-[#064088]"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">5 pasos fáciles para estudiar en EE.&nbsp;UU.</h1>
            <p className="text-lg md:text-xl text-[#dc5d33] font-semibold">¡Es más fácil de lo que crees!</p>
            <p className="mt-4 max-w-2xl mx-auto text-base opacity-90">
              Miles de estudiantes de todo el mundo han seguido con éxito estos 5 pasos. Así podrás hacerlo tú también, paso a paso.
            </p>
          </motion.div>

          {/* Step 1 Full Preview */}
          <div className="mt-12 mb-6 relative bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="md:w-1/2 relative z-10">
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">
                  📘 Paso 1: Encuentra el programa de inglés adecuado
                </h2>
                <ul className="list-disc ml-6 space-y-1 text-base text-gray-700">
                  <li>Sin requisito de TOEFL – Comienza sin exámenes estandarizados</li>
                  <li>Clases pequeñas – Más tiempo de habla, más apoyo</li>
                  <li>Preparación universitaria – Inglés académico y habilidades de estudio</li>
                  <li>Apoyo a estudiantes internacionales – Orientación y ayuda cultural</li>
                </ul>
                <p className="mt-2 italic text-sm text-gray-700">
                  Consejo: Las ciudades más pequeñas suelen ser más seguras, amigables y económicas.
                </p>
              </div>
              
              {/* Step 1 Image */}
              <div className="mt-4 md:mt-0 md:w-1/2">
                <img 
                  src="https://i.imgur.com/3ELUZCJ.jpeg" 
                  alt="Aula de programa de inglés" 
                  className="w-full h-[200px] rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
            
            {!isGuideExpanded && (
              <div className="mt-6 border-t pt-4">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-[#064088]">
                  💵 Paso 2: Planifica tu presupuesto
                </h2>
                <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                  <li>Matrícula: 1 500–2 500 USD por periodo de 5 semanas</li>
                  <li>Alojamiento y comida: 600–1 200 USD/mes</li>
                </ul>
                <p className="mt-1 italic text-sm text-gray-600">Más detalles en el Paso 2…</p>
              </div>
            )}

            {!isGuideExpanded && (
              <div className="absolute bottom-16 left-0 w-full h-32 bg-gradient-to-b from-transparent via-white/90 to-white pointer-events-none z-20 rounded-b-xl" />
            )}

            {!isGuideExpanded && (
              <div className="flex justify-center mt-4 relative z-30">
                <button 
                  onClick={toggleGuideExpansion}
                  className="flex items-center gap-1 text-[#064088] hover:text-[#053067] font-medium text-sm transition-colors px-3 py-1 rounded-md"
                >
                  <FaChevronDown className="text-xs mr-1" />
                  <span>Seguir leyendo</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Expandable Content */}
          <AnimatePresence>
            {isGuideExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid gap-12"
              >
{/* Step 2 */}
<div className="bg-white/80 p-6 rounded-xl shadow-md">
  <div className="flex flex-col md:flex-row md:gap-6">
    <div className="md:w-1/2">
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">💵 Paso 2: Planifica tu presupuesto</h2>
      <ul className="list-disc ml-6 space-y-1 text-base text-gray-700">
        <li>Matrícula: 1 500–2 500 USD por periodo de 5 semanas</li>
        <li>Cuotas de solicitud: 200–500 USD</li>
        <li>Alojamiento y comida: 1 000–2 000 USD/mes</li>
        <li>Cuotas del campus: 500–800 USD</li>
        <li>Tasa I-901 (visa): 350 USD</li>
      </ul>
      <p className="mt-2 text-sm text-gray-700">
        Además de la matrícula, la visa y el viaje, debes considerar los gastos de vida y la duración de tus estudios para conocer el costo total. Los estudiantes principiantes pueden necesitar 12–14 meses de inglés; los intermedios y avanzados terminarán antes.
      </p>
    </div>
    <div className="mt-4 md:mt-0 md:w-1/2">
      <img 
        src="https://i.imgur.com/DsP0w0k.jpeg" 
        alt="Planificación de presupuesto" 
        className="w-full h-[200px] rounded-lg shadow-md object-cover"
      />
    </div>
  </div>
</div>

{/* Step 3 */}
<div className="bg-white/80 p-6 rounded-xl shadow-md">
  <div className="flex flex-col md:flex-row md:gap-6">
    <div className="md:w-1/2">
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">📝 Paso 3: Solicita plaza en tu escuela</h2>
      <p className="mb-2 text-base text-gray-700">La mayoría de las solicitudes son sencillas y en línea. Normalmente necesitarás:</p>
      <ul className="list-disc ml-6 space-y-1 text-base text-gray-700">
        <li>Formulario de solicitud</li>
        <li>Pasaporte</li>
        <li>Historial académico</li>
        <li>Prueba de fondos (estado de cuenta bancaria o carta de patrocinador)</li>
        <li>Declaración jurada de apoyo financiero (si tienes patrocinador)</li>
      </ul>
    </div>
    <div className="mt-4 md:mt-0 md:w-1/2">
      <img 
        src="https://i.imgur.com/43p5ZH1.jpeg" 
        alt="Solicitud escolar" 
        className="w-full h-[200px] rounded-lg shadow-md object-cover"
      />
    </div>
  </div>
</div>

{/* Step 4 */}
<div className="bg-white/80 p-6 rounded-xl shadow-md">
  <div className="flex flex-col md:flex-row md:gap-6">
    <div className="md:w-1/2">
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">📄 Paso 4: Consigue tu visa</h2>
      <p className="mb-2 text-base text-gray-700">Te guiaremos en los pasos:</p>
      <ol className="list-decimal ml-6 space-y-1 text-base text-gray-700">
        <li>Recibe tu formulario I-20 tras solicitar</li>
        <li>Completa en línea el DS-160</li>
        <li>Paga la tasa SEVIS (I-901)</li>
        <li>Imprime tu recibo SEVIS</li>
        <li>Firma y fecha tu I-20</li>
        <li>Asiste a la entrevista con todos los documentos</li>
        <li>Obtén la aprobación y entra a EE.&nbsp;UU.</li>
      </ol>
    </div>
    <div className="mt-4 md:mt-0 md:w-1/2">
      <img 
        src="https://i.imgur.com/N5VdBQO.jpeg" 
        alt="Solicitud de visa" 
        className="w-full h-[200px] rounded-lg shadow-md object-cover"
      />
    </div>
  </div>
</div>

{/* Step 5 */}
<div className="bg-white/80 p-6 rounded-xl shadow-md">
  <div className="flex flex-col md:flex-row md:gap-6">
    <div className="md:w-1/2">
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">✈️ Paso 5: Prepárate para tu aventura en EE.&nbsp;UU.</h2>
      <ul className="list-disc ml-6 space-y-1 text-base text-gray-700">
        <li>Compra tu vuelo</li>
        <li>Gestiona el alojamiento (¡tu escuela puede ayudar!)</li>
        <li>Asiste a la orientación</li>
        <li>Empieza las clases y haz nuevos amigos</li>
      </ul>
    </div>
    <div className="mt-4 md:mt-0 md:w-1/2">
      <img 
        src="https://i.imgur.com/5gVSrk2.jpeg" 
        alt="Aventura en EE. UU." 
        className="w-full h-[200px] rounded-lg shadow-md object-cover"
      />
    </div>
  </div>
</div>

{/* Timeline Section */}
<div className="bg-[#f9fafb] rounded-xl p-6 shadow-inner">
  <h2 className="text-xl font-bold mb-4 text-[#064088]">🕒 Cronograma sugerido</h2>
  <ul className="list-disc ml-6 text-sm space-y-1 text-gray-700">
    <li><strong>12 meses antes:</strong> Investiga escuelas y empieza a presupuestar</li>
    <li><strong>6 meses antes:</strong> Solicita plaza y reúne documentos</li>
    <li><strong>3 meses antes:</strong> Prepara tus finanzas y solicita la visa</li>
    <li><strong>1 mes antes:</strong> Reserva vuelos y confirma alojamiento</li>
  </ul>
</div>

{/* Quick Checklist Summary */}
<div className="bg-[#064088] text-white p-6 rounded-xl">
  <h2 className="text-xl font-semibold mb-2">✅ Lista rápida</h2>
  <ul className="list-disc ml-6 space-y-1 text-sm">
    <li>Elige el programa de inglés adecuado</li>
    <li>Crea un presupuesto realista</li>
    <li>Prepara y envía tu solicitud escolar</li>
    <li>Reúne documentos y solicita la visa</li>
    <li>Reserva viaje y alojamiento antes de que inicie tu programa</li>
  </ul>
</div>

{/* Student Testimonials */}
<div className="text-center">
  <h2 className="text-2xl font-bold mb-6 text-[#064088]">📣 Lo que dicen nuestros estudiantes</h2>
  <div className="grid md:grid-cols-2 gap-6">
    <blockquote className="bg-white shadow p-4 rounded-lg text-sm italic text-gray-700">
      "INTERLINK pushed me to speak every day — and it worked."<br/>
      <span className="font-semibold text-[#dc5d33]">— Lina, Colombia</span>
    </blockquote>
    <blockquote className="bg-white shadow p-4 rounded-lg text-sm italic text-gray-700">
      "Thanks to INTERLINK, I understand not just the English language, but also the culture and people in the U.S."<br/>
      <span className="font-semibold text-[#dc5d33]">— Mikey, Vietnam</span>
    </blockquote>
  </div>
</div>

{/* Want Help with These Steps? */}
<div className="py-8">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-xl shadow-md p-8 md:p-12"
  >
    <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <div className="flex items-center mb-4">
          <FaHandshake className="text-[#064088] text-4xl mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088]">
            ¿Todavía no sabes por dónde empezar?
          </h2>
        </div>
        <p className="text-gray-700 text-lg max-w-xl">
          ¡No te preocupes! No tienes que averiguarlo solo.
        </p>
        <div className="h-2" />
        <p className="text-gray-700 text-lg mb-8 max-w-xl">
          Te ayudaremos a entender tus opciones y dar el primer paso — a tu ritmo, cuando estés listo.
        </p>
        <div className="flex justify-center md:justify-start">
          <button
            onClick={() => {
              const url = 'https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58';
              const openInNewTab = () => {
                window.open(url, '_blank');
              };
              if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                  send_to: 'AW-1043003990/KpaYCO2GlLQaENb0q_ED',
                  event_callback: openInNewTab,
                });
                setTimeout(openInNewTab, 1000);
              } else {
                console.warn('gtag not defined');
                openInNewTab();
              }
            }}
            className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md"
          >
            Obtén ayuda personalizada
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="https://i.imgur.com/et7cXT3.png" 
          alt="Equipo de admisiones" 
          className="w-full h-[300px] rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  </motion.div>
</div>

{/* Show Less Button */}
<div className="flex justify-center mt-4 mb-6">
  <button 
    onClick={toggleGuideExpansion}
    className="flex items-center gap-1 text-[#064088] hover:text-[#053067] font-medium text-sm transition-colors"
  >
    <FaChevronDown className="text-xs rotate-180 mr-1" />
    <span>Mostrar menos</span>
  </button>
</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      {/* TRANSITION SECTION */}
      <SPANISHTransitionToInterlinkSection />

      <SPANISHHowInterlinkHelpsSection />
      <SPANISHStudentJourneyComparisonSection />
      <SPANISHComparisonTableSection />
      <SPANISHStudyOptionsSection />
      <SPANISHCleanJourneyTimeline />
      <SPANISHTimelineSection />
      <SPANISHTestimonialsSection />
      <SPANISHStudentLifeSection />
      <SPANISHOnTheFenceSection />
      {/* <IsRightForYouSection /> */}
      <SPANISHFAQSection />
      <SPANISHLastCTASection />
      <SPANISHFooter />

      {showPopup && <SPANISHUpsellPopup onClose={() => setShowPopup(false)} />}
      {showPopup2 && <SPANISHUpsellPopup2 onClose={() => setShowPopup2(false)} />}


<LP3_Popup_Trigger
  locale="vn"
  guideUrl="/vn/guide"
  redirectUrl={APPLY}
  tag="lp2-popup-vn"
/>



    </div>
  );
};

export default SPANISHGuidePage;
