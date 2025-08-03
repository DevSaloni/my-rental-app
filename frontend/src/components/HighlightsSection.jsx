import React from 'react';
import './HighlightsSection.css';
import { FaUserShield, FaDoorOpen, FaMoneyCheckAlt, FaUsers } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaUserShield />,
    title: 'Unmatched Privacy',
    text: "We're committed to protecting your privacy. We'll be there every step of your rental journey."
  },
  {
    icon: <FaDoorOpen />,
    title: 'Instant Move-In',
    text: 'Say goodbye to lengthy waits. Move into your verified home without delays.'
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: 'Lowest Security Deposit',
    text: 'Ease rental stress by paying minimal deposits. Convenience is our priority.'
  },
  {
    icon: <FaUsers />,
    title: "UrbanDwell Community",
    text: "From shared living to verified connections, we build more than rentals — we build comfort."
  }
];

const HighlightsSection = () => {
  return (
    <section className="highlights-no-card">
      {highlights.map((item, index) => (
        <div className="highlight-block" key={index}>
          <div className="highlight-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default HighlightsSection;
