import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/reactjsColletti/", // ⬅️ AGREGAR ESTO (nombre de tu repo)
});
