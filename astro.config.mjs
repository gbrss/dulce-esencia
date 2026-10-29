import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

adapter: cloudflare({ imageService: 'compile' })

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
});
