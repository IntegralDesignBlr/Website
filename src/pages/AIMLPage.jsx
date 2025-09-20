import React from 'react';
import '../components/Services.css';
import { GiArtificialIntelligence } from 'react-icons/gi';

const AIMLPage = () => {
  return (
    <div className="service-page">
      <div className="container">
        <section className="service-title-section">
          <div className="service-title-content">
            <GiArtificialIntelligence className="service-title-icon" size={60} />
            <h1 className="service-title">AI & Machine Learning</h1>
            <div className="service-title-underline"></div>
            <p className="service-description">
              Designing next-generation models, frameworks, and intelligence platforms for the future of AI.
            </p>
          </div>
        </section>

        <main className="service-content">
          <section className="service-section">
            <h2>Our Focus</h2>
            <ul>
              <li>Foundation Models (LLMs, Vision Transformers)</li>
              <li>Neural Architecture Search (NAS)</li>
              <li>Edge & Federated Learning</li>
              <li>Ethical & Explainable AI</li>
              <li>Optimized Training Pipelines</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies</h2>
            <ul>
              <li>TensorFlow, PyTorch, JAX</li>
              <li>ONNX, TorchScript, custom inference stacks</li>
              <li>Model compression, pruning, distillation</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Projects</h2>
            <p>We are actively working on multi-modal AI models, reinforcement learning agents for robotics, and AI tooling for chip design.</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AIMLPage;