import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import PropertyDetails from "./pages/PropertyDetails";
import ListPropertyForm from "./components/ListPropertyForm";
import BrowseRentals from "./pages/BrowseRentals";
import ContactSection from "./pages/ContactSection ";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/list-property" element={<ListPropertyForm />} />
        <Route path="/homes" element={<BrowseRentals />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
}

export default App;
