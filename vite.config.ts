import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
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
    target: 'es2020',
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
