import React, { useState } from 'react';
import Swal from 'sweetalert2';

import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:2010/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: data.message || 'Your message was sent successfully!',
        confirmButtonColor: '#3085d6',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: data.message || 'Something went wrong!',
      });
    }
    
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong!');
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Please fill out the form below.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
