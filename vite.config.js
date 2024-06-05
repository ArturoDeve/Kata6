import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path' // añado el path para poder saber la ruta
// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/Components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hook': path.resolve(__dirname, 'src/Hook'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/Routes'),
      '@services': path.resolve(__dirname, 'src/Services'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  }
})