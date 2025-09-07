import React from 'react';
import { ReactComponent as AboutIcon } from '../assets/about.svg';

export default function About() {
  return (
    <section id="about" className="section">
      <AboutIcon width={48} style={{ marginBottom: '1rem' }} />
      <h2>Who We Are</h2>
      <p>
        Integral Design blends decades of analog expertise with cutting-edge digital
        integration. From Netra-SoC platforms to RISC-V SoC generators, our solutions
        span industrial, automotive, and medical domains.
      </p>
      <p>
        We pioneer high-precision ADAS, low-power regulators, ML-enhanced front-ends,
        and turnkey IP delivered with full-cycle semiconductor design.
      </p>
    </section>
  );
}
