// src/components/FeatureCardGroup.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion'; 

const FeatureCardGroup = () => {
  const { t } = useTranslation();

  const features = ['technology', 'locations', 'medical'];

  // Definimos las variantes para la animación de cada tarjeta
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    },
  };

  // Definimos el contenedor para orquestar los hijos (las tarjetas)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      // StaggerChildren aplica un retraso secuencial a cada hijo.
      transition: {
        staggerChildren: 0.1 
      }
    }
  };

  return (
    <section className="py-5"> 
      <div className="container">
        <motion.div 
          className="row justify-content-center"
          variants={containerVariants} 
          initial="hidden" // El estado inicial sigue siendo oculto
          
          // ✨ CAMBIO CLAVE 1: Usamos whileInView="visible" en lugar de animate="visible"
          // Esto dispara la animación 'visible' cuando el componente entra al viewport.
          whileInView="visible" 
          
          // ✨ CAMBIO CLAVE 2: Definimos el viewport
          // once: true asegura que la animación solo se ejecute una vez
          // amount: 0.5 significa que se dispara cuando el 50% del componente está visible
          viewport={{ once: true, amount: 0.5 }} 
        >
          {features.map((featureKey) => (
            <motion.div
              key={featureKey}
              className="col-12 col-md-4" 
              variants={cardVariants} 
              // NO es necesario poner whileInView/initial/animate aquí,
              // ya que el componente padre (container) lo está orquestando.
            >
              <FeatureCard 
                featureKey={featureKey}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCardGroup;