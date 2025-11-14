import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; 
import image from '../assets/hedra-logo.svg'

const IMAGE_URL = image;

// Para la animacion de entrada del texto
const textVariant = {
  hidden: { opacity: 0, x: 100 }, 
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      delay: 0.2 
    } 
  }, 
};

// Este compoenente es el "nosotros" en la pagina principal
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
          
          <div 
            className="col-md-6 d-flex justify-content-center mb-5 mb-md-0" 
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
                src={IMAGE_URL}
                className="img-fluid"
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                }} 
              />
            </div>
          </div>
          
          <motion.div 
            className="col-md-6"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>
              {t('about.title')}
            </h2>
            <p>
              {t('about.mainText')}
            </p>

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