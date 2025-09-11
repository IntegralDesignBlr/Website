import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-watermark">
        <span>ADVANCED</span>
        <span>TECHNOLOGY</span>
        <span>SOLUTIONS</span>
      </div>
      <div className="container hero-content">
        <h1 className="animate-fade-in">Pioneering Semiconductor Design Solutions</h1>
        <p className="animate-fade-in">
          Delivering cutting-edge semiconductor design services with expertise in analog,
          mixed-signal, and digital solutions.
        </p>
        <div className="hero-buttons animate-fade-in">
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
          <Link to="/services" className="btn btn-outline">Our Services</Link>
        </div>
      </div>
      <div className="explore-text">
        EXPLORE OUR PRODUCTS
      </div>
    </section>
  );
};

export default HeroSection;
