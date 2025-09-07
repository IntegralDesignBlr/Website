import React from 'react';
import { motion } from 'framer-motion';
// import as React component
import { ReactComponent as PortfolioIcon } from '../assets/portfolio.svg';

const portfolio = [
  'NETRA-SOC Edge-AI CCTV SoC (5MP, 4K, up to 64 TOPS)',
  'Azurite™ RISC-V Core Generator & Test Chips',
  'AI-Enhanced ΣΔ ADC IP',
  'RF Clocks, Synchronizers & Power Modules',
];

export default function Portfolio() {
  return (
    <motion.section
      id="portfolio"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <PortfolioIcon width={48} style={{ marginBottom: '1rem' }} />
      <h2>Portfolio Highlights</h2>
      <div className="portfolio-grid">
        {portfolio.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
