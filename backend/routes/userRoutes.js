import express from "express";

// controllers
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrnetUserProfile,
} from "../controllers/userController.js";

// middlewares

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("https://movie-app-roan-zeta.vercel.app/")
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUsers);

router.post("https://movie-app-roan-zeta.vercel.app/auth", loginUser);

router.post("https://movie-app-roan-zeta.vercel.app/logout", logoutCurrentUser);

router
  .route("https://movie-app-roan-zeta.vercel.app/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrnetUserProfile);

export default router;
