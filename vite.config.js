import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// VITE_BASE define a subpasta do deploy (GitHub Pages: /portifolio-fatec/). Em dev e em
// domínio próprio/Vercel/Netlify, o padrão "/" é o correto.
export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
});
