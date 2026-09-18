import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { imagetools } from 'vite-imagetools'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff)$/i,
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
    svgr(),
  ],
})
