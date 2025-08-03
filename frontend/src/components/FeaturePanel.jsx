import React from 'react';

import './FeaturePanel.css';
import bgImage from '/featurepanel.jpeg'; 

const FeaturePanel = () => {
  return (
    <div
      className="full-image-panel"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-overlay">
        <h1>Your Rental Journey Starts Here</h1>
        <p>
          UrbanDwell is built for students and professionals on the move.
          Whether you're starting college or switching jobs, we help you discover 
          budget-friendly, verified rental homes that match your needs — fast, safe, and stress-free.
        </p>
      </div>
    </div>
  );
};

export default FeaturePanel;
