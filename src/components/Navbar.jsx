import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
    setIsServicesDropdownOpen(false);
  };

  const handleServicesNavigation = (path) => {
    // Always navigate to the specific service page
    handleNavigation(path);
  };

  const handleAllServicesClick = () => {
    if (location.pathname === '/') {
      // If on homepage, scroll to services section
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      closeMobileMenu();
      setIsServicesDropdownOpen(false);
    } else {
      // If not on homepage, navigate to services page
      handleNavigation('/services');
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        setIsServicesDropdownOpen(false);
        document.body.classList.remove('mobile-menu-open');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    setIsServicesDropdownOpen(false);
    
    // Prevent body scroll when mobile menu is open
    if (newState) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    // Simply toggle the dropdown
    toggleServicesDropdown();
  };

  const serviceItems = [
    { path: '/services/risc-v', label: 'Analog and Mixed signal design', description: 'Analog & Mixed Signal Circuit Design' },
    { path: '/services/semiconductors', label: 'Memories design', description: 'Memory Architecture & Design' },
    { path: '/services/ai-ml', label: 'AI ML', description: 'Artificial Intelligence & Machine Learning' },
    { path: '/services/quantum', label: 'Quantum computing', description: 'Quantum systems and computation' }
  ];

  const isServicesActive = location.pathname.startsWith('/services');
  
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
          
          <div className="services-dropdown">
            <button 
              type="button" 
              className={`nav-link services-trigger ${isServicesActive ? 'active' : ''}`} 
              onClick={handleServicesClick}
            >
              Services
              <HiChevronDown className={`dropdown-arrow ${isServicesDropdownOpen ? 'rotated' : ''}`} />
            </button>
            
            <div 
              className={`services-dropdown-menu ${isServicesDropdownOpen ? 'show' : ''}`}
            >
              {serviceItems.map((service, index) => (
                <button
                  key={index}
                  type="button"
                  className={`dropdown-item ${location.pathname === service.path ? 'active' : ''}`}
                  onClick={() => handleServicesNavigation(service.path)}
                >
                  <div className="dropdown-item-content">
                    <span className="dropdown-item-title">{service.label}</span>
                    <span className="dropdown-item-description">{service.description}</span>
                  </div>
                </button>
              ))}
              {/* <div className="dropdown-divider"></div>
              <button
                type="button"
                className={`dropdown-item ${location.pathname === '/services' ? 'active' : ''}`}
                onClick={handleAllServicesClick}
              >
                <div className="dropdown-item-content">
                  <span className="dropdown-item-title">Explore Our Services</span>
                  <span className="dropdown-item-description">View all our services on homepage</span>
                </div>
              </button> */}
            </div>
          </div>
          
          {/* <button type="button" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => handleNavigation('/about')}>
            About Us
          </button> */}
          {/* <button type="button" className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`} onClick={() => handleNavigation('/team')}>
            Team
          </button> */}
          {/* <button type="button" className="btn btn-contact" onClick={() => handleNavigation('/contact')}>
            Contact Us
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
