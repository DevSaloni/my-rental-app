import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './AdvancedSearchBar.css';

const AdvancedSearchBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    city: '',
    date: '',
    budget: '',
    type: ''
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form className="advanced-search-container" onSubmit={handleSubmit}>
      <select name="city" value={filters.city} onChange={handleChange}>
        <option value="">Select City</option>
        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>

      <input
        type="date"
        name="date"
        value={filters.date}
        onChange={handleChange}
      />

      <input
        type="number"
        name="budget"
        value={filters.budget}
        onChange={handleChange}
        placeholder="Max Budget (₹)"
        min="1000"
      />

      <select name="type" value={filters.type} onChange={handleChange}>
        <option value="">Select Type</option>
        <option value="1RK">1RK</option>
        <option value="PG">PG</option>
        <option value="Flat">Flat</option>
      </select>

      <button className="search-btn" type="submit">
        <FaSearch /> Search
      </button>
    </form>
  );
};

export default AdvancedSearchBar;
