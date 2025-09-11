import React from 'react';
import { motion } from 'framer-motion';

export default function Service({ icon: Icon, title, text }) {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.6 }}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
      style={{ cursor: 'pointer' }}
    >
      <Icon size={48} style={{ marginBottom: '1rem' }} />
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}
