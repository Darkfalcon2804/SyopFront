import express from "express"
import { contactFormHandler } from "../controllers/contactForm.controller.js"
import { protect } from "../middleware/Auth.middleware.js"

const router = express.Router();

router.post("/", protect, contactFormHandler);

export default router;