import React from 'react';
import './Contact.css';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import contactImg from '../../assets/contactimg3.png';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="split-screen-container">
        {/* Image Section */}
        <div className="contact-image-container">
          <img src={contactImg} alt="Contact" className="contact-image" />
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-container shadow-box">
          <h2 className="contact-heading">CONTACT US</h2>
          <form>
            <div className="form-group">
              <div className="input-icon">
                <FaUser className="icon" />
                <input type="text" placeholder="Enter your Name" className="input-field" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaEnvelope className="icon" />
                <input type="email" placeholder="Enter a valid email address" className="input-field" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaPhone className="icon" />
                <textarea placeholder="Enter your message" className="textarea-field"></textarea>
              </div>
            </div>
            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;