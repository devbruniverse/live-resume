import tailwindcss from '@tailwindcss/vite';
import { AliasOptions, defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss(), TanStackRouterVite(), tsconfigPaths()],
  build: {
    cssMinify: true,
    ssr: false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    } as AliasOptions
  }
});
