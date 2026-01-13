import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Use esbuild instead of terser (included by default)
    rollupOptions: {
      output: {
        manualChunks: {
          'gsap': ['gsap'],
          'three': ['three']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  publicDir: 'public'
});
