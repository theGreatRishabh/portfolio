import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const isGitHubPages = process.env.GITHUB_PAGES === "true";

  return {
    base: isGitHubPages ? "/portfolio/" : "/", // ✅ only one base
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // better to alias src instead of root
      },
    },
  };
});
