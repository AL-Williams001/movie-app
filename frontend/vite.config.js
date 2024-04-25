// vite.config.js

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api/": "https://movie-h9q8o5gvd-al-williams-s-projects.vercel.app",
      "/uploads/": "https://movie-h9q8o5gvd-al-williams-s-projects.vercel.app",
    },
  },

  build: {
    outDir: "build", // Specify the output directory here
  },
});
