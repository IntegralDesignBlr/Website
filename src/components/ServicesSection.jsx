import React from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: "High-Speed SerDes Solutions",
    description: "Cutting-edge high-speed serializer/deserializer technology essential for advanced communication systems.",
    icon: "chip"
  },
  {
    id: 2,
    title: "Power Management ICs",
    description: "Energy-efficient integrated circuits for optimal power delivery across various applications.",
    icon: "energy"
  },
  {
    id: 3,
    title: "Analog-to-Digital Converters",
    description: "State-of-the-art ADCs and DACs solutions tailored to your specifications.",
    icon: "convert"
  },
  {
    id: 4,
    title: "Mixed-Signal Circuit Development",
    description: "Expert integration of analog signals and digital processes for modern semiconductor solutions.",
    icon: "circuit"
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title animate-fade-in">Our Leading Semiconductor Design Services</h2>
        <p className="section-subtitle animate-fade-in">Expertise that Shapes the Future of Technology</p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card animate-fade-in" key={service.id}>
              <div className="service-icon">
                <img src={`/images/${service.icon}.svg`} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;