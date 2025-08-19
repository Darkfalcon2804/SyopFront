import express from "express"
const router = express.Router();
import { geminiAPIHandler } from "../controllers/gemini.controller.js";

router.post("/generate" , geminiAPIHandler);

export default router;