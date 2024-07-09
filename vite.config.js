import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 10000,
    proxy:{
      '/api':{
        target:'https://twitter-client-ivfp.onrender.com',
        changeOrigin: true,
      }
    }
  }
})
