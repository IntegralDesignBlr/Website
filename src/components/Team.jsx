import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as TeamIcon } from '../assets/team.svg';
import { MdNetworkCheck, MdWifi } from 'react-icons/md';
import { GiMicrochip } from 'react-icons/gi';

export default function Team() {
  return (
    <motion.section
      id="team"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <TeamIcon width={48} style={{ marginBottom: '1rem' }} />
      <h2>Our Team</h2>
      <p>15+ engineers with 100+ years of combined analog & mixed-signal expertise.</p>
      <div className="team-icons">
        <div><MdNetworkCheck /><span>Network</span></div>
        <div><MdWifi /><span>Wireless</span></div>
        <div><GiMicrochip /><span>Microcontrol</span></div>
      </div>
    </motion.section>
  );
}
