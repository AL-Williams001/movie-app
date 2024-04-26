import express, { Router } from "express";

const router = express.Router();

// Controllers

import {
  createMovie,
  getAllMovies,
  getSpecificMovie,
  updateMovie,
  movieReview,
  deleteMovie,
  deleteComment,
  getNewMovies,
} from "../controllers/movieController.js";

// Middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import checkId from "../middlewares/checkId.js";

// Public Routes

router.get("https://movie-app-roan-zeta.vercel.app/all-movies", getAllMovies);
router.get(
  "https://movie-app-roan-zeta.vercel.app/specific-movie/:id",
  getSpecificMovie
);
router.get("https://movie-app-roan-zeta.vercel.app/new-movies", getNewMovies);

// Restricted Routes
router.post(
  "https://movie-app-roan-zeta.vercel.app/:id/reviews",
  authenticate,
  checkId,
  movieReview
);

// Admin
router.post(
  "https://movie-app-roan-zeta.vercel.app/create-movie",
  authenticate,
  authorizeAdmin,
  createMovie
);
router.put(
  "https://movie-app-roan-zeta.vercel.app/update-movie/:id",
  authenticate,
  authorizeAdmin,
  updateMovie
);
router.delete(
  "https://movie-app-roan-zeta.vercel.app/delete-movie/:id",
  authenticate,
  authorizeAdmin,
  deleteMovie
);
router.delete(
  "https://movie-app-roan-zeta.vercel.app/delete-comment",
  authenticate,
  authorizeAdmin,
  deleteComment
);

export default router;
