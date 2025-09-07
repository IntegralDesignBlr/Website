import React from 'react';
import Service from './Service';
import { ReactComponent as Icon } from '../assets/services.svg';

const servicesList = [
  {
    title: 'Analog Front-End',
    text: 'High-precision ADCs, DACs, LDOs, bandgaps, signal chains.'
  },
  {
    title: 'Custom Memories',
    text: 'Low-power SRAM, register files, ROM, embedded OTP & Flash.'
  },
  {
    title: 'Mixed-Signal IP',
    text: 'RF PLLs, SerDes, high-speed I/O, MIPI PHYs, logic.'
  },
  {
    title: 'Full-Cycle',
    text: 'Spec → Schematic → Layout → Verification → Tape-Out.'
  }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <h2>What We Offer</h2>
      <div className="services-grid">
        {servicesList.map((item, idx) => (
          <Service
            key={idx}
            icon={Icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
}
