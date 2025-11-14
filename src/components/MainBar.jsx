import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './utils/LanguageSelector';

import logoImage from '../assets/spa-logo-bgbk.svg';
import logoImageCanvas from '/logo-icon.png'; 


const MainNavbar = ({ logoAlt }) => { 
  const { t } = useTranslation();

  const navItems = [
    { key: 'about', path: '/#nosotros', icon: 'fa-solid fa-spa' },
    { key: 'services', path: '/#servicios', icon: 'fa-solid fa-hand-holding-heart' },
    { key: 'contact', path: '/#contacto', icon: 'fa-solid fa-envelope' },
  ];

  const handleLinkClick = (e, path) => {
    e.preventDefault();

    const offcanvasEl = document.getElementById('offcanvasNavbar');
    const bodyEl = document.body;
    
    if (offcanvasEl) {
      offcanvasEl.classList.remove('show');
      const backdrop = document.querySelector('.offcanvas-backdrop');
      if (backdrop) backdrop.remove();
    }

    bodyEl.classList.remove('modal-open', 'offcanvas-open');
    bodyEl.style.overflow = '';
    bodyEl.style.paddingRight = '';

    setTimeout(() => {
      window.location.href = path;
    }, 50);
  };
  
  const offcanvasBgColor = '#D4DBC8'; 
  
  const darkButtonStyle = { color: 'black' }; 

  return (
    <>
      {/* NAVBAR PRINCIPAL (Transparente) */}
      <nav className="navbar navbar-expand-lg bg-transparent py-1  position-absolute top-0 w-100 z-3 navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logoImage} alt={logoAlt || 'SPA'} height="120" /> 
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" 
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENÚ EN ESCRITORIO */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              {navItems.map((item) => (
                <li className="nav-item mx-2" key={item.key}>
                  <a className="nav-link text-uppercase text-white" href={item.path}>
                    {t(`navbar.${item.key}`)}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-3">
                <LanguageSelector /> 
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div 
        className="offcanvas offcanvas-start w-100" 
        tabIndex="-1" 
        id="offcanvasNavbar" 
        aria-labelledby="offcanvasNavbarLabel"
        style={{ 
          backgroundColor: offcanvasBgColor,
          maxWidth: '100vw'
        }}
      >
        <div className="offcanvas-header">
          {/* Logo centrado */}
          <img 
            src={logoImageCanvas} 
            alt={logoAlt || 'SPA'} 
            height="130" 
            className="mx-auto" 
          />
          <button 
            type="button" 
            className="btn-close btn-close-dark text-reset position-absolute top-0 end-0 m-3"
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item.key}>
                <a 
                  className="nav-link text-uppercase text-dark offcanvas-link-icon"
                  href={item.path} 
                  onClick={(e) => handleLinkClick(e, item.path)}
                >
                  <i className={`${item.icon} me-3`}></i> 
                  {t(`navbar.${item.key}`)}
                </a>
              </li>
            ))}
            <li className="nav-item mt-5 border-top pt-3">
              <h6 className="text-uppercase text-dark mb-2">{t('canvas.select')}</h6>
              <LanguageSelector 
                variant="light"
                buttonStyle={darkButtonStyle} 
              /> 
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;