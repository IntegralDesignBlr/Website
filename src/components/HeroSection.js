import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero">
      <h1>ADVANCED TECHNOLOGY SOLUTIONS</h1>
      <h2>Precision Analog & Mixed-Signal ICs</h2>
      <p>Empowering Edge AI, Industrial Control, Automotive, and Healthcare</p>
      <p>Innovative semiconductor products to drive your success...</p>
      <NavLink to="/services" className="cta">
        Explore Services
      </NavLink>
    </section>
  );
}
