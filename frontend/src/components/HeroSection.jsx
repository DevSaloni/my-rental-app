import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';  // FontAwesome check circle icon

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="overlay">
        <div className="hero-content-left">
          <h1>
            Find Your <span className="highlight">Perfect Urban Home</span><br />
            For Students & Professionals
          </h1>
          <p>
            Rent hassle-free homes in your city with trusted listings,<br />
            flexible terms, and affordable prices.
          </p>

          <ul className="features-list">
            <li><FaCheckCircle  className="check-icon"/>Flexible Lease Terms</li>
            <li><FaCheckCircle className="check-icon"/>Verified Listings</li>
            <li><FaCheckCircle className="check-icon"/> 24/7 Customer Support</li>
          </ul>

          <Link to="/homes">
            <button className="cta-button">Browse Rentals</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
