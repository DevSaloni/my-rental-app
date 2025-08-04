import Property from '../models/Property.js';

export const addProperty = async (req, res) => {
  try {
    const {title, ownerName, email, phone, propertyType, city, rent, availableFrom ,description} = req.body;

    // If file uploaded, create full URL, else empty string
const imagePath = req.file ? `https://my-rental-app.onrender.com/uploads/${req.file.filename}` : '';

    const newProperty = new Property({
      title,
      ownerName,
      email,
      phone,
      propertyType,
      city,
      rent,
      availableFrom,
      description,
      image: imagePath,
    });

    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all properties
export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error });
  }
};

// // GET all properties by ID
export const getAllPropertiesByID = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.status(200).json(property);
  } catch (error) {
    res.status(404).json({ message: 'Property not found' });
  }
};
