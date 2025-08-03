import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  // Use property.image directly since backend saves full URL
  const imageUrl = property.image ? property.image : '/default-image.jpg';

  return (
    <div className="property-card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="card-overlay">
          <div className="property-infos">
            <h3>{property.title}</h3>
            <p>{property.city} • {property.propertyType}</p>
            <p className="prices">₹{property.rent}/month</p>
            <Link to={`/property/${property._id}`}>
              <button className="view-btn">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
