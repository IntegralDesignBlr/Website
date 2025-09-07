import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as ProcessIcon } from '../assets/process.svg';

export default function Process() {
  return (
    <motion.section
      id="process"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <ProcessIcon width={48} style={{ marginBottom: '1rem' }} />
      <h2>Our Process</h2>
      <ol>
        <li>Requirements & Specification</li>
        <li>Schematic & Architecture</li>
        <li>Layout, DRC/LVS & Verification</li>
        <li>Post-Silicon Validation & Ramp-Up</li>
        <li>Tape-Out, Debug & Handoff</li>
      </ol>
      <h3>Engagement Models</h3>
      <ul>
        <li>Turnkey IP Delivery</li>
        <li>Collaborative Co-Development</li>
        <li>Staff Augmentation</li>
      </ul>
    </motion.section>
  );
}
