import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-header">
          <div className="about-icon-container">
            <div className="about-icon">
              <i className="fas fa-microchip"></i>
            </div>
          </div>
          <h2>Who We Are</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <p className="about-intro">
            INTEGRALDESIGN blends decades of analog & mixed-signal expertise with cutting-edge digital integration. 
            From Edge-AI SoCs to RISC-V cores, we power industries from industrial automation to healthcare.
            We pioneer high-precision ADCs, low-power LDOs, ML-enhanced front-ends, and turnkey IP delivered 
            with full-cycle semiconductor design.
          </p>
        </div>
          
        <div className="about-features">
          <div className="about-feature-card">
            <div className="about-card-icon">
              <i className="fas fa-history"></i>
            </div>
            <div className="about-feature-content">
              <h3>Our Experience</h3>
              <p>
                With over 20+ years of combined experience, our team has delivered more than 50 successful 
                semiconductor designs across various technology nodes.
              </p>
            </div>
          </div>
            
          <div className="about-feature-card">
            <div className="about-card-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="about-feature-content">
              <h3>Our Approach</h3>
              <p>
                We combine innovative design methodologies with rigorous validation processes to 
                ensure high-quality, reliable, and power-efficient solutions.
              </p>
            </div>
          </div>
            
          <div className="about-feature-card">
            <div className="about-card-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="about-feature-content">
              <h3>Our Team</h3>
              <p>
                Our diverse team of engineers brings specialized expertise in analog, digital, and 
                mixed-signal design from leading semiconductor companies worldwide.
              </p>
            </div>
          </div>
            
          <div className="about-feature-card">
            <div className="about-card-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="about-feature-content">
              <h3>Our Vision</h3>
              <p>
                We aim to be at the forefront of semiconductor innovation, creating solutions 
                that enable the next generation of smart, connected devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
