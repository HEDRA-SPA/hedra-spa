// src/components/HeroImage.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { PopupButton } from 'react-calendly';

const Hero = ({ imageUrl }) => {
  const { t, i18n } = useTranslation();
  
  // Altura mínima para asegurar que el contenido se vea bien en la página
  const heroStyle = {
    backgroundImage: `url(${imageUrl})`,
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
  const calendlyUrl = i18n.language.startsWith('es')
    ? 'https://calendly.com/hedraspa/30min'      // Español
    : 'https://calendly.com/hedraspa-en/30min'; // Inglés
  return (
    <div style={heroStyle}>
      {/* Overlay oscuro para mejorar la legibilidad del texto blanco */}
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

      {/* Contenido centrado */}
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
    backgroundColor: "#F5F5F5" // Esto solo funciona en el botón de trigger, no dentro del iframe
  }}
  />

      </div>
    </div>
  );
};

export default Hero;