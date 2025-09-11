import React from 'react';
import './Clients.css';

const clients = [
  { id: 1, name: "TechCorp", logo: "client1" },
  { id: 2, name: "InnovateSemi", logo: "client2" },
  { id: 3, name: "CircuitSolutions", logo: "client3" },
  { id: 4, name: "NexGen Electronics", logo: "client4" },
  { id: 5, name: "SiliconVentures", logo: "client5" }
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
                src={`/images/${client.logo}.png`} 
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