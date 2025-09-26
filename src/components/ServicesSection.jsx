import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import { FaAtom } from 'react-icons/fa';
import { GiProcessor, GiArtificialIntelligence } from 'react-icons/gi';
import { MdPrecisionManufacturing } from 'react-icons/md';

const services = [
  {
    id: 1,
    title: "AI & ML",
    description: "Artificial Intelligence & Machine Learning solutions for next-gen applications.",
    icon: <GiArtificialIntelligence size={32} />,
    path: "/services/ai-ml",
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
    path: "/services/quantum",
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
    path: "/services/risc-v",
    details: [
      "ADC/DAC Design and Optimization",
      "Low-Power Analog Circuit Design",
      "Mixed-Signal System Integration",
      "High-Speed Interface Design"
    ]
  },
  {
    id: 4,
    title: "Memories Design",
    description: "Advanced memory architectures and high-performance storage solutions.",
    icon: <MdPrecisionManufacturing size={30} />,
    path: "/services/semiconductors",
    details: [
      "SRAM Design: Low-power memory cells",
      "Flash Memory Architecture",
      "Memory Controller Design",
      "High-Speed Memory Interfaces"
    ]
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Key Pillars</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              className="service-card" 
              key={service.id}
              onClick={() => handleServiceClick(service.path)}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;