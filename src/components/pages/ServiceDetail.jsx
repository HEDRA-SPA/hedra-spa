import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../ServicesSection.css';
import './ServiceDetail.css';
import MainNavbar from '../MainBar';
import Footer from '../Footer';
import { PopupButton } from 'react-calendly';

// Solo Body Treatments y Facial Treatments
const serviceKeyMap = {
  1: 'therapeutic',
  3: 'facial'
};

// Imágenes asociadas
const serviceImageMap = {
  therapeutic: 'https://cdn.pixabay.com/photo/2014/03/11/22/56/new-year-285587_1280.jpg',
  facial: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
};

  const calendlyUrl = 'https://calendly.com/hedraspa/30min'

function ServiceDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const serviceKey = serviceKeyMap[id];

  if (!serviceKey) {
    return (
      <div className="service-detail-page">
        <div className="service-detail container">
          <h2>{t('services.notFound')}</h2>
          <Link to="/" className="back-btn">{t('common.backToHome')}</Link>
        </div>
      </div>
    );
  }

  const service = {
    key: serviceKey,
    title: t(`services.items.${serviceKey}.title`),
    description: t(`services.items.${serviceKey}.description`),
    imageUrl: serviceImageMap[serviceKey],
    subServices: t(`services.items.${serviceKey}.subServices`, { returnObjects: true })
  };

return (
    <div className="service-detail-page">
      <MainNavbar/>

      <div className="service-detail container">
        {/* ... Encabezado y Descripción principal ... */}
        <div className="detail-header">
          <img src={service.imageUrl} alt={service.title} className="detail-image" />
          <div className="detail-content">
            <h1>{service.title}</h1>
            <p className="main-description">{service.description}</p>
            <Link to="/" className="back-btn">← {t('services.backToServices')}</Link> 
          </div>
        </div>

        <h2 className="subservices-heading">{t('services.availableTreatments')}</h2>

        {Array.isArray(service.subServices) && service.subServices.length > 0 ? (
          <div> {/* Contenedor para el grid de servicios y el botón */}
            <div className="subservices-grid">
              {service.subServices.map((subService, index) => (
                <div key={index} className="subservice-card">
                  <h3>{subService.title}</h3>
                  <p className="subservice-duration">{subService.duration}</p>
                  <p className="subservice-price">{subService.price}</p>
                  <p className="subservice-description">{subService.description}</p>
                </div>
              ))}
            </div>
            
            {/* 💡 BOTÓN DE CALENDLY CENTRADO AQUÍ */}
            <div className="text-center mt-5 mb-5"> 
              <PopupButton
                url={calendlyUrl}
                rootElement={document.getElementById("root")}
                text={t("navbar.reserve_a_now") || "Reserva"}
                // Asegúrate de que esta clase sea única si tienes otros botones 'book-btn'
                className="fw-bold px-5 py-3 custom-calendly-btn" 
                styles={{
                    borderRadius: "15px",
                    backgroundColor: "#2D621E", // 💡 Sugerencia de color de tu FeatureCard
                    color: "#ffffff",
                    // Estilos para quitar el borde disparejo
                    outline: "none", 
                    boxShadow: "none"
                }}
              />
            </div>
          </div>
        ) : (
          <p className="no-subservices">{t('services.noTreatmentsAvailable')}</p>
        )}
      </div> 

      <Footer />
    </div>
  );
}

export default ServiceDetail;
