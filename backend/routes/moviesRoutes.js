import express, { Router } from "express";

const router = express.Router();

// Controllers

import {
  createMovie,
  getAllMovies,
  getSpecificMovie,
  updateMovie,
} from "../controllers/movieController.js";

// Middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import checkId from "../middlewares/checkId.js";

// Public Routes

router.get("/all-movies", getAllMovies);
router.get("/specific-movie/:id", getSpecificMovie);

// Restricted Routes
// Admin
router.post("/create-movie", authenticate, authorizeAdmin, createMovie);
router.put("/update-movie/:id", authenticate, authorizeAdmin, updateMovie);

export default router;
