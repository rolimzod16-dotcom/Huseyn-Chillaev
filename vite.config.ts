import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Allow hosts for consistency (useful if dev server is ever accessed remotely)
    allowedHosts: true,
  },
  preview: {
    port: 4173,
    host: true,
    // Allow all hosts so the preview server works on:
    // - huseyn-chillaev.onrender.com (current Render URL)
    // - Any future custom domains (e.g. your own domain pointed at Render)
    // This is required when using `npm start` (vite preview) on platforms like Render.
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
