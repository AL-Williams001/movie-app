// vite.config.js

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api/": "http://localhost:3000",
      "/uploads/": "http://localhost:3000",
    },
  },

  build: {
    outDir: "build", // Specify the output directory here
  },
});
