import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as AboutIcon } from '../assets/about.svg';

export default function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <AboutIcon width={48} style={{ marginBottom: '1rem' }}/>
      <h2>Who We Are</h2>
      <p>
        StealthTech blends decades of analog & mixed-signal expertise with
        cutting-edge digital integration. From Edge-AI SoCs to RISC-V cores,
        we power industries from industrial automation to healthcare.
      </p>
      <p>
        We pioneer high-precision ADCs, low-power LDOs, ML-enhanced front-ends, and
        turnkey IP delivered with full-cycle semiconductor design.
      </p>
    </motion.section>
  );
}
