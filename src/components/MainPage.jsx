import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import '../App.css';
import MainNavbar from '../components/MainBar';
import FeatureCardGroup from '../components/FeatureCardGroup';
import AboutSection from '../components/AboutSection';
import ServidesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ContactForm from './ContactForm';
import WhatsAppButton from '../components/utils/WhatsAppButton'; 

const HERO_BACKGROUND_URL = 'https://images.pexels.com/photos/6187645/pexels-photo-6187645.jpeg';

function MainPage() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Auren SPA — Centro de bienestar y relajación</title>
        <meta name="description" content="Auren SPA — Masajes, terapias corporales y tratamientos faciales. Reserva ya y descubre bienestar integral." />
        <link rel="canonical" href="https://www.aurenspa.com/" />
        <meta property="og:title" content="Auren SPA — Centro de bienestar y relajación" />
        <meta property="og:description" content="Masajes, terapias corporales y tratamientos faciales. Reserva una sesión en Auren SPA." />
        <meta property="og:image" content={HERO_BACKGROUND_URL} />
      </Helmet>

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
        <WhatsAppButton />

        <ServidesSection />
        <ContactForm/>
        <Footer />
      </main>
    </div>
  );
}

export default MainPage;