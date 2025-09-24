import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AIMLPage from './pages/AIMLPage';
import QuantumPage from './pages/QuantumPage';
import RISCVPage from './pages/RISCVPage';
import SemiconductorsPage from './pages/SemiconductorsPage';
import CareerPage from './pages/CareerPage';
// import AboutPage from './pages/AboutPage';
// import TeamPage from './pages/TeamPage';
// import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/ai-ml" element={<AIMLPage />} />
          <Route path="/services/quantum" element={<QuantumPage />} />
          <Route path="/services/risc-v" element={<RISCVPage />} />
          <Route path="/services/semiconductors" element={<SemiconductorsPage />} />
          <Route path="/career" element={<CareerPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/team" element={<TeamPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
