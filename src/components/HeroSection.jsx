import React from 'react';
// removed unused Link and HiArrowRight imports
import './Hero.css';

const HeroSection = () => {
  // handleExploreClick is intentionally removed to avoid unused variable warning

  return (
    <section className="hero">
      <div className="hero-watermark">
        {/* <span>ADVANCED</span>
        <span>TECHNOLOGY</span>
        <span>SOLUTIONS</span> */}
      </div>
      <div className="container hero-content">
        <h1 className="animate-fade-in">Accelerating Semiconductor Innovation with AI and Machine Learning</h1>
        <p className="animate-fade-in">
          We engineer intelligent, efficient, and scalable VLSI solutions using the power of AI-driven design automation.
        </p>
        {/* <div className="hero-buttons animate-fade-in">
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
          <Link to="/services" className="btn btn-outline">Our Services</Link>
        </div> */}
      </div>
      {/* <div className="explore-text">
        <button 
          onClick={handleExploreClick}
          className="explore-button"
          aria-label="Explore our services"
        >
          <span>EXPLORE OUR SERVICES</span>
          <HiArrowRight size={24} className="explore-arrow" />
        </button>
      </div> */}
    </section>
  );
};

export default HeroSection;
