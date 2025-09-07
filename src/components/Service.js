import React from 'react';
import { motion } from 'framer-motion';

export default function Service({ icon: Icon, title, text }) {
  return (
    <motion.div
      className="service-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Icon width={40} style={{ marginBottom: '0.5rem' }} />
      <h3 style={{ margin: '0.5rem 0' }}>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}
