import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// GitHub Pages project site: https://louishuidev.github.io/aif-c01-label-practice/
// Local preview: open http://localhost:5173/aif-c01-label-practice/
export default defineConfig({
  plugins: [react()],
  base: "/aif-c01-label-practice/",
  server: {
    port: 5173,
    strictPort: false,
  },
  preview: {
    port: 4173,
    strictPort: false,
  },
});
