import React from 'react';
import './About.css';
import { 
  GiMicrochip, 
  GiArchitectMask, 
  GiTeamIdea, 
  GiTechnoHeart 
} from 'react-icons/gi';
import { 
  MdOutlineEngineering, 
  MdOutlineRocketLaunch 
} from 'react-icons/md';
import { 
  HiOutlineLightBulb, 
  HiOutlineChartBarSquare 
} from 'react-icons/hi2';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-header">
          <h2>Who We Are</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <p className="about-intro">
            Integral Design is a deep-tech R&D powerhouse, fusing theoretical science with systems engineering. We design future-ready solutions in AI, ML, Quantum Computing, Secure Semiconductors, and more. Our mission: solve the unsolved — responsibly and scalably.
          </p>
        </div>
          
        <div className="about-features">
          <div className="about-feature-card">
            <div className="about-card-icon">
              <MdOutlineEngineering size={40} />
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
              <HiOutlineLightBulb size={40} />
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
              <GiTeamIdea size={40} />
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
              <MdOutlineRocketLaunch size={40} />
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
