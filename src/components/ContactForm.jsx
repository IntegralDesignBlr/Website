import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ReactComponent as ContactIcon } from '../assets/contact.svg';

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  useEffect(() => { emailjs.init('YOUR_PUBLIC_KEY'); }, []);

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',formRef.current)
      .then(
        () => setStatus("Message sent! We'll reply soon."),
        () => setStatus('Failed to send. Try again.')
      );
  };

  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <ContactIcon width={48} style={{ marginBottom: '1rem' }} />
      <h2>Let's Collaborate</h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text"   name="user_name"  placeholder="Your Name" required />
        <input type="email"  name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
      {status && <p style={{ marginTop: '1rem', textAlign: 'center' }}>{status}</p>}
    </motion.section>
  );
}
