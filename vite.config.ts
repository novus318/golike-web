import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
    host: '0.0.0.0', // Ensure the server is accessible on all interfaces
    port: 3000, // Use the PORT environment variable or default to 3000
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
