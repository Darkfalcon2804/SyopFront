import express from "express";
import { registerUser, loginUser, profile, refreshTokenHandle } from "../controllers/user.controller.js";
import { protect }  from "../middleware/Auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, profile);
router.post("/refresh-token", refreshTokenHandle);

export default router;
