import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api/": "https://movie-app-roan-zeta.vercel.app",
      "/uploads/": "https://movie-app-roan-zeta.vercel.app",
    },
  },

  build: {
    outDir: "build",
  },
});
