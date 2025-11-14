import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ServiceDetail from './components/pages/ServiceDetail';
import WhatsAppReservation from './components/WhatsAppReservation';
import CalendlyWidget from './components/CalendlyWidget';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<MainPage />} />
        <Route path="/servicio/:id" element={<ServiceDetail />} />
        <Route path="/reserva-whatsapp" element={<WhatsAppReservation />} />
        <Route path="/calendly" element={<CalendlyWidget/>} />
        {/* Ejemplo de otra ruta */}
      </Routes>
    </Router>
  );
}

export default App;
