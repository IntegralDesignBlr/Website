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
            <h1 className="service-title">RISC-V Architecture</h1>
            <div className="service-title-underline"></div>
            <p className="service-description">
              Open and secure compute cores tailored for AI, edge, and secure applications with cutting-edge architecture.
            </p>
          </div>
        </section>

        <main className="service-content">
          <section className="service-section">
            <h2>Core Projects</h2>
            <ul>
              <li>Custom ISA Extensions for ML Workloads</li>
              <li>Secure Boot and Isolation Techniques</li>
              <li>Microarchitecture Design and RTL</li>
              <li>Integration with AI accelerators and NPUs</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Tools & Technologies</h2>
            <ul>
              <li>Verilog, Chisel, OpenROAD, RocketChip</li>
              <li>Formal Verification and Simulation</li>
              <li>Performance Monitoring and Tuning</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default RISCVPage;