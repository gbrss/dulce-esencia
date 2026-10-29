import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dulceesencia.cl',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  // Optimización de build para sitios estáticos
  build: {
    inlineStylesheets: 'auto', // Inyecta CSS pequeño en el HTML para evitar peticiones extra
  },
});