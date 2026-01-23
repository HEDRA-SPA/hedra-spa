import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

/**
 * Hook personalizado que garantiza siempre un idioma normalizado ('es' o 'en')
 * Resuelve inconsistencias entre navegadores y dispositivos
 */
export const useNormalizedLanguage = () => {
  const { i18n, t } = useTranslation();
  
  const normalizeLanguage = (lng) => {
    if (!lng) return 'en';
    const baseLang = lng.split('-')[0].split('_')[0].toLowerCase();
    return ['es', 'en'].includes(baseLang) ? baseLang : 'en';
  };

  const normalizedLang = useMemo(() => {
    return normalizeLanguage(i18n.language);
  }, [i18n.language]);

  // Si el idioma actual no es normalizado, cámbialo
  useMemo(() => {
    if (normalizedLang !== i18n.language) {
      i18n.changeLanguage(normalizedLang);
    }
  }, [normalizedLang, i18n]);

  return {
    t,
    i18n,
    normalizedLang,
    currentLang: normalizedLang, // alias para compatibilidad
  };
};
