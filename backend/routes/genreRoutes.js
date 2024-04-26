import express from "express";

const router = express.Router();

// Controllers
import {
  createGenre,
  updateGenre,
  removeGenre,
  listGenres,
  readGenre,
} from "../controllers/genreController.js";

// Middlewares

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
router
  .route("https://movie-app-roan-zeta.vercel.app/")
  .post(authenticate, authorizeAdmin, createGenre);
router
  .route("https://movie-app-roan-zeta.vercel.app/:id")
  .put(authenticate, authorizeAdmin, updateGenre);
router
  .route("https://movie-app-roan-zeta.vercel.app/:id")
  .delete(authenticate, authorizeAdmin, removeGenre);
router
  .route("https://movie-app-roan-zeta.vercel.app/allgenres")
  .get(listGenres);
router.route("https://movie-app-roan-zeta.vercel.app/:id").get(readGenre);

export default router;
