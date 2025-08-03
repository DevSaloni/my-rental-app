import React from 'react';
import './Navbar.css';
import{FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-section logo-section">
        <div className="logo"><FaHome style={{marginRight:'2px',fontSize:'30px'}}/>UrbanDwell</div>
      </div>

      {/* Middle Navigation */}
      <div className="navbar-section middle-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/homes" className="nav-link">Browse Rentals</Link>
        <Link to="/list-property" className="nav-link">List Property</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>

      {/* Right Side - Auth */}
      <div className="navbar-section auth-buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
