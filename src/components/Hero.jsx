/*

import React from 'react';
import { useTranslation } from 'react-i18next';
import { PopupButton } from 'react-calendly';

const Hero = ({ imageUrl }) => {
  const { t, i18n } = useTranslation();
  
  const heroStyle = {
    backgroundImage: `url(https://images.pexels.com/photos/6187645/pexels-photo-6187645.jpeg)`,
    backgroundSize: 'cover', // Asegura que la imagen cubra todo el contenedor
    backgroundPosition: 'center', // Centra la imagen
    minHeight: '100vh', // Altura mínima del 60% de la ventana (ajusta a tu gusto)
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: 'white', // Texto blanco por defecto
    textAlign: 'center',
  };
  const calendlyUrl = 'https://calendly.com/hedraspa/30min'
  return (
    <div style={heroStyle}>
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)' // Fondo negro con 40% de opacidad
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 10 }}>
        <h1 className="display-3 fw-bold mb-3 text-shadow-lg">{t('hero.title')}</h1>
        <p className="lead fs-4 text-shadow-lg">{t('hero.subtitle')}</p>
  <PopupButton
    url={calendlyUrl}
    rootElement={document.getElementById("root")}
    text={t("navbar.reserve") || "Reserva"}
    className="fw-bold px-4 py-2"
    styles={{
        borderRadius: "15px",
        backgroundColor: "#F5F5F5",
        // 👇 Añade estas líneas
        outline: "none", // Esto elimina el borde de enfoque
        boxShadow: "none" // Opcional: Para asegurar que no haya sombras raras
    }}
/>

      </div>
    </div>
  );
};

export default Hero;
*/
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PopupButton } from 'react-calendly';

const VIDEO_URL = 'https://www.pexels.com/es-es/download/video/32828415/'; 

const Hero = ({ imageUrl }) => {
  const { t, i18n } = useTranslation();
  
  const heroStyle = {
    minHeight: '100vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    overflow: 'hidden', 
  };

  const calendlyUrl = 'https://calendly.com/hedraspa/30min'
  
  return (
    <div style={heroStyle}>
      
      <video
        autoPlay // Reproducción automática
        loop    // Bucle infinito
        muted   // Muy importante: debe estar silenciado para autoejecutarse en navegadores
        playsInline // Recomendado para iOS
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -2, // Colócalo detrás del overlay y el contenido
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover', // Asegura que cubra todo el Hero sin distorsionarse
        }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>

      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: -1, // Debe estar por encima del video (-2)
        }}
      ></div>

      {/* 3. Contenido centrado (Se mantiene igual) */}
      <div className="container position-relative" style={{ zIndex: 10 }}>
        <h1 className="display-3 fw-bold mb-3 text-shadow-lg">{t('hero.title')}</h1>
        <p className="lead fs-4 text-shadow-lg">{t('hero.subtitle')}</p>
        <PopupButton
          url={calendlyUrl}
          rootElement={document.getElementById("root")}
          text={t("navbar.reserve") || "Reserva"}
          className="fw-bold px-4 py-2"
          styles={{
              borderRadius: "15px",
              backgroundColor: "#F5F5F5",
              outline: "none",
              boxShadow: "none"
          }}
        />
      </div>
    </div>
  );
};

export default Hero;