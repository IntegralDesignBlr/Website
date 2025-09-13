import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/New_Web/images/logo/integral-logo.png" alt="IntegralDesign" />
          <span>IntegralDesign</span>
        </Link>
        
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </div>
        
        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button type="button" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => handleNavigation('/')}>
            Home
          </button>
          <button type="button" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={() => handleNavigation('/services')}>
            Services
          </button>
          <button type="button" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => handleNavigation('/about')}>
            About Us
          </button>
          <button type="button" className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`} onClick={() => handleNavigation('/team')}>
            Team
          </button>
          <button type="button" className="btn btn-contact" onClick={() => handleNavigation('/contact')}>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
