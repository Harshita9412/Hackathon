import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here, you can add your form submission logic (like calling an API)
    console.log('Form submitted', { name, email, message });
  };

  return (
    <div className="contact-container">
      <h2 className="form-title">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
        {submitted && <p className="success-message">Thank you for contacting us!</p>}
      </form>
    </div>
  );
};

export default Contact;
