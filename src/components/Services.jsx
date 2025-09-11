import React from 'react';
import Service from './Service';
import { FaMicrochip, FaMemory, FaProjectDiagram, FaTools } from 'react-icons/fa';

const servicesList = [
  { icon: FaMicrochip, title: 'Analog Front-End', text: 'High-precision ADCs, DACs, LDOs, bandgaps, signal chains.' },
  { icon: FaMemory,     title: 'Custom Memories', text: 'Low-power SRAM, register files, ROM, embedded Flash.' },
  { icon: FaProjectDiagram, title: 'Mixed-Signal IP', text: 'RF PLLs, SerDes, high-speed I/O, MIPI PHYs, logic.' },
  { icon: FaTools,       title: 'Full-Cycle', text: 'Spec → Schematic → Layout → Verification → Tape-Out.' },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <h2>What We Offer</h2>
      <div className="services-grid">
        {servicesList.map((svc, i) => (
          <Service key={i} icon={svc.icon} title={svc.title} text={svc.text} />
        ))}
      </div>
    </section>
  );
}
