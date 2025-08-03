import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`https://my-rental-app-backend.onrender.com/api/properties/property/${id}`);
        if (!res.ok) throw new Error('Property not found');
        const data = await res.json();
        setProperty(data);
      } catch (err) {
        console.error(err);
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (!property) return <h2 className="error">Property Not Found</h2>;

  return (
    <div className="property-details-container">
      <div className="property-cards">
        <div className="image-section">
          <img src={property.image} alt={property.title} />
        </div>

        <div className="details-section">
          <h2 className="property-title">{property.title}</h2>
          <p className="rent">₹{property.rent}/month</p>
          <p><strong>Type:</strong> {property.propertyType}</p>
          <p><strong>City:</strong> {property.city}</p>
          <p><strong>Available From:</strong> {new Date(property.availableFrom).toLocaleDateString()}</p>
          <p><strong>Posted by:</strong> {property.ownerName}</p>
        </div>
      </div>

      <div className="extra-info">
        <div className="description-box">
          <h3>Description</h3>
          <p>{property.description}</p>
        </div>

        <div className="contact-box">
          <h3>Contact Owner</h3>
          <p><strong>Name:</strong> {property.ownerName}</p>
          <p><strong>Phone:</strong> {property.phone}</p>
          <button className="contact-btn">Request Call Back</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
