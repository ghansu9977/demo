import express from 'express';
import { createContact, getContacts, getContactById ,deleteContact} from '../controller/contact-us.controller.js';

const router = express.Router();

// CRUD routes for Contact
router.post('/add-contact', createContact);
router.get('/contacts', getContacts);
router.get('/contacts/:id', getContactById);

export default router;
