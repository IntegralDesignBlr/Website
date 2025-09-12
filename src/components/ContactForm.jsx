import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration
    const serviceID = 'service_7s3tfud';
    const templateID = 'template_oat6bb1';
    const publicKey = 'hjUlS1eMDeyl6xBDd';
    
    // Template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'IntegralDesign Team',
    };
    
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Sorry, there was an error sending your message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Let's Collaborate</h2>
            <p>
              Interested in working together? Contact us to discuss how our semiconductor design 
              expertise can help accelerate your next project.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4>Our Location</h4>
                  <p>Tech Park, Electronic City, Bangalore, Karnataka 560100</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>info@integraldesign.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>+91 (80) 4567-8901</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
