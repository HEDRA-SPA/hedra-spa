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
import WhatsAppButton from '../components/utils/WhatsAppButton'; 

const HERO_BACKGROUND_URL = 'https://images.pexels.com/photos/6187645/pexels-photo-6187645.jpeg';

function MainPage() {
  const { t, i18n } = useTranslation();

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
        <WhatsAppButton />

        <ServidesSection />
        <ContactForm/>
        <Footer />
      </main>
    </div>
  );
}

export default MainPage;