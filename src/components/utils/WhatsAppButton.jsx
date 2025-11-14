import React from 'react';
import { useTranslation } from 'react-i18next';
//  Este componente es un botón flotante de WhatsApp para preguntar por los servicios de spa
//  Es sensible al cambio de idioma

const WhatsAppButton = () => {
  const { t } = useTranslation();
  // Numero de telefono con la cuenta de WhatsApp Business
  const phoneNumber = "526646110685";
  
  const getWhatsAppLink = () => {
    const message = encodeURIComponent(t('whatsapp.message'));
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsapp.message')}
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "65px",
        height: "65px",
        backgroundColor: "#25D366", 
        color: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        textDecoration: "none",
        zIndex: 1000,
        cursor: 'pointer',
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
      }}
      title={t('whatsapp.message')} 
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;