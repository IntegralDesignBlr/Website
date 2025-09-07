import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../assets/about.svg';

export default function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img src={Icon} alt="About Icon" style={{ width: 48 }} />
      <h2>Who We Are</h2>
      <p>
        Integral Smart Automation blends decades of analog design with cutting-edge
        digital integration. From Netra-SOC edge-AI platforms to InCore’s RISC-V
        SoC generators, our expertise spans industrial, automotive, and healthcare.
      </p>
      <p>
        We’ve pioneered high-precision ADCs, low-power regulators, machine-learning-
        enhanced front-ends, and more—delivering turnkey IP and full-cycle services.
      </p>
    </motion.section>
  );
}
