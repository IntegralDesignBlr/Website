import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="footer-logo">
              <img src="/New_Web/images/logo/integral-logo.png" alt="IntegralDesign" />
              <span>IntegralDesign</span>
            </Link>
            <p>
              Your dedicated partner for high-performance, low-power analog and
              mixed-signal semiconductor design.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <button type="button" onClick={() => handleNavigation('/')} className="footer-link">Home</button>
            <button type="button" onClick={() => handleNavigation('/services')} className="footer-link">Services</button>
            <button type="button" onClick={() => handleNavigation('/about')} className="footer-link">About Us</button>
            <button type="button" onClick={() => handleNavigation('/team')} className="footer-link">Our Team</button>
            <button type="button" onClick={() => handleNavigation('/contact')} className="footer-link">Contact</button>
          </div>

          <div className="footer-services">
            <h4>Our Services</h4>
            <button type="button" onClick={() => handleNavigation('/services')} className="footer-link">High-Speed SerDes</button>
            <button type="button" onClick={() => handleNavigation('/services')} className="footer-link">Power Management ICs</button>
            <button type="button" onClick={() => handleNavigation('/services')} className="footer-link">Data Converters</button>
            <button type="button" onClick={() => handleNavigation('/services')} className="footer-link">Mixed-Signal Circuits</button>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: info@integraldesign.com</p>
            <p>Phone: +91 (80) 4567-8901</p>
            <p>Address: Bangalore, Karnataka</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} IntegralDesign & Services LLP. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
