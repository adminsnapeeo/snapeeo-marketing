import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Admin panel — local port 5175; production: admin.{domain} */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5175,
    host: true,
    strictPort: false,
  },
  preview: {
    port: 5175,
    host: true,
    strictPort: false,
  },
})
