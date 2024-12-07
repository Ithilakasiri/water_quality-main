import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig(() => {
  return {
    base: '/water_quality-main/',
    plugins: [react()],
    build: {
      chunkSizeWarningLimit: 3600,
    },
    optimizeDeps: {
      exclude: ['pyodide.asm.js'], 
    },
  }
});
