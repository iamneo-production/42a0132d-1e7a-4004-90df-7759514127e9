import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com'; // Make sure to install emailjs-com using npm or yarn

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration for sending emails
    const serviceID = 'service_68559mo';
    const templateID = 'template_zxthn8j';
    const userID = '441LGOE7rh3dAOeND';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Reset form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="contact-page">
      <h1 className="contact-page-title">Contact Us</h1>
      <p className="contact-page-description">
        We would love to hear from you! Get in touch with us.
      </p>
      <div className="contact-page-content">
        <div className="contact-info">
          <h2 className="contact-info-title">Contact Information</h2>
          <p>
            Email: <a href="mailto:info@glammart.com">info@glammart.com</a>
          </p>
          <p>Phone: +1 123-456-7890</p>
          <p>Address: 123 Beauty Street, Glam City</p>
        </div>
        <div className="contact-form">
          <h2 className="contact-form-title">Send us a message</h2>
          {isSubmitted ? (
            <p className="form-response">Thank you for your message! We will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
