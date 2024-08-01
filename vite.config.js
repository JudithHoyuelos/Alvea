import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@vendor': '/assets/vendor'
    }
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});
