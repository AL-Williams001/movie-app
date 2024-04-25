// vite.config.js

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api/":
        "https://https://movie-an23dk0r5-al-williams-s-projects.vercel.app/",
      "/uploads/":
        "https://https://movie-an23dk0r5-al-williams-s-projects.vercel.app/",
    },
  },

  build: {
    outDir: "build", // Specify the output directory here
  },
});
