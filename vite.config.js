import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // Intercepta todo lo que empiece con /api
      '/api': {
        target: 'http://54.89.220.240:8000',
        changeOrigin: true,
      }
    }
  }
})