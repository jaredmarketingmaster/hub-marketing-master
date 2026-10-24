import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Rutas relativas: funciona en GitHub Pages (usuario.github.io/hub-marketing-master/)
  // y también en un dominio propio, sin cambiar nada.
  base: './',
})
