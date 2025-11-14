import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles//ServicesSection.css';
import '../styles/ServiceDetail.css';
import Footer from '../Footer';
import { PopupButton } from 'react-calendly';
import WhatsAppButton from '../utils/WhatsAppButton';
import NavbarDefault from '../NavbarDefault';
import photo_facial from '/photo_facial.jpeg';
import photo_therapeutic from '/photo_therapeutic.jpg';

const serviceKeyMap = {
  1: 'therapeutic',
  3: 'facial'
};

// Imágenes asociadas
const serviceImageMap = {
  therapeutic: photo_therapeutic,
  facial: photo_facial
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
     <NavbarDefault />

      <div className="service-detail container">
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
          <div> 
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
            
            <div className="text-center mt-5 mb-5"> 
              <PopupButton
                url={calendlyUrl}
                rootElement={document.getElementById("root")}
                text={t("navbar.reserve_a_now") || "Reserva"}
                className="fw-bold px-5 py-3 custom-calendly-btn" 
                styles={{
                    borderRadius: "15px",
                    backgroundColor: "#2D621E", 
                    color: "#ffffff",
                    outline: "none", 
                    boxShadow: "none"
                }}
              />
            </div>
<WhatsAppButton/>
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
