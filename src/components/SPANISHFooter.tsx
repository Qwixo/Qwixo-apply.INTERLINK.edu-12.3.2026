import React from 'react';
import { motion } from 'framer-motion';

const SPANISHFooter = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-center mb-">
            {/*<h3 className="text-lg font-bold text-[#064088]">INTERLINK International Institutes</h3>*/}
          </div>

          <div className="text-gray-700 text-sm text-center mb-4">
            <p className="font-semibold mb-2">Contacto:</p>
            <p className="mb-1">
              Correo electrónico: <a href="mailto:admissions@interlink.edu" className="text-[#064088] hover:underline">admissions@interlink.edu</a>
            </p>
            <p className="mb-3">WhatsApp: +1 (720) 391-2030</p>
          </div>

          {/* Clickable Logo */}
          <a 
            href="https://interlink.edu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mb-0"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img 
                src="https://i.imgur.com/P0IOLMW.png" 
                alt="Logotipo de Interlink" 
                className="h-14 md:h-16"
              />
            </motion.div>
          </a>

          {/*         <div className="mt-4 text-xs text-gray-500 text-center">
            <p>© {new Date().getFullYear()} INTERLINK International Institutes. All rights reserved.</p>
          </div>*/}
        </div>
      </div>
    </footer>
  );
};

export default SPANISHFooter;
