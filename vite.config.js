import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extends: {},
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
