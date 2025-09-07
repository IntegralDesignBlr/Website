// Service.js
import React from 'react';

export default function Service({ icon: Icon, title, text }) {
  return (
    <div className="service-card">
      <Icon width={36} style={{ marginBottom: '0.5rem' }} />
      <h3 style={{ margin: '0.5rem 0' }}>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
