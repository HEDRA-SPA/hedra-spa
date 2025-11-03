// src/components/AboutSection.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import MinimalisCarousel from './MinimalistCarousel';

const DENTAMETRICS_IMAGE_URL = 'https://lh3.googleusercontent.com/a/ACg8ocIjY6WiDqOuklF97RopiU3byiLL0njd5QHsB1f2WB4_G0rRheI=s360-c-no';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <>
    <section 
        id="nosotros" 
        className="py-5"
        // ⭐ CAMBIO CLAVE AQUÍ: Aplicando el fondo crema profundo
        style={{ backgroundColor: '#e9e7d8ff' }} 
    > 
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex justify-content-center mb-md-0">
            <div 
              style={{
                width: '350px', // Tamaño del círculo
                height: '350px',
                borderRadius: '50%', // Hace el círculo
                overflow: 'hidden', // Oculta partes de la imagen fuera del círculo
                position: 'relative', // Para posicionar los elementos flotantes
              }}
            >
              <img
                src={DENTAMETRICS_IMAGE_URL}
                className="img-fluid" // Hace la imagen responsiva dentro del círculo
                // Esto ayuda a que la imagen cubra completamente el contenedor
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                }} 
              />
            </div>
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
      </div>
    </section>

</>
  );
};

export default AboutSection;