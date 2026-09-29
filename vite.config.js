import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Keep the CRA output folder so `npm run deploy` (gh-pages -d build) is unchanged.
  build: { outDir: 'build' },
})
