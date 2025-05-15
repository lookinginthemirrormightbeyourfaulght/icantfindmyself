import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
    assetsDir: "assets",
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.mp3", "**/*.png", "**/*.jpg"],
});
