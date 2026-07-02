import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Customer web app — local port 5174; production: app.{domain} */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
    host: true,
    strictPort: false,
  },
  preview: {
    port: 5174,
    host: true,
    strictPort: false,
  },
})
