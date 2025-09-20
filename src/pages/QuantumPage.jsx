import React from 'react';
import '../components/Services.css';
import { FaAtom } from 'react-icons/fa';

const QuantumPage = () => {
  return (
    <div className="service-page">
      <div className="container">
        <section className="service-title-section">
          <div className="service-title-content">
            <FaAtom className="service-title-icon" size={60} />
            <h1 className="service-title">Quantum Computing</h1>
            <div className="service-title-underline"></div>
            <p className="service-description">
              Exploring hybrid quantum-classical systems and fault-tolerant computation for next-generation computing solutions.
            </p>
          </div>
        </section>

        <main className="service-content">
          <section className="service-section">
            <h2>Research Focus</h2>
            <ul>
              <li>Qubit Architectures (Superconducting, Ion Trap, Topological)</li>
              <li>Quantum Error Correction</li>
              <li>Quantum Compiler Development</li>
              <li>Simulation of Quantum Circuits</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Tools & Platforms</h2>
            <ul>
              <li>Qiskit, Cirq, PennyLane</li>
              <li>Quantum-Classical Hybrid Frameworks</li>
              <li>Quantum Algorithms for ML and Chemistry</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default QuantumPage;