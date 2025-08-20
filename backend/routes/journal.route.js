import express from "express"
import { userJournalData } from "../controllers/journalForm.controller.js";
import { userJournalActivaty } from "../controllers/journalForm.controller.js";
import { protect } from "../middleware/Auth.middleware.js";
const router = express.Router();


router.post("/", protect, userJournalData);
router.get("/recent-activity", protect, userJournalActivaty);

export default router;