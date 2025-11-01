import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "#base": path.resolve(__dirname, "../base/src"),
      "#components": path.resolve(__dirname, "../ui/src/components"),
      "#ui": path.resolve(__dirname, "../ui/src"),
      "#shared": path.resolve(__dirname, "../shared/src"),
      "#admin": path.resolve(__dirname, "./src"),
    },
  },
});
