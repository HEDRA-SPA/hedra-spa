import React from 'react';
import { useTranslation } from 'react-i18next';
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion'; 

const FeatureCardGroup = () => {
  const { t } = useTranslation();

  const features = ['technology', 'locations', 'medical'];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.5 }} 
        >
          {features.map((featureKey) => (
            <motion.div
              key={featureKey}
              className="col-12 col-md-4" 
              variants={cardVariants} 
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