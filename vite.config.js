import { defineConfig } from "vite";
import path from "path";
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
    outDir: "dist",
    rollupOptions: {
      external: ["react", "react-dom", "@headlessui/react", "lucide-react"],
      output: {
        exports: "named",
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
