import React, { useState, useEffect } from 'react';
import HeroSection from "../components/HeroSection";
import AdvancedSearchBar from '../components/AdvancedSearchBar';
import PropertyCard from '../components/PropertyCard';
import FeaturePanel from '../components/FeaturePanel';
import HighlightsSection from "../components/HighlightsSection";
import HostCTASection from "../components/HostCTASection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from '../components/Footer';

import './Home.css';

const Home = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // 👈 New state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:2010/api/properties/all-properties');
        const data = await res.json();
        setAllProperties(data);
      } catch (err) {
        console.error('Error fetching properties:', err);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (filters) => {
    const result = allProperties.filter((prop) => {
      const matchesCity =
        !filters.city || prop.city.toLowerCase() === filters.city.toLowerCase();

      const matchesType =
        !filters.type || prop.propertyType.toLowerCase() === filters.type.toLowerCase();

      const matchesBudget =
        !filters.budget || parseInt(prop.rent) <= parseInt(filters.budget);

      const matchesDate =
        !filters.date || new Date(prop.availableFrom) <= new Date(filters.date);

      return matchesCity && matchesType && matchesBudget && matchesDate;
    });

    setFilteredProperties(result);
    setHasSearched(true); // ✅ Set search as performed
  };

  return (
    <>
      <HeroSection />
      <AdvancedSearchBar onSearch={handleSearch} />
      <div className="property-row" style={{ padding: '1rem' }}>
        {!hasSearched ? (
          <p className='message-box'>
            Please use the search bar to find properties.
          </p>
        ) : filteredProperties.length === 0 ? (
          <p className='message-box'>
            No properties found matching your criteria.
          </p>
        ) : (
          filteredProperties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        )}
      </div>
      <TestimonialsSection />
      <HighlightsSection />
      <FeaturePanel />
      <HostCTASection />
      <Footer />
    </>
  );
};

export default Home;
