import React from 'react';
import { ReactComponent as TeamIcon } from '../assets/team.svg';
import { MdNetworkCheck, MdWifi } from 'react-icons/md';
import { GiMicrochip } from 'react-icons/gi';

export default function Team() {
  return (
    <section id="team" className="section">
      <TeamIcon width={48} style={{ marginBottom: '1rem' }} />
      <h2>Our Team</h2>
      <p>15+ engineers with 100+ years of combined analog & mixed-signal expertise.</p>
      <p>Leaders from top semiconductor firms, delivering IP on tight timelines.</p>
      <div className="team-icons">
        <div><MdNetworkCheck /><span>Network</span></div>
        <div><MdWifi /><span>Wireless</span></div>
        <div><GiMicrochip /><span>Microcontrol</span></div>
      </div>
    </section>
  );
}
