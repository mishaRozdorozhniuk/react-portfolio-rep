import React from 'react';
import './Footer.css';
const Footer = () => {
  const footerItems = ['home', 'categories', 'about', 'contact'];

  return (
    <footer>
      <div className="footer-container">
        <span className="header__logo"> Escape. </span>
        <ul className="footer__list">
          {footerItems.map((el) => (
            <li key={el}> {el} </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
