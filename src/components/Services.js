// Services.js
import React from 'react';
import Service from './Service';
import { ReactComponent as Icon } from '../assets/services.svg';

const list = [
  ['Analog Front-End', 'High-precision ADCs, DACs, LDOs, bandgaps, signal chains.'],
  ['Custom Memories',  'Low-power SRAM, register files, ROM, embedded AI memory.'],
  ['Mixed-Signal IP',  'RF PLLs, SerDes, high-speed I/O, MIPI PHYs, logic.'],
  ['Full-Cycle',       'Spec → Schematic → Layout → Verification → Tape-Out.']
];

export default function Services() {
  return (
    <section id="services" className="section">
      <h2>What We Offer</h2>
      <div className="services-grid">
        {list.map(([title, text], i) => (
          <Service key={i} icon={Icon} title={title} text={text} />
        ))}
      </div>
    </section>
  );
}
