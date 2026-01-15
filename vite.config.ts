import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Abre o Chrome no Windows, macOS e Linux
    open: 'chrome' 
  }
})
