import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ServicesSection.css';
import MinimalistCarousel from './MinimalistCarousel';

const servicesData = [
  {
    id: 1, 
    key: 'therapeutic', // Body Treatments
    imageUrl: 'https://cdn.pixabay.com/photo/2014/03/11/22/56/new-year-285587_1280.jpg',
  },
  {
    id: 3,
    key: 'facial', // Facial Treatments
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="servicios" className="spa-services-section">
      {/* Carrusel */}
      <div className="mb-5"> 
        <MinimalistCarousel/>
      </div>

      {/* Contenedor de tarjetas */}
      <div className="container">
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
                <Link to={`/servicio/${service.id}`} className="view-more-btn">
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
