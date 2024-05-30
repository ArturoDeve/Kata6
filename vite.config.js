import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // añado el path para poder saber la ruta
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // configuro alias para mis carpetas con @
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, 'src/component'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hook': path.resolve(__dirname, 'src/hook'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@ejemplo': path.resolve(__dirname, 'src/ejemplo')







    }
  }
})