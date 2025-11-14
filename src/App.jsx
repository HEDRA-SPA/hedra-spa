import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ServiceDetail from './components/pages/ServiceDetail';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        {/* Ruta de inicio */}
        <Route path="/" element={<MainPage />} />
        <Route path="/:lang/servicio/:slug" element={<ServiceDetail />} />
        <Route path="/:lang/service/:slug" element={<ServiceDetail />} />
        <Route path="/:lang" element={<MainPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;