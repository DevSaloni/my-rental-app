import express from 'express';
import multer from 'multer';
import { addProperty ,getAllProperties,getAllPropertiesByID} from '../controllers/propertyController.js';

const router = express.Router();

// Image upload setup using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// POST route to add property
router.post('/property-add', upload.single('image'), addProperty);
router.get('/all-properties', getAllProperties); 
router.get('/property/:id',getAllPropertiesByID);
export default router;
