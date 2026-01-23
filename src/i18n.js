import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

// Función para normalizar idiomas a su forma base
const normalizeLanguage = (lng) => {
  if (!lng) return 'en';
  const baseLang = lng.split('-')[0].split('_')[0].toLowerCase();
  return ['es', 'en'].includes(baseLang) ? baseLang : 'en';
};

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
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

// Normalizar el idioma detectado y almacenado
const detectedLang = normalizeLanguage(i18n.language);
if (detectedLang !== i18n.language) {
  i18n.changeLanguage(detectedLang);
}

export default i18n;