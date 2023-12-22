import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],

  css: {
    modules: {
      generateScopedName: "[name]_[local]_[hash:base64:5]",
    },
    preprocessorOptions: {
      less: {
        math: "always",
      },
    },
    postcss: {
      plugins: [tailwindcss, autoprefixer()],
    },
  },
});
