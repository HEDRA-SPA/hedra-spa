// src/components/AboutSection.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
// ✨ Importamos motion
import { motion } from 'framer-motion'; 

const DENTAMETRICS_IMAGE_URL = 'https://lh3.googleusercontent.com/a/ACg8ocIjY6WiDqOuklF97RopiU3byiLL0njd5QHsB1f2WB4_G0rRheI=s360-c-no';

const imageVariant = {
  hidden: { opacity: 0, x: -100 }, // Empieza invisible y 100px a la izquierda
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }, // Termina visible en su posición
};

const textVariant = {
  hidden: { opacity: 0, x: 100 }, // Empieza invisible y 100px a la derecha
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      delay: 0.2 // Agregamos un ligero retraso para que el texto aparezca después de la imagen
    } 
  }, // Termina visible en su posición
};

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <>
    <section 
      id="nosotros" 
      className="py-5"
      style={{ backgroundColor: '#e9e7d8ff' }} 
    > 
      <div className="container">
        <div className="row align-items-center">
          
          {/* 2. ENVOLVER IMAGEN con motion.div */}
          <motion.div 
            className="col-md-6 d-flex justify-content-center mb-5 mb-md-0" // mb-5 para móviles
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Se activa cuando el 50% de la columna es visible
          >
            <div 
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src={DENTAMETRICS_IMAGE_URL}
                className="img-fluid"
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                }} 
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="col-md-6"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Se activa cuando el 50% de la columna es visible
          >
            <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>
              {t('about.title')}
            </h2>
            <p>
              {t('about.mainText')}
            </p>

            {/* Párrafo secundario */}
            <p>
              {t('about.secondaryText')}
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutSection;