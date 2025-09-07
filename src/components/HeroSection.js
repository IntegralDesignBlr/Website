import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function HeroSection() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Precision Analog & Mixed-Signal ICs</h1>
      <p>Empowering Edge-AI, Industrial Control, Automotive, and Healthcare.</p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <NavLink to="/services" className="theme-toggle">
          Explore Services
        </NavLink>
      </motion.div>
    </motion.section>
  );
}
