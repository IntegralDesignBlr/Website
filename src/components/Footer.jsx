import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
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
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-services">
            <h4>Our Services</h4>
            <Link to="/services">High-Speed SerDes</Link>
            <Link to="/services">Power Management ICs</Link>
            <Link to="/services">Data Converters</Link>
            <Link to="/services">Mixed-Signal Circuits</Link>
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
