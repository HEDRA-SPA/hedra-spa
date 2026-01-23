import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      caches: ['localStorage', 'sessionStorage'],
    }
  });

// Normalizar el idioma detectado para usar solo el código base (e.g., 'es-ES' → 'es')
i18n.on('languageChanged', (lng) => {
  const baseLang = lng.split('-')[0];
  if (baseLang !== lng && (baseLang === 'es' || baseLang === 'en')) {
    i18n.changeLanguage(baseLang);
  }
});

export default i18n;