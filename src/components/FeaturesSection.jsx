import React from 'react';
import './Features.css';

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-content">
          <div className="features-text">
            <h2 className="animate-fade-in">Engineering Excellence in Every Circuit</h2>
            <p className="animate-fade-in">
              Your dedicated partner for high-performance, low-power analog and mixed-signal semiconductor design.
            </p>
            <ul className="features-list">
              <li className="animate-slide-in">Advanced process technologies</li>
              <li className="animate-slide-in">Expert engineers with industry experience</li>
              <li className="animate-slide-in">Comprehensive design and verification</li>
              <li className="animate-slide-in">Optimized for performance and power</li>
            </ul>
          </div>
          <div className="features-image animate-fade-in">
            <img src="/New_Web/images/backgrounds/abstract-fluid.jpg" alt="Semiconductor Design" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;