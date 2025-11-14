import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer 
            className="text-white py-5" 
            style={{ backgroundColor: '#1C3B14' }} 
        >
            <div className="container">
                <div className="row">
                    
                    {/* Columna 1: Nombre del Spa y Descripción */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h3 className="mb-3" style={{ color: '#f7f6ef', fontWeight: '300', fontSize: '1.8rem' }}>
                            HEDRA SPA
                        </h3>
                        <p style={{ color: '#f7f6ef', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            {t('footer.description')}
                        </p>
                        {/* Íconos de redes sociales */}
                        <div className="d-flex mt-4">
                            <a href="#" className="me-3" aria-label="Facebook" style={{ color: '#f7f6ef' }}>
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="me-3" aria-label="Instagram" style={{ color: '#f7f6ef' }}>
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                    
                    {/* Columna 2: Navegación Rápida */}
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase mb-4" style={{ color: '#f7f6ef' }}>
                            {t('footer.navigation')}
                        </h5>
                        <ul className="list-unstyled">
    <li className="mb-2">
        {/* Cambia la ruta a un objeto { pathname: '/', hash: '#nosotros' } */}
        <Link 
            to={{ pathname: '/', hash: '#nosotros' }} 
            className="text-decoration-none" 
            style={{ color: '#f7f6ef' }}
        >
            {t('footer.links.about')}
        </Link>
    </li>
    <li className="mb-2">
        <Link 
            to={{ pathname: '/', hash: '#servicios' }} 
            className="text-decoration-none" 
            style={{ color: '#f7f6ef' }}
        >
            {t('footer.links.services')}
        </Link>
    </li>
    <li className="mb-2">
        <Link 
            to={{ pathname: '/', hash: '#contacto' }} 
            className="text-decoration-none" 
            style={{ color: '#f7f6ef' }}
        >
            {t('footer.links.contact')}
        </Link>
    </li>
</ul>
                    </div>
                    
                    {/* Columna 3: Servicios */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase mb-4" style={{ color: '#f7f6ef' }}>
                            {t('footer.services')}
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="/servicio/1" className="text-decoration-none" style={{ color: '#f7f6ef' }}>
                                    {t('services.items.therapeutic.title')}
                                </a>
                            </li>
                          <li className="mb-2">
                                <a href="/servicio/3" className="text-decoration-none" style={{ color: '#f7f6ef' }}>
                                    {t('services.items.facial.title')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Contacto */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-uppercase mb-4" style={{ color: '#f7f6ef' }}>
                            {t('footer.contact')}
                        </h5>
                        <ul className="list-unstyled" style={{ color: '#f7f6ef', fontSize: '0.9rem' }}>
                            <li className="mb-2">{t('footer.address')}</li>
                            <li className="mb-2">{t('footer.phone')}</li>
                            <li className="mb-2">{t('footer.email')}</li>
                        </ul>
                    </div>
                    
                </div>
                
                {/* Barra de copyright */}
                <div className="text-center pt-4 mt-4 border-top" style={{ borderColor: '#f7f6ef !important' }}>
                    <p className="mb-0" style={{ color: '#f7f6ef', fontSize: '0.8rem', opacity: '0.8' }}>
                        {t('footer.copyright', { year: new Date().getFullYear() })}
                    </p>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;