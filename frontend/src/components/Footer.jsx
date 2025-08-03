import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaHome, FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Logo and Tagline */}
        <div className="footer-brand">
          <h2 className="footer-logo"><FaHome /> UrbanDwell</h2>
          <p>Your trusted rental companion.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links-section">
          <ul className="footer-links">
            <h4 className='footer-head'> Quick Links</h4>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/homes">Find Rentals</Link></li>
            <li><Link to="/list-property">List Property</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact and Social */}
        <div className="footer-contact">
            <h4 className='footer-head'>Contact</h4>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> support@urbandwell.in</p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} UrbanDwell. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
