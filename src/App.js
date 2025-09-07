import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar       from './components/Navbar';
import HomePage     from './pages/HomePage';
import AboutPage    from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage     from './pages/TeamPage';
import ContactPage  from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <footer className="footer">
        Integral Smart Home Automation • E-203 Mirabilis, Horamavu, Bangalore
      </footer>
    </>
  );
}
