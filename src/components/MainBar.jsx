// src/components/MainNavbar.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/spa-logo-bgbk.svg';
import LanguageSelector from './LanguageSelector';

const MainNavbar = ({ logoAlt }) => { 
  const { t, i18n } = useTranslation();

  // Elementos de navegación principales
  const navItems = [
    { key: 'about', path: '/#nosotros' },
    { key: 'services', path: '/#servicios' },
    { key: 'contact', path: '/#contacto' },
  ];

  return (
<nav 
// 🔑 AJUSTE: Se añadió la clase 'z-3' para traer el Navbar al frente.
className="navbar navbar-expand-lg bg-transparent py-1 shadow-sm position-absolute top-0 w-100 z-3"
>
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logoImage} alt={logoAlt || 'SPA'} height="120" /> 
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
              className={`nav-link text-uppercase`} 
              href={item.path}
              style={{ 
                color: 'white', 
                fontWeight: item.key === 'home' ? 'normal' : '500'
              }}
            >
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
  );
};

export default MainNavbar;