import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { type Plugin } from "vite";
import Critters from "critters";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Critical CSS extraction plugin
function criticalCSSPlugin(): Plugin {
  return {
    name: 'vite-plugin-critical-css',
    apply: 'build',
    async closeBundle() {
      const critters = new Critters({
        path: path.resolve(__dirname, 'dist'),
        logLevel: 'info',
        pruneSource: false, // Keep original CSS for progressive enhancement
        inlineThreshold: 0, // Inline all critical CSS
      });

      const indexPath = path.resolve(__dirname, 'dist', 'index.html');
      const fs = await import('fs/promises');
      const html = await fs.readFile(indexPath, 'utf-8');
      const inlinedHtml = await critters.process(html);
      await fs.writeFile(indexPath, inlinedHtml);
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    criticalCSSPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  envDir: path.resolve(__dirname), // Load .env from project root
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    cssCodeSplit: true,
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React ecosystem
          'vendor-react': ['react', 'react-dom', 'react-hook-form'],
          // Vendor chunk for UI libraries
          'vendor-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-label',
            '@radix-ui/react-slot',
            '@radix-ui/react-toast',
          ],
          // Vendor chunk for routing and forms
          'vendor-utils': ['wouter', '@tanstack/react-query', 'zod'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
