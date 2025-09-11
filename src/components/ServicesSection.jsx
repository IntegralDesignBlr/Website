import React from 'react';
import './Services.css';
import { FaMicrochip, FaMemory, FaNetworkWired, FaCogs } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "Analog Front-End",
    description: "High-precision ADCs, DACs, LDOs, bandgaps, signal chains.",
    icon: <FaMicrochip size={28} />,
    details: [
      "High-performance data converters",
      "Precision analog circuitry",
      "Low-noise amplifiers",
      "Custom sensor interfaces"
    ]
  },
  {
    id: 2,
    title: "Custom Memories",
    description: "Low-power SRAM, register files, ROM, embedded Flash.",
    icon: <FaMemory size={28} />,
    details: [
      "Ultra-low power memories",
      "Optimized for area and performance",
      "Custom register file designs",
      "Non-volatile solutions"
    ]
  },
  {
    id: 3,
    title: "Mixed-Signal IP",
    description: "RF PLLs, SerDes, high-speed I/O, MIPI PHYs, logic.",
    icon: <FaNetworkWired size={28} />,
    details: [
      "High-speed serial interfaces",
      "Clock generation and distribution",
      "Mobile interface protocols",
      "Custom logic solutions"
    ]
  },
  {
    id: 4,
    title: "Full-Cycle",
    description: "Spec → Schematic → Layout → Verification → Tape-Out.",
    icon: <FaCogs size={28} />,
    details: [
      "End-to-end design services",
      "Design verification & validation",
      "Physical implementation",
      "Post-silicon support"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What We Offer</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                {service.icon}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-details">
                  {service.details.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;