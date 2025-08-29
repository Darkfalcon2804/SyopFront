import express from "express"
import { storeFeedback } from "../controllers/feedback.controller.js";
import {protect} from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/", protect, storeFeedback);

export default router;