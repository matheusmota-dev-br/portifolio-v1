import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Publicado no GitHub Pages em /portifolio-v1/.
export default defineConfig({
  base: "/portifolio-v1/",
  plugins: [react()],
});
