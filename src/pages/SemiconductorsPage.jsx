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
            <h1 className="service-title">Memories Design</h1>
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
              <li><strong>SRAM Design:</strong> High-density, low-power SRAM cells with advanced leakage control</li>
              <li><strong>DRAM Architecture:</strong> Next-generation DDR and LPDDR memory solutions</li>
              <li><strong>Non-Volatile Memory:</strong> Flash, MRAM, ReRAM, and emerging memory technologies</li>
              <li><strong>Memory Controllers:</strong> High-performance controllers with advanced error correction</li>
              <li><strong>Cache Hierarchies:</strong> Custom L1/L2/L3 cache designs for processors</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Tools & Technologies</h2>
            <ul>
              <li><strong>Memory Compilers:</strong> Synopsys, Cadence memory generators and bit-cell libraries</li>
              <li><strong>Timing Analysis:</strong> PrimeTime, Tempus for memory timing closure</li>
              <li><strong>Power Analysis:</strong> PowerArtist, Voltus for memory power optimization</li>
              <li><strong>Physical Design:</strong> ICC2, Innovus for memory layout and routing</li>
              <li><strong>Verification:</strong> Memory BIST, scan testing, and functional verification</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Focus Areas</h2>
            <ul>
              <li>Ultra-low power memory for IoT and mobile applications</li>
              <li>High-bandwidth memory for AI/ML acceleration</li>
              <li>Automotive-grade memory with functional safety</li>
              <li>3D stacked memory architectures</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SemiconductorsPage;