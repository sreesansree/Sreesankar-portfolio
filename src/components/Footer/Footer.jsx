import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo and Description */}
        <div className="footer__logo-section">
          <h2 className="footer__logo">Sreesankar P</h2>
          <p className="footer__description">
            Building a better web, one project at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer__links">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__list">
            <li>
              <a href="#About" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#Projects" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer__socials">
          <h3 className="footer__heading">Follow Me</h3>
          <div className="footer__icons">
            <a
              href="https://github.com/sreesansree"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sreesankar-p/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/sree__san97/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__copyright">
        <p>
          &copy; {new Date().getFullYear()} Sreesankar-p. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
