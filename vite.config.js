import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable globals like `describe` and `it`
    environment: 'jsdom', // Vitest's JSDOM environment for components
    setupFiles: './vitest.setup.js', // Optional, if you need further setup
  },
});
