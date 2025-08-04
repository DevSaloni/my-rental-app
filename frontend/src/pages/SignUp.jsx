import React, { useState } from "react";
import Swal from 'sweetalert2';
import "./Signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
      });
      return;
    }

    try {
      const response = await fetch('https://my-rental-app.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Signup response:", response);
      console.log("Returned data:", data);

      if (response.status === 201) {
        // Save token
        localStorage.setItem('rentmate_token', data.token);

        // Show success popup
        Swal.fire({
          icon: 'success',
          title: 'Signup Successful 🎉',
          text: 'Welcome to RentMate!',
          confirmButtonText: 'Continue'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Signup Failed',
          text: data.message || 'Unexpected error occurred',
        });
      }

    } catch (error) {
      console.error("Signup Error:", error.message);
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: error.message || 'Something went wrong!',
      });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create Your Account</h2>
        <p className="form-subtitle">Join RentMate and find your perfect rental home today!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-btns">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>

    </div>
  );
};

export default SignUp;
