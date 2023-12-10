export default defineConfig({
  plugins: [react()],
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: './index.jsx',
    },
  },
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'