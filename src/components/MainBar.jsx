// src/components/MainNavbar.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/spa-logo.png';
import LanguageSelector from './LanguageSelector';
import { PopupButton } from 'react-calendly';

const MainNavbar = ({ logoSrc, logoAlt }) => {
  const { t, i18n } = useTranslation();

  // Elementos de navegación principales
  const navItems = [
    { key: 'about', path: '/#nosotros' },
    { key: 'services', path: '/#servicios' },
    { key: 'contact', path: '/#contacto' },
  ];

  // 🔹 Elegir link de Calendly según idioma
  const calendlyUrl = i18n.language.startsWith('es')
    ? 'https://calendly.com/hedraspa/30min'      // Español
    : 'https://calendly.com/hedraspa-en/30min'; // Inglés

  return (
<nav 
  className="navbar navbar-expand-lg navbar-light py-1 shadow-sm" 
  style={{ backgroundColor: '#f7f6ef' }} // <-- ¡ESTE ES EL CAMBIO!
>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logoImage} alt={logoAlt || 'SPA'} height="70" /> 
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {navItems.map((item) => (
              <li className="nav-item mx-2" key={item.key}>
                <a
                  className={`nav-link text-uppercase ${
                    item.key === 'home'
                      ? 'btn btn-info text-white px-3'
                      : 'text-dark'
                  }`}
                  href={item.path}
                  style={{ fontWeight: item.key === 'home' ? 'normal' : '500' }}
                >
                  {t(`navbar.${item.key}`)}
                </a>
              </li>
            ))}

            {/* 🔹 Botón de Reserva dinámico */}
            <li className="nav-item mx-2">
              <PopupButton
                url={calendlyUrl}
                rootElement={document.getElementById("root")}
                text={t("navbar.reserve") || "Reserva"}
                className="btn px-2 fw-bold"
              />
            </li>

            <li className="nav-item ms-3">
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;