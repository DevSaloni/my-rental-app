import React from 'react';
import './HostCTASection.css';
import { Link } from 'react-router-dom';

const HostCTASection = () => {
  return (
    <div className="host-full-banner">
      <div className="host-text-box">
        <h2>List Your Property on UrbanDwell</h2>
        <p>
          Do you have a flat, PG, or 1RK? Easily rent it to verified students and working professionals. No middlemen, no stress!
        </p>
        <Link to="/list-property">
          <button className="host-cta-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default HostCTASection;
