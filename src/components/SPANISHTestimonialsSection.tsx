import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { Testimonials } from './ui/testimonials';


const SPANISHTestimonialsSection = ({ guideStyle = false }) => {
  const scrollToApplicationForm = () => {
    const applicationSection = document.getElementById('application-form-section');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      quote: "Tengo compañeros de diferentes países y no hablan español… para mí eso es muy útil porque necesito practicar todos los días. Ahora me estoy graduando. Estudiar en INTERLINK me impulsó a hablar todos los días — ¡y funcionó!",
      name: "Lina Rois",
      designation: "Colombia",
      src: "https://i.imgur.com/KXVOcwe.jpeg"
    },
    {
      quote: "Decidí salir de mi zona de confort e invertir en mi desarrollo personal. Creo que explorar una nueva cultura es la mejor manera de ampliar mis horizontes. Por eso, encontré en el programa INTERLINK la oportunidad perfecta para mi familia y para mí.",
      name: "Jimena",
      designation: "Ecuador",
      src: "https://i.imgur.com/J1w7fcm.jpeg"
    },
    {
      quote: "¡El debate fue mi actividad favorita! Me encantó aprender a construir argumentos y expresar mis ideas con claridad — me ayudó a crecer en confianza y comunicación. ¡Estoy orgullosa de cuánto he crecido!",
      name: "Estephania",
      designation: "Colombia",
      src: "https://i.imgur.com/oYY7Zxb.png"
    },
    {
      quote: "Gracias a INTERLINK, no solo entiendo el idioma inglés, sino también la cultura y la gente de EE. UU. He hecho amigos de muchos países y he vivido tantas experiencias nuevas — desde visitas históricas escolares hasta festivales internacionales.",
      name: "Mikey",
      designation: "Vietnam",
      src: "https://i.imgur.com/i4SnHq0.png"
    },
    {
      quote: "Mi inglés no era bueno antes de INTERLINK. Tenía que detenerme y pensar antes de hablar, y no sabía cómo hacer que los demás me entendieran. ¡Ahora me siento segura — puedo hablar, escribir ensayos, y la gente entiende lo que digo!",
      name: "Chau",
      designation: "Vietnam",
      src: "https://i.imgur.com/bQLjGzi.png"
    },
    {
      quote: "En mi país, las clases se centraban solo en los exámenes. INTERLINK se enfoca más en aplicar el inglés en el mundo real.",
      name: "Huizi",
      designation: "China",
      src: "https://i.imgur.com/UN85w6p.jpeg"
    },
    {
      quote: "Aprendí muchísimo y agradezco todo el esfuerzo de los profesores por ayudarnos en esta experiencia. Tengo muy buenos recuerdos y sigo llevando conmigo todas las lecciones de vida. Fue una oportunidad para aprender cosas diferentes y crecer como persona.",
      name: "Thais",
      designation: "Brazil",
      src: "https://i.imgur.com/9VTBhXQ.jpeg"
    },
    {
      quote: "En INTERLINK, las clases eran interactivas, alentándome a expresar mis opiniones y pensar de manera independiente. Al principio estaba nerviosa y dudaba en participar, pero los profesores, siempre solidarios, me dieron comentarios valiosos que aumentaron mi confianza. Esta experiencia no solo mejoró mis habilidades de inglés, sino también mi pensamiento crítico. Colaborar con compañeros de varios países me enseñó sobre diferencias culturales y comunicación efectiva, lo cual creo que será beneficioso en mis futuros estudios en UNCG.",
      name: "Yuna Minami",
      designation: "Japan",
      src: "https://i.imgur.com/ul46HnE.jpeg"
    },
    {
      quote: "Equilibrar mis estudios en INTERLINK con ser madre a tiempo completo y perseguir mi pasión por la fotografía fue un reto, pero increíblemente gratificante. El ambiente de apoyo y las clases flexibles me permitieron crecer tanto personal como académicamente.",
      name: "Telma Borges",
      designation: "Brazil",
      src: "https://i.imgur.com/Y5lGMLM.jpeg"
    }
  ];

  const shadcnTestimonials = [
    {
      image: 'https://i.imgur.com/KXVOcwe.jpeg',
      text: 'Tengo compañeros de diferentes países y no hablan español… para mí eso es muy útil porque necesito practicar todos los días. Ahora me estoy graduando. Estudiar en INTERLINK me impulsó a hablar todos los días — ¡y funcionó!',
      name: 'Lina Rois',
      username: 'Colombia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/J1w7fcm.jpeg',
      text: 'Decidí salir de mi zona de confort e invertir en mi desarrollo personal. Creo que explorar una nueva cultura es la mejor manera de ampliar mis horizontes. Por eso, encontré en el programa INTERLINK la oportunidad perfecta para mi familia y para mí.',
      name: 'Jimena',
      username: 'Ecuador',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/oYY7Zxb.png',
      text: '¡El debate fue mi actividad favorita! Me encantó aprender a construir argumentos y expresar mis ideas con claridad — me ayudó a crecer en confianza y comunicación. ¡Estoy orgullosa de cuánto he crecido!',
      name: 'Estephania',
      username: 'Colombia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/i4SnHq0.png',
      text: 'Gracias a INTERLINK, no solo entiendo el idioma inglés, sino también la cultura y la gente de EE. UU. He hecho amigos de muchos países y he vivido tantas experiencias nuevas — desde visitas históricas escolares hasta festivales internacionales.',
      name: 'Mikey',
      username: 'Vietnam',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/bQLjGzi.png',
      text: 'Mi inglés no era bueno antes de INTERLINK. Tenía que detenerme y pensar antes de hablar, y no sabía cómo hacer que los demás me entendieran. ¡Ahora me siento segura — puedo hablar, escribir ensayos, y la gente entiende lo que digo!',
      name: 'Chau',
      username: 'Vietnam',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/UN85w6p.jpeg',
      text: 'En mi país, las clases se centraban solo en los exámenes. INTERLINK se enfoca más en aplicar el inglés en el mundo real.',
      name: 'Huizi',
      username: 'China',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/9VTBhXQ.jpeg',
      text: 'Aprendí muchísimo y agradezco todo el esfuerzo de los profesores por ayudarnos en esta experiencia. Tengo muy buenos recuerdos y sigo llevando conmigo todas las lecciones de vida. Fue una oportunidad para aprender cosas diferentes y crecer como persona.',
      name: 'Thais',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/ul46HnE.jpeg',
      text: 'En INTERLINK, las clases eran interactivas, alentándome a expresar mis opiniones y pensar de manera independiente. Al principio estaba nerviosa y dudaba en participar, pero los profesores, siempre solidarios, me dieron comentarios valiosos que aumentaron mi confianza. Esta experiencia no solo mejoró mis habilidades de inglés, sino también mi pensamiento crítico. Colaborar con compañeros de varios países me enseñó sobre diferencias culturales y comunicación efectiva, lo cual creo que será beneficioso en mis futuros estudios en UNCG.',
      name: 'Yuna Minami',
      username: 'Japan',
      social: 'https://twitter.com'
    },
    {
      image: 'https://i.imgur.com/Y5lGMLM.jpeg',
      text: 'Equilibrar mis estudios en INTERLINK con ser madre a tiempo completo y perseguir mi pasión por la fotografía fue un reto, pero increíblemente gratificante. El ambiente de apoyo y las clases flexibles me permitieron crecer tanto personal como académicamente.',
      name: 'Telma Borges',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Pasé medio año en INTERLINK y mi inglés mejoró muchísimo, lo cual me hace sentir que estoy lista para ingresar a mi programa de MBA en el futuro.',
      name: 'Tingting Wang',
      username: 'China',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Estimulan tu aprendizaje ofreciéndote un entorno amigable en el que puedes desarrollar tus propias ideas e interactuar con personas de diferentes culturas.',
      name: 'Berta',
      username: 'Brazil',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Cuando llegué aquí no podía escribir ni un párrafo en inglés, pero ahora puedo redactar un ensayo de tres o cuatro páginas y eso es fantástico.',
      name: 'Bader',
      username: 'United Arab Emirates',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Este programa es como una puerta para estudiantes internacionales. Me ayudó a alcanzar mis objetivos cuando estaba en la universidad... Hice buenos amigos, el ambiente social era motivador y había actividades adicionales.',
      name: 'Luis Sandoval',
      username: 'El Salvador',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Los profesores en INTERLINK son realmente increíbles, profesionales, entusiastas y dedicados. Se centran en tus necesidades individuales y te ayudan a mejorar tu expresión oral, comprensión auditiva, lectura y escritura.',
      name: 'Concha Muñoz',
      username: 'Spain',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Los profesores de INTERLINK se preocuparon por mi éxito y se aseguraron de que estuviera preparado para la vida universitaria.',
      name: 'Theophilus Twum-Barima',
      username: 'Ghana',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Cuando me uní a INTERLINK, mejoré mis habilidades de escritura y expresión oral. Ahora estoy terminando mi máster en ingeniería industrial con un GPA muy alto. Recientemente fui aceptado en un programa de doctorado en la misma universidad. Estos logros no hubieran sido posibles para mí sin el alto nivel de inglés que INTERLINK me ayudó a alcanzar.',
      name: 'Ayman',
      username: 'Saudi Arabia',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'Gracias a INTERLINK, puedo comunicarme con comodidad tanto con estadounidenses como con personas de otros países.',
      name: 'Mariana',
      username: 'Ecuador',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-',
      text: 'El programa intensivo en INTERLINK me dio la oportunidad de estar mejor preparado que muchos estudiantes internacionales en la universidad, porque en INTERLINK los profesores me ayudaron a estar listo para el trabajo intensivo que podría encontrar en la universidad.',
      name: 'Wesmi Alwesmi',
      username: 'Saudi Arabia',
      social: 'https://twitter.com'
    }
  ];

  // This function determines which component to render based on the current page
  const isGuidePage = guideStyle || window.location.pathname.includes('guide');


  if (isGuidePage) {
    return (
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-6">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Conoce a estudiantes internacionales que transformaron sus habilidades de inglés y lograron sus metas académicas con INTERLINK.
          </p>

          {/* Video Testimonials Grid - UPDATED: Real YouTube videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Video 1 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video w-full">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/knJgo_10Q4I"
                  title="Student Testimonial - Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://i.imgur.com/XlhKLM6.png" 
                    alt="Student 1" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#064088]">David Gil-Martinez</h3>
                    <p className="text-sm text-gray-600">Venezuela</p>
                  </div>
                </div>
                <p className="text-gray-700">“Desde el comienzo me sentí como en casa. El enfoque de enseñanza en INTERLINK me permite aprender de mis errores y avanzar hacia mi meta profesional.”</p>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video w-full">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/MBqWwl6C7Us"
                  title="Student Testimonial - Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://i.imgur.com/bQLjGzi.png" 
                    alt="Student 2" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#064088]">Chau</h3>
                    <p className="text-sm text-gray-600">Vietnam</p>
                  </div>
                </div>
                <p className="text-gray-700">“Después de tomar el curso en INTERLINK me siento más segura y puedo comunicarme con los demás, y ellos me entienden.”</p>
              </div>
            </div>
          </div>

          {/* More Students Subsection - Keeping all 3 written testimonials */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[#064088] mb-10">
              Más estudiantes
            </h3>
            <Testimonials 
              testimonials={shadcnTestimonials} 
              title=""
              description="Lee testimonios de estudiantes que han mejorado sus habilidades de idioma con INTERLINK"
            />
          </div>


        </div>
      </section>
    );
} else {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-12">
          Lo que dicen nuestros estudiantes
        </h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}

};

export default SPANISHTestimonialsSection;
