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
        {/* Página principal */}
        <Route path="/" element={<MainPage />} />
        <Route path="/servicio/:id" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
