import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHandsHelping, FaWater } from 'react-icons/fa'; 
import { MdOutlineFace } from 'react-icons/md'; 

const getIconComponent = (key) => {
  switch (key) {
    case 'technology':
      return FaHandsHelping; 
    case 'locations':
      return MdOutlineFace;
    case 'medical':
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
    <div className="mb-5 text-center"> 
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
      
      <h3 className="mb-3">{t(`features.${featureKey}.title`)}</h3>
      <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
        {t(`features.${featureKey}.text`)}
      </p>
    </div>
  );
};

export default FeatureCard;