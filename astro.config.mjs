// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://abdullahsayketportfolio.netlify.app",
  trailingSlash: "always", // Helps with GitHub Pages routing
  build: {
    format: "directory", // Ensures /work becomes /work/index.html
  },
  output: "static",
});
