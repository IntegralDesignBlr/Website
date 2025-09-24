import React from 'react';
import './Services.css';
import { FaBrain, FaAtom, FaMicrochip, FaMemory } from 'react-icons/fa';
import { GiProcessor, GiArtificialIntelligence } from 'react-icons/gi';
import { MdPrecisionManufacturing } from 'react-icons/md';

const services = [
  {
    id: 1,
    title: "AI & ML",
    description: "Artificial Intelligence & Machine Learning solutions for next-gen applications.",
    icon: <GiArtificialIntelligence size={32} />,
    details: [
      "Foundation Models (LLMs, Vision Transformers)",
      "Neural Architecture Search (NAS)",
      "Edge & Federated Learning",
      "Ethical & Explainable AI"
    ]
  },
  {
    id: 2,
    title: "Quantum Computing",
    description: "Hybrid quantum-classical systems and fault-tolerant computation research.",
    icon: <FaAtom size={28} />,
    details: [
      "Qubit Architectures (Superconducting, Ion Trap)",
      "Quantum Error Correction",
      "Quantum Compiler Development",
      "Simulation of Quantum Circuits"
    ]
  },
  {
    id: 3,
    title: "Analog and Mixed signal design",
    description: "High-precision analog and mixed-signal circuits for advanced applications.",
    icon: <GiProcessor size={30} />,
    details: [
      "ADC/DAC Design and Optimization",
      "Low-Power Analog Circuit Design",
      "Mixed-Signal System Integration",
      "High-Speed Interface Design"
    ]
  },
  {
    id: 4,
    title: "VLSI",
    description: "Custom silicon, analog design, and memory architecture innovation.",
    icon: <MdPrecisionManufacturing size={30} />,
    details: [
      "Analog Design: ADC/DACs, amplifiers",
      "SRAM Design: Low-power memory cells",
      "Physical Design: Floorplanning, P&R",
      "EDA Toolchains: OpenROAD, Synopsys"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Key Pillars</h2>
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