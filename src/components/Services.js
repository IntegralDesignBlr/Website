import React from 'react';
import { motion } from 'framer-motion';
import Service from './Service';
// import the SVG as a React component:
import { ReactComponent as ServicesIcon } from '../assets/services.svg';

const servicesList = [
  {
    icon: ServicesIcon,
    title: 'Analog Front-End',
    text: 'High-precision ADCs, DACs, LDOs, bandgaps, front-end signal chains.',
  },
  {
    icon: ServicesIcon,
    title: 'Custom Memories',
    text: 'Low-power SRAM, register files, ROM, and embedded AI memory.',
  },
  {
    icon: ServicesIcon,
    title: 'Mixed-Signal IP',
    text: 'RF PLLs, SerDes, high-speed I/O, MIPI PHYs, and integrated logic.',
  },
  {
    icon: ServicesIcon,
    title: 'Full-Cycle Services',
    text: 'From spec and schematic to layout, verification, and tape-out.',
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>What We Offer</h2>
      <div className="services-grid">
        {servicesList.map((s, i) => (
          <Service key={i} {...s} />
        ))}
      </div>
    </motion.section>
  );
}
