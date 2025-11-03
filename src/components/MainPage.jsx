import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';
import MainNavbar from '../components/MainBar';
import FeatureCardGroup from '../components/FeatureCardGroup';
import AboutSection from '../components/AboutSection';
import ServidesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ContactForm from './ContactForm';

const HERO_BACKGROUND_URL = 'https://images.pexels.com/photos/6187645/pexels-photo-6187645.jpeg';

function MainPage() {
  const { t, i18n } = useTranslation();

  // Función para generar el enlace de WhatsApp con el mensaje traducido
  const getWhatsAppLink = () => {
    const phoneNumber = "526643723351";
    const message = encodeURIComponent(t('whatsapp.message'));
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div>
      <header>
        <MainNavbar 
          logoSrc="/spa-logo.png" 
          logoStyle={{ width: '150px', height: 'auto'}} 
        />
        <Hero 
          imageUrl={HERO_BACKGROUND_URL} 
          title="SPA"
          subtitle="Centro de bienestar y relajación"
        />
      </header>

      <main>
        <FeatureCardGroup />
        <AboutSection />
        
        {/* Botón de WhatsApp con mensaje traducido */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
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
          title={t('whatsapp.message')} // Tooltip con el mensaje
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>

        <ServidesSection />
        <ContactForm/>
        <Footer />
      </main>
    </div>
  );
}

export default MainPage;