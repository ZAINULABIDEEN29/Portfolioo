// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Portfolioo/',
  css: {
    preprocessorOptions: {
      scss: {
  // additionalData removed to prevent recursive import loop
      }
    }
  }
})