import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

// Files
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import genreRoutes from "./routes/genreRoutes.js";
import movieRoutes from "./routes/moviesRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

// Config
dotenv.config();
connectDB();

const app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

// Routes
app.use("https://movie-app-roan-zeta.vercel.app/api/users", userRoutes);
app.use("https://movie-app-roan-zeta.vercel.app/api/genre", genreRoutes);
app.use("https://movie-app-roan-zeta.vercel.app/api/movies", movieRoutes);
app.use("https://movie-app-roan-zeta.vercel.app/api/upload", uploadRoutes);

const __dirname = path.resolve();
app.use(
  "https://movie-app-roan-zeta.vercel.app/api/upload",
  express.static(
    path.join(__dirname, "https://movie-app-roan-zeta.vercel.app/api/upload")
  )
);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
