
import express from 'express';
import multer from 'multer';
import { addfood,listfood,removeFood } from '../controller/foodcontroller.js'; // assuming addfood is in foodcontroller.js

const router = express.Router();

// Set up Multer (make sure this matches what you are using)
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Apply Multer middleware to the route that handles file upload
router.post('/add', upload.single('image'), addfood);
router.get('/list',listfood)
router.post('/remove',removeFood)

export default router;
