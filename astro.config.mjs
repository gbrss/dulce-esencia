import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://dulceesencia.cl',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  // Forzar explícitamente el servicio de imágenes en build
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  adapter: cloudflare({ imageService: 'compile' }),
});