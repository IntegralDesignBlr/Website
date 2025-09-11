import React from 'react';
import './Clients.css';

const clients = [
  { id: 1, name: "TechCorp", logo: "backgrounds/abstract-art-1" },
  { id: 2, name: "InnovateSemi", logo: "backgrounds/abstract-art-2" },
  { id: 3, name: "CircuitSolutions", logo: "backgrounds/abstract-art-3" },
  { id: 4, name: "NexGen Electronics", logo: "backgrounds/digital-wave" },
  { id: 5, name: "SiliconVentures", logo: "backgrounds/colorful-dots" }
];

const ClientsSection = () => {
  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="section-title animate-fade-in">Trusted by Industry Leaders</h2>
        <p className="section-subtitle animate-fade-in">
          We collaborate with forward-thinking companies to create cutting-edge semiconductor solutions.
        </p>
        
        <div className="clients-grid animate-fade-in">
          {clients.map((client) => (
            <div className="client-logo" key={client.id}>
              <img 
                src={`/images/${client.logo}.jpg`} 
                alt={client.name} 
                title={client.name}
              />
            </div>
          ))}
        </div>
        
        <div className="clients-testimonial">
          <blockquote>
            <p>
              "IntegralDesign delivered exceptional semiconductor solutions that exceeded 
              our performance expectations while maintaining power efficiency."
            </p>
            <cite>— Technical Director, Leading Semiconductor Company</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;