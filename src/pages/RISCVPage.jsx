import React from 'react';
import '../components/Services.css';
import { GiProcessor } from 'react-icons/gi';

const RISCVPage = () => {
  return (
    <div className="service-page">
      <div className="container">
        <section className="service-title-section">
          <div className="service-title-content">
            <GiProcessor className="service-title-icon" size={60} />
            <h1 className="service-title">Analog & Mixed Signal Design</h1>
            <div className="service-title-underline"></div>
            <p className="service-description">
              Open and secure compute cores tailored for AI, edge, and secure applications with cutting-edge architecture.
            </p>
          </div>
        </section>

        <main className="service-content">
          <section className="service-section">
            <h2>Services</h2>
            <ul>
              <li><strong>High-Speed Data Converters:</strong> ADC/DAC design with industry-leading precision and speed</li>
              <li><strong>Precision Analog Circuits:</strong> Operational amplifiers, voltage references, and signal conditioning</li>
              <li><strong>Mixed-Signal Integration:</strong> Seamless analog-digital interface design</li>
              <li><strong>Low-Power Design:</strong> Power management units and energy-efficient analog blocks</li>
              <li><strong>RF & Wireless:</strong> RF front-ends, PLLs, and wireless communication circuits</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Tools & Technologies</h2>
            <ul>
              <li><strong>Design Tools:</strong> Cadence Virtuoso, Synopsys Custom Compiler, Mentor Graphics</li>
              <li><strong>Simulation:</strong> SPICE, Spectre, AFS, Eldo for accurate circuit modeling</li>
              <li><strong>Layout & Verification:</strong> Calibre, ICV for DRC/LVS verification</li>
              <li><strong>Process Technologies:</strong> 28nm, 16nm, 7nm FinFET and beyond</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default RISCVPage;