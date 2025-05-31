import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0', // Cho phép truy cập từ domain bên ngoài
    port: 5177,       // Hoặc cổng khác nếu bạn muốn
    strictPort: true,
    origin: 'https://webvibe.wisdombrain.org',
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
})
