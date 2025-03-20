import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404-html',
      writeBundle() {
        // Copy 404.html from public to dist
        if (fs.existsSync('public/404.html')) {
          fs.copyFileSync('public/404.html', 'dist/404.html')
        }
      },
    },
  ],
  base: '/optician_trainer/',
})
