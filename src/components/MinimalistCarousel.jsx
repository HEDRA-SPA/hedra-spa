import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Lista de imágenes para el carrusel (puedes reemplazar estas URLs con tu Base64 si lo deseas)
const IMAGES = [
    'https://images.pexels.com/photos/6187638/pexels-photo-6187638.jpeg',
    'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    'https://images.pexels.com/photos/6663465/pexels-photo-6663465.jpeg',
    'https://images.pexels.com/photos/6629614/pexels-photo-6629614.jpeg',
];

const MinimalistCarousel = ({ heroContent }) => { 
    // Usamos el hook de traducción dentro del componente
    const { t } = useTranslation(); 
    const [activeIndex, setActiveIndex] = useState(0);

    // Componente de flecha izquierda SVG (ChevronLeft)
    const ChevronLeftIcon = ({ size = 24, color = 'currentColor' }) => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-chevron-left"
        >
            <path d="m15 18-6-6 6-6"/>
        </svg>
    );

    // Componente de flecha derecha SVG (ChevronRight)
    const ChevronRightIcon = ({ size = 24, color = 'currentColor' }) => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-chevron-right"
        >
            <path d="m9 18 6-6-6-6"/>
        </svg>
    );

    // Función para ir a la diapositiva anterior
    const prevSlide = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? IMAGES.length - 1 : prevIndex - 1
        );
    };

    // Función para ir a la diapositiva siguiente
    const nextSlide = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Efecto para la transición automática (cada 5 segundos)
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); 

        // Limpieza del intervalo
        return () => clearInterval(interval);
    }, [IMAGES.length]); // Dependencia ajustada para evitar warnings

    return (
        <div 
            className="position-relative overflow-hidden" 
            style={{ 
                height: '500px', // Altura fija
                fontFamily: 'Monserrat, sans-serif',
            }}
        >
            {/* Contenedor de las diapositivas */}
            <div 
                className="d-flex h-100"
                style={{
                    // Mueve el contenedor horizontalmente
                    transform: `translateX(-${activeIndex * 100}%)`,
                    transition: 'transform 0.8s ease-in-out',
                }}
            >
                {IMAGES.map((src, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            flex: '0 0 100%', // Cada diapositiva ocupa el 100%
                            backgroundImage: `url(${src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                        }}
                    >
                    </div>
                ))}
            </div>
            
            {/* OVERLAY DE TEXTO DE BIENVENIDA - CORREGIDO SEMANTICAMENTE */}
            <div
                className="position-absolute top-50 start-50 translate-middle text-center"
                style={{
                    zIndex: 9, 
                    color: 'white',
                    padding: '20px',
                    width: '90%', // Responsivo
                }}
            >
                {/* Título - Usamos h1 directamente, y usamos t() para la traducción */}
                <h1 
                    style={{
                        fontSize: '3.5rem', 
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        lineHeight: '1.2',
                    }}
                    className="d-none d-sm-block"
                >
                    {t('services.title')}
                </h1>
                {/* Subtítulo - Usamos p directamente, y usamos t() para la traducción */}
                <p 
                    style={{
                        fontSize: '1.5rem', 
                        fontWeight: '400',
                    }}
                    className="lead"
                >
                    {t('services.description')}
                </p>
            </div>

            {/* CONTROL: Flecha Izquierda (Anterior) */}
            <button 
                onClick={prevSlide} 
                className="btn position-absolute top-50 start-0 translate-middle-y"
                style={{ 
                    zIndex: 10,
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    border: 'none',
                    marginLeft: '20px'
                }}
            >
                <ChevronLeftIcon color="white" size={24} />
            </button>

            {/* CONTROL: Flecha Derecha (Siguiente) */}
            <button 
                onClick={nextSlide} 
                className="btn position-absolute top-50 end-0 translate-middle-y"
                style={{ 
                    zIndex: 10,
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    border: 'none',
                    marginRight: '20px'
                }}
            >
                <ChevronRightIcon color="white" size={24} />
            </button>

            {/* INDICADORES */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
                {IMAGES.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        style={{
                            width: activeIndex === index ? '20px' : '8px',
                            height: '8px',
                            borderRadius: activeIndex === index ? '4px' : '50%',
                            backgroundColor: activeIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default MinimalistCarousel;
