import tailwindcss from '@tailwindcss/vite';
import { AliasOptions, defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
// import path from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  base: process.env.BASE_URL || '/live-resume/',
  plugins: [react(), tailwindcss(), TanStackRouterVite(), tsconfigPaths()],
  build: {
    cssMinify: true,
    ssr: false
  },
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src')
      '@': fileURLToPath(new URL('./src', import.meta.url))
    } as AliasOptions
  }
});
