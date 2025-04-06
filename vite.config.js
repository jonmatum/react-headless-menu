import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "ReactHeadlessMenu",
      fileName: (format) => `react-headless-menu.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "@headlessui/react", "lucide-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@headlessui/react": "HeadlessUI",
          "lucide-react": "LucideReact",
        },
      },
    },
  },
});
