import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector'; 

import logoImage from '../assets/spa-logo-bgtp.svg';
import logoImageCanvas from '/logo-icon.png'; 

const NavbarDefault = ({ logoAlt }) => { 
  const { t } = useTranslation();

  const navItems = [
    { key: 'about', path: '/#nosotros', icon: 'fa-solid fa-spa' },
    { key: 'services', path: '/#servicios', icon: 'fa-solid fa-hand-holding-heart' },
    { key: 'contact', path: '/#contacto', icon: 'fa-solid fa-envelope' },
  ];

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    const offcanvasEl = document.getElementById('offcanvasNavbarSolid');
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
  
  const darkButtonStyle = { color: 'black' };
  const offcanvasBgColor = '#D4DBC8';
  return (
    <>
      {/* 1. NAVBAR PRINCIPAL (VERSIÓN SÓLIDA, DELGADA, NO-FIJA) */}
      <nav 
        className="navbar navbar-expand-lg py-0 shadow w-100 z-3"
        style={{ backgroundColor: '#e9e7d8ff', borderBottom: '1px solid #eee' }} 
      >
        <div className="container">
          <a className="navbar-brand py-0" href="/">
            <img src={logoImage} alt={logoAlt || 'SPA'} height="100" /> 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarSolid"
            aria-controls="offcanvasNavbarSolid"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span> 
          </button>

          {/* MENÚ DE ESCRITORIO */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDefault">
            <ul className="navbar-nav align-items-center">
              {navItems.map((item) => (
                <li className="nav-item mx-2" key={item.key}>
                  <a className="nav-link text-uppercase text-dark fw-semibold" href={item.path}>
                    {t(`navbar.${item.key}`)}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-3">
                {/* ✨ CAMBIO CLAVE: Usamos variant="light" y pasamos buttonStyle para asegurar el color negro */}
                <LanguageSelector 
                  variant="light" 
                  buttonStyle={darkButtonStyle}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 2. OFFCANVAS (MÓVIL) */}
     <div 
        className="offcanvas offcanvas-start custom-offcanvas-bg" 
        tabIndex="-1" 
        id="offcanvasNavbarSolid"
        aria-labelledby="offcanvasNavbarSolidLabel"
        style={{ backgroundColor: offcanvasBgColor }} // Fondo personalizado
      >
        <div className="offcanvas-header">
      
          <img 
            src={logoImageCanvas} 
            alt={logoAlt || 'SPA'} 
            height="130" 
            className="mx-auto" 
          />
          <button 
            type="button" 
            className="btn-close text-reset position-absolute top-0 end-0 m-3" // Posicionamos el botón de cierre manualmente para dejar espacio al logo
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

export default NavbarDefault;