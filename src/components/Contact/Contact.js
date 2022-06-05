import React from 'react';
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-inner">
        <h2> Stay in Touch </h2>{' '}
        <div>
          <input className="contact__input" type="email" placeholder="Enter your email address" />
          <button type="submit" className="contact__button">
            Submit{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      <div className="footer-wrapper">
        <div className="footer-container">
          <Footer />
        </div>{' '}
      </div>{' '}
    </section>
  );
};

export default Contact;
