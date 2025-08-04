import React, { useState } from 'react';
import Swal from 'sweetalert2'; 
import './ListPropertyForm.css';

const sampleImages = [
  '/sample-image/livingroom.jpeg',
  '/sample-image/bedroom.jpeg',
  '/sample-image/balconies.jpeg',
  '/sample-image/bathroom.jpeg',
];

const ListPropertyForm = () => {
  const [formData, setFormData] = useState({
    title:'',
    ownerName: '',
    email: '',
    phone: '',
    propertyType: '',
    city: '',
    rent: '',
    availableFrom: '',
    description:'',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUploadChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSampleSelect = (imgUrl) => {
    setImagePreview(imgUrl);
    setImageFile(null); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();

    // Add fields
    for (let key in formData) {
      payload.append(key, formData[key]);
    }

    // Add image
    if (imageFile) {
      payload.append('image', imageFile);
    }

    try {
      const res = await fetch('https://my-rental-app.onrender.com/api/properties/property-add', {
        method: 'POST',
        body: payload,
      });

      const result = await res.json();

      if (res.ok) {
        Swal.fire('Success', 'Property listed successfully!', 'success');
        setFormData({
          title:'',
          ownerName: '',
          email: '',
          phone: '',
          propertyType: '',
          city: '',
          rent: '',
          availableFrom: '',
          description:'',
        });
        setImagePreview(null);
        setImageFile(null);
      } else {
        Swal.fire('Error', result.message || 'Something went wrong!', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Server not reachable!', 'error');
    }
  };

  return (
    <div className="property-form-container">
      <h2>List Your Property</h2>

      <div className="form-wrapper">
        <form className="property-form" onSubmit={handleSubmit}>
          <label>Title(for card display)</label>
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder='ex:1 BHK in Andheri for Rent
' required />

          <label>Owner Name</label>
          <input type="text" name="ownerName" value={formData.ownerName} onChange={handleInputChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

          <label>Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required />

          <label>Property Type</label>
          <select name="propertyType" value={formData.propertyType} onChange={handleInputChange} required>
            <option value="">Select</option>
            <option value="flat">Flat</option>
            <option value="1RK">1RK</option>
            <option value="PG">PG</option>
          </select>

          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />

          <label>Monthly Rent (₹)</label>
          <input type="number" name="rent" value={formData.rent} onChange={handleInputChange} required />

          <label>Available From</label>
          <input type="date" name="availableFrom" value={formData.availableFrom} onChange={handleInputChange} required />
          
          <label>Description</label>
          <textarea name="description" className='des' value={formData.description} onChange={handleInputChange} rows="4" required />
          
          <label>Upload Property Image</label>
          <input type="file" accept="image/*" onChange={handleUploadChange} />

          <button type="submit" className="submit-btn">Submit Listing</button>
        </form>

        {/* Image Preview */}
        <div className="image-preview">
          {imagePreview ? (
            <img src={imagePreview} alt="Property Preview" />
          ) : (
            <div className="placeholder">📸 Property Image Preview</div>
          )}

          <div className="sample-gallery">
            <p>Or choose from sample images:</p>
            <div className="sample-images">
              {sampleImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Sample ${index + 1}`}
                  onClick={() => handleSampleSelect(img)}
                  className="sample-thumb"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPropertyForm;
