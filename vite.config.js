import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Optional: Add base URL if deploying to subdirectory
  // base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    // For local development with history API fallback
    historyApiFallback: true,
  }
})