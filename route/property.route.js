import express from 'express';
import auth from '../middleware/auth.js';
import { createProperty, getAllProperties, markAsFavorite, getFavorites, searchProperties, deleteProperty, createMultipleProperties, addProperty, viewPropertyOfParticularUser } from '../controller/property.controller.js';

const router = express.Router();

router.post("/createProperty", createProperty);

router.post("/add-property", addProperty);
router.get("/viewProperties", getAllProperties);
router.get("/search", auth, searchProperties);
router.post("/favorite/:id",  markAsFavorite);
router.get("/viewFavourites",auth, getFavorites);
router.delete("/deleteProperty/:id", auth, deleteProperty);     
router.post("/add-property-in-bulk",createMultipleProperties);
router.post("/view-property-of-user",viewPropertyOfParticularUser)
export default router;