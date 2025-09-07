import React from 'react';
import { motion } from 'framer-motion';

export default function Service({ icon: Icon, title, text }) {
  return (
    <motion.div
      className="service-card"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: '0px 8px 20px rgba(0,0,0,0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      style={{ cursor: 'pointer' }}
    >
      <Icon width={48} style={{ marginBottom: '1rem' }} />
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}
