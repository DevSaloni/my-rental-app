import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

import cors from 'cors';
import dotenv from 'dotenv';

// /routes
import authRoutes from './routes/authRoutes.js';
import contactRoute from "./routes/contactRoutes.js";
import propertyRoute from "./routes/propertyRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//routes
app.use('/api/auth', authRoutes);
app.use('/api', contactRoute);
app.use('/api/properties', propertyRoute);

const PORT = process.env.PORT || 2010;
mongoose.connect("mongodb://127.0.0.1:27017/rentmate",{
useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("mongodb connect successfully");
}).catch(err => console.log(err));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
