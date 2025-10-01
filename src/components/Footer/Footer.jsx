import React from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>File Management System</h3>
          <p className="footer-description">
            A secure and efficient way to manage your files and documents online.
            Built with modern technologies to provide the best user experience.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <p><FaEnvelope /> lahariritik3@gmail.com</p>
            <p><FaPhone /> +91 8545873048</p>
            <p><FaMapMarkerAlt /> INDIA</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/lahariritik/" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/ritik-lahari-267213254/" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/RitikLahari" className="social-icon" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>&copy; {currentYear} File Management System. All rights reserved.</p>
        </div>
        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer