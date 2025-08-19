import express from "express"
import { userJournalData } from "../controllers/journalForm.controller.js";
import { protect } from "../middleware/Auth.middleware.js";
const router = express.Router();


router.post("/", protect, userJournalData);

export default router;