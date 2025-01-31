import tailwindcss from '@tailwindcss/vite';
import { AliasOptions, defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

export default defineConfig({
  base: import.meta.env?.BASE_URL || '/live-resume/',
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths()
  ],
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    cssMinify: true,
    ssr: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    } as AliasOptions
  }
});
