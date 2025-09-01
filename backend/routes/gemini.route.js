import express from "express"
const router = express.Router();
import { geminiAPIHandler } from "../controllers/gemini.controller.js";
import { protect } from "../middleware/Auth.middleware.js";

router.post("/generate" ,protect, geminiAPIHandler);

export default router;