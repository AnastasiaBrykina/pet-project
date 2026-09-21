import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { imagetools } from 'vite-imagetools'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import browserslistToEsbuild from 'browserslist-to-esbuild'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: browserslistToEsbuild(),
    rolldownOptions: {
      output: {
        minify: {
          compress: { dropConsole: true },
        },
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
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
