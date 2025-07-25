import express from "express";
import { registerUser, loginUser, profile } from "../controllers/user.controller.js";
import { protect }  from "../middleware/Auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, profile);

export default router;
