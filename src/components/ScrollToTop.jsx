// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Si hay un hash (ej: #nosotros), salimos de la función.
    // Esto permite que el navegador use su comportamiento por defecto de scroll a la ID.
    if (hash) {
      // Opcional: Si el hash existe, puedes intentar hacer scroll manualmente 
      // para mayor compatibilidad, pero el navegador generalmente lo maneja bien.
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Usamos setTimeout para dar tiempo al DOM a renderizarse completamente
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
      return;
    }

    // 2. Si NO hay hash (es una navegación normal a una nueva página),
    // forzamos el scroll al principio.
    window.scrollTo(0, 0);
  }, [pathname, hash]); // Ahora dependemos de 'hash' también

  return null;
};

export default ScrollToTop;