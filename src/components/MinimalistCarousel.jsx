import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import photo_carrousel_1 from '/photo_carrousel_1.jpg';
import photo_carrousel_2 from '/photo_carrousel_2.jpg';
import photo_carrousel_3 from '/photo_carrousel_3.jpg';
import photo_carrousel_4 from '/photo_therapeutic.jpg';

const IMAGES = [
    photo_carrousel_1,
    photo_carrousel_2,
    photo_carrousel_3,
    photo_carrousel_4,
];

const MinimalistCarousel = ({ heroContent }) => { 
    const { t } = useTranslation(); 
    const [activeIndex, setActiveIndex] = useState(0);

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

    const prevSlide = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? IMAGES.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); 

        return () => clearInterval(interval);
    }, [IMAGES.length]); 

    return (
        <div 
            className="position-relative overflow-hidden" 
            style={{ 
                height: '500px', 
                fontFamily: 'Monserrat, sans-serif',
            }}
        >
            <div 
                className="d-flex h-100"
                style={{
                    transform: `translateX(-${activeIndex * 100}%)`,
                    transition: 'transform 0.8s ease-in-out',
                }}
            >
                {IMAGES.map((src, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            flex: '0 0 100%', 
                            backgroundImage: `url(${src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                        }}
                    >
                    </div>
                ))}
            </div>
            
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
