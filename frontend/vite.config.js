// vite.config.js

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api/": "https://movie-app-one-hazel.vercel.app",
      "/uploads/": "https://movie-app-one-hazel.vercel.app",
    },
  },

  build: {
    outDir: "build", // Specify the output directory here
  },
});
