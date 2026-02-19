import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Intercepta todo lo que empiece con /api
      '/api': {
        target: 'http://100.26.218.45:8000', // Reemplaza con tu IP actual
        changeOrigin: true,
      }
    }
  }
})
