import express from "express";
import { register,registerMultipleUsers,signIn } from "../controller/user.controller.js";
import auth from '../middleware/auth.js';

const router = express.Router();

router.post("/register", register);
router.post("/signIn", signIn);
router.post("/add-user-in-bulk",registerMultipleUsers)
export default router;
