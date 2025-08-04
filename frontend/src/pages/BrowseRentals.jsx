// components/BrowserRental.jsx
import React, { useEffect, useState } from 'react';
import { FaBuilding } from 'react-icons/fa';
import PropertyCard from '../components/PropertyCard'; // reuse the component
import './BrowserRental.css';

const BrowserRental = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('https://my-rental-app.onrender.com/api/properties/all-properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  // Group properties by city like before
  const groupedByCity = properties.reduce((acc, property) => {
    const city = property.city.trim(); // Ensure no extra spaces
    if (!acc[city]) acc[city] = [];
    acc[city].push(property);
    return acc;
  }, {});

  return (
    <div>
      <header className="rental-header">
        <h1><FaBuilding /> Browse Available Rentals</h1>
        <p>Select your city and find the best rental that fits your lifestyle.</p>
      </header>

      {Object.entries(groupedByCity).map(([city, cityProperties]) => (
        <section className="city-section" key={city}>
          <h2>{city}</h2>
          <div className="card-slider">
            {cityProperties.map((property) => (
              <div className="rental-card" key={property._id}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default BrowserRental;
