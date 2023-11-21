import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { ViteAliases } from 'vite-aliases';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    viteCommonjs(),
    ViteAliases(),
    istanbul({
      include: 'src',
      exclude: ['node_modules', 'test'],
      extension: ['.js', '.ts', '.jsx', '.tsx'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
