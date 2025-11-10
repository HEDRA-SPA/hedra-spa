// src/components/FeatureCard.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
// 💡 CORRECCIÓN: Separar las importaciones de React Icons según su paquete
import { FaHandsHelping, FaWater } from 'react-icons/fa'; 
import { MdOutlineFace } from 'react-icons/md'; // El ícono GiFaceMask suele estar en 'gi'

// Función para seleccionar el ícono basado en la clave de la característica
const getIconComponent = (key) => {
  switch (key) {
    case 'technology':
      // 'Rituales del Cuerpo': Sugiero FaHandsHelping o un ícono de cuerpo/bienestar
      return FaHandsHelping; 
    case 'locations':
      // 'El Arte de la Piel': GiFaceMask es perfecto para rituales faciales
      return MdOutlineFace;
    case 'medical':
      // 'Fluir en Calma' (Jacuzzi): FaWater es una excelente opción
      return FaWater;
    default:
      return null;
  }
};
const FeatureCard = ({ featureKey }) => {
  const { t } = useTranslation();
  const IconComponent = getIconComponent(featureKey);
  
  const iconColor = '#ffffff'; 

  return (
    // CAMBIO CLAVE: Eliminar la clase de columna (col-md-4) aquí.
    // Dejamos solo los estilos internos para el contenido de la tarjeta.
    <div className="mb-5 text-center"> 
      
      {/* Contenedor del Ícono (Círculo de color #2D621E) */}
      <div 
        className="mx-auto mb-4 d-flex justify-content-center align-items-center"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: '#2D621E',
        }}
      >
        {IconComponent && (
          <IconComponent 
            size={48} 
            color={iconColor}
          />
        )}
      </div>
      
      {/* Título y Texto */}
      <h3 className="mb-3">{t(`features.${featureKey}.title`)}</h3>
      <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
        {t(`features.${featureKey}.text`)}
      </p>
    </div>
  );
};

export default FeatureCard;