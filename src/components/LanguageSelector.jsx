import { useTranslation } from 'react-i18next';
import mxFlag from '../assets/mx.png';
import enFlag from '../assets/en.jpg';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'es', flag: mxFlag, label: 'ES' },
    { code: 'en', flag: enFlag, label: 'EN' }
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="dropdown">
      <button 
        className="btn btn-link dropdown-toggle" 
        type="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
        style={{ 
          textDecoration: 'none', 
          color: 'white'   // texto en blanco
        }}
      >
        <img
          src={i18n.language === 'es' ? mxFlag : enFlag}
          alt={`${i18n.language === 'es' ? 'Spanish' : 'English'} flag`}
          style={{ width: '20px', height: 'auto', marginRight: '8px' }}
        />
        {i18n.language.toUpperCase()}
      </button>

      <ul 
        className="dropdown-menu"
        style={{ 
          backgroundColor: '#1c3b14',  // fondo oscuro
          border: 'none',               // quitar borde claro
        }}
      >
        {languages.map((lang) => (
          <li key={lang.code}>
            <button
              className="dropdown-item"
              onClick={() => changeLanguage(lang.code)}
              style={{ 
                color: 'white',             // texto blanco
                backgroundColor: 'transparent' 
              }}
            >
              <img
                src={lang.flag}
                alt={`${lang.code} flag`}
                style={{ width: '20px', height: 'auto', marginRight: '8px' }}
              />
              {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSelector;
