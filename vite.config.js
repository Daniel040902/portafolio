/**
 * Vite Configuration
 * 
 * Plugins:
 * - @vitejs/plugin-react  →  Soporte JSX/React
 * - @tailwindcss/vite     →  Compilación de Tailwind CSS v4
 * 
 * Base: '/portafolio/' para despliegue en GitHub Pages
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portafolio/',
})