import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // ✅ This makes "@/lib/utils" work
    }
  },
  server: {
    host: true,
    port: 3000,
    hmr: {
      clientPort: 3000
    }
  }
})
