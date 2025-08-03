import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: String,
  ownerName: String,
  email: String,
  phone: String,
  propertyType: String,
  city: String,
  rent: Number,
  availableFrom: Date,
  description:String,
  image: String, 
});

export default mongoose.model('Property', propertySchema);
