import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { ReactComponent as ContactIcon } from '../assets/contact.svg';

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  useEffect(() => {
    emailjs.init('hjUlS1eMDeyl6xBDd'); // ← your EmailJS public key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_7s3tfud', 'template_kod05yk', formRef.current)
      .then(
        () => setStatus('Message sent successfully!'),
        () => setStatus('Failed to send. Please try again.')
      );
  };

  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <ContactIcon width={48} style={{ marginBottom: '1rem' }} />
      <h2>Let's Collaborate</h2>
      <p>Ready to bring your next semiconductor IP or product to life? Drop us a line.</p>
      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Send Message
        </motion.button>
      </form>
      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </motion.section>
  );
}
