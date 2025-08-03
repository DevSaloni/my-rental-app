import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaHome } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://my-rental-app-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('rentmate_token', data.token);

        Swal.fire({
          icon: 'success',
          title: 'Login Successful 🎉',
          text: 'Welcome back to RentMate!',
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          window.location.href = '/';
        }, 2200);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: data.message || 'Invalid email or password.',
        });
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: error.message,
      });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login to UrbanDwell</h2>
        <p className="subtitle">Your home search begins here <FaHome style={{fontSize:'20px',color:'#26a69a',marginLeft:'8px'}}/></p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="login-btns">Login</button>
        </form>
        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
