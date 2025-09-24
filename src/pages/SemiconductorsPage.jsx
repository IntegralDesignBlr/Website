import React from 'react';
import '../components/Services.css';
import { MdPrecisionManufacturing } from 'react-icons/md';

const SemiconductorsPage = () => {
  return (
    <div className="service-page">
      <div className="container">
        <section className="service-title-section">
          <div className="service-title-content">
            <MdPrecisionManufacturing className="service-title-icon" size={60} />
            <h1 className="service-title">VLSI</h1>
            <div className="service-title-underline"></div>
            <p className="service-description">
              Custom silicon design, analog circuits, and memory architecture innovation for next-generation computing.
            </p>
          </div>
        </section>

        <main className="service-content">
          <section className="service-section">
            <h2>Services</h2>
            <ul>
              <li><strong>Decision Analog Design:</strong> High-performance ADC/DACs, amplifiers, signal conditioning</li>
              <li><strong>SRAM Design:</strong> Low-power SRAM cells, custom cache hierarchies, process-aware optimization</li>
              <li><strong>Physical Design:</strong> Floorplanning, P&R, DRC/LVS verification</li>
              <li><strong>EDA Toolchains:</strong> OpenROAD, Synopsys, Cadence integrations</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Focus Areas</h2>
            <ul>
              <li>Low-power compute chips</li>
              <li>AI-specific chiplets</li>
              <li>3D IC and advanced packaging</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SemiconductorsPage;