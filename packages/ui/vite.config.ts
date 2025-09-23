import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   lib: {
  //     entry: "src/main.tsx",
  //     name: "NivaUI",
  //     fileName: (format) => `index.${format}.js`,
  //     formats: ["es", "umd"],
  //   },
  //   rollupOptions: {
  //     external: ["react", "react-dom"],
  //     output: {
  //       globals: {
  //         react: "React",
  //         "react-dom": "ReactDOM",
  //       },
  //     },
  //   },
  // },
});
