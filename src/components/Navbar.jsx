import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
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
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={closeMobileMenu}>
            Services
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMobileMenu}>
            About Us
          </Link>
          <Link to="/team" className={location.pathname === '/team' ? 'active' : ''} onClick={closeMobileMenu}>
            Team
          </Link>
          <Link to="/contact" className="btn btn-contact" onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
