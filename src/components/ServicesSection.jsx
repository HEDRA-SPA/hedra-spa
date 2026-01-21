import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/ServicesSection.css';
import MinimalistCarousel from './MinimalistCarousel';
import photo_therapeutic from '/photo_therapeutic.jpg';
import photo_facial_2 from '/photo_facial_2.jpg';


const languageSlugMap = {
  therapeutic: {
    es: 'corporal', 
    en: 'body',
  },
  facial: {
    es: 'facial',
    en: 'facial',
  },
};

const routeSegmentMap = {
    es: 'servicio',
    en: 'service',
};

const servicesData = [
  {
    id: 1, 
    key: 'therapeutic', 
    imageUrl: photo_therapeutic,
  },
  {
    id: 3,
    key: 'facial', 
    slug: 'facial',
    imageUrl: photo_facial_2,
  },
];
const ServicesSection = () => {
  // CORRECCIÓN: Desestructuramos { t } e { i18n } correctamente
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Obtenemos el segmento de ruta traducido
  const routeSegment = routeSegmentMap[currentLang] || 'servicio';


  return (
    <section  className="spa-services-section">
      {/* Carrusel */}
      <div className="mb-5"> 
        <MinimalistCarousel/>
      </div>

      <div id="servicios" className="container">
        <div className="services-grid two-columns">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="image-wrapper">
                <img
                  src={service.imageUrl}
                  alt={t(`services.items.${service.key}.title`)}
                  className="card-image"
                />
              </div>

              <div className="card-footer">
                <h3 className="card-title">{t(`services.items.${service.key}.title`)}</h3>
                <Link 
                  // Generamos la URL: /:lang/:segmento_traducido/:slug_traducido
                  to={`/${currentLang}/${routeSegment}/${languageSlugMap[service.key][currentLang]}`} 
                  className="view-more-btn"
                > 
                  {t('services.viewMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ServicesSection;