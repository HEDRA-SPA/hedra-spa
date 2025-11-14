import { useTranslation } from 'react-i18next';
import mxFlag from '../../assets/mx.png';
import enFlag from '../../assets/en.jpg';

// EL texto del componenete LanguageSelector puede presentarse oscuro o claro (se pasa un prop)
function LanguageSelector({ variant = 'dark', buttonStyle = {} }) { 
  const { i18n } = useTranslation();
  // Maneja dos contextos (locales, en.json y es,json )
  const languages = [
    { code: 'es', flag: mxFlag, label: 'ES' },
    { code: 'en', flag: enFlag, label: 'EN' }
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };
  
  const baseColorValue = variant === 'light' ? 'black' : 'white';
  const dropdownBackgroundColor = variant === 'light' ? 'white' : '#1c3b14';
  const dropdownItemTextColor = variant === 'light' ? 'black' : 'white';

  const mergedButtonStyle = {
    textDecoration: 'none', 
    fontSize: '1rem', 
    fontWeight: '500', 
    color: baseColorValue, 
    ...buttonStyle 
  };

  return (
    <div className="dropdown">
      <button 
        className={`btn dropdown-toggle p-0 ${variant === 'light' ? 'text-dark' : 'text-white'}`} 
        type="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
        style={mergedButtonStyle} 
      >
        <img
          src={i18n.language === 'es' ? mxFlag : enFlag}
          alt={`${i18n.language === 'es' ? 'Spanish' : 'English'} flag`}
          style={{ width: '20px', height: 'auto', marginRight: '8px', verticalAlign: 'middle' }}
        />
        {i18n.language.toUpperCase()}
      </button>

      <ul 
        className="dropdown-menu shadow-lg"
        style={{ 
          backgroundColor: dropdownBackgroundColor, 
          border: 'none', 
        }}
      >
        {languages.map((lang) => (
          <li key={lang.code}>
            <button
              className="dropdown-item"
              onClick={() => changeLanguage(lang.code)}
              style={{ 
                color: dropdownItemTextColor,
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