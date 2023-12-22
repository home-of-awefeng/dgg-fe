import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postCssPxToRem from "postcss-pxtorem";
import { DEFAULT_DOCUMENT_REM_FONT_SIZE } from "./config/index";

import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "#": path.resolve(__dirname, "config"),
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
      plugins: [
        tailwindcss(),
        autoprefixer(),
        postCssPxToRem({
          rootValue: DEFAULT_DOCUMENT_REM_FONT_SIZE,
          unitPrecision: 5, // 小数点
          propList: ["*"], // 所有的px都转换
          selectorBlackList: [], //需要忽略的选择器
          replace: true,
          exclude: /node_modules/i,
        }),
      ],
    },
  },
});
