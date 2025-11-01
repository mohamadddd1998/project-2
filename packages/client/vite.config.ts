import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "#base": path.resolve(__dirname, "../core/packages/base/src"),
      "#components": path.resolve(
        __dirname,
        "../core/packages/ui/src/components"
      ),
      "#ui": path.resolve(__dirname, "../core/packages/ui/src"),
      "#shared": path.resolve(__dirname, "../core/packages/shared/src"),
      "#client": path.resolve(__dirname, "./src"),
    },
  },
});
