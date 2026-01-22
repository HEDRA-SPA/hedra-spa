import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PopupButton } from 'react-calendly';
import video from '/video_hero.mp4';

const VIDEO_URL = video; 

const Hero = ({ imageUrl }) => {
  const { t, i18n } = useTranslation();
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const heroStyle = {
    minHeight: '100vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    overflow: 'hidden',
    backgroundColor: '#000', // Fondo negro mientras carga
  };

  const calendlyUrl = 'https://calendly.com/hedraspa/30min'
  
  return (
    <div style={heroStyle}>
      
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        style={{
          position: 'absolute', 
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: 0, 
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div 
        style={{
          position: 'absolute', 
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1, 
          pointerEvents: 'none',
        }}
      ></div>

      <div 
        style={{ 
          position: 'relative',
          zIndex: 2, 
          width: '100%',
          padding: '0 15px',
          maxWidth: '1140px',
          margin: '0 auto',
          border: 'none'
        }}
      >
        <h1 className="display-3 fw-bold mb-3 text-shadow-lg">{t('hero.title')}</h1>
        <p className="lead fs-4 text-shadow-lg">{t('hero.subtitle')}</p>
        <PopupButton
          url={calendlyUrl}
          rootElement={document.getElementById("root")}
          text={t("navbar.reserve") || "Reserva"}
          className="fw-bold px-4 py-2"
          styles={{
              borderRadius: "15px",
              color: "#000",
              backgroundColor: "#eee5d6ff",
              outline: "none",
              boxShadow: "none",
              border: "none"
          }}
        />
      </div>
    </div>
  );
};

export default Hero;