import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as TeamIcon } from '../assets/team.svg';

export default function Team() {
  return (
    <motion.section
      id="team"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <TeamIcon width={48} style={{ marginBottom: '1rem' }} />
      <h2>Our Team</h2>
      <p>15+ engineers with 100+ years of combined analog & mixed-signal expertise.</p>
      <p>Leaders from top semiconductor firms, delivering IP on tight timelines.</p>
    </motion.section>
  );
}
