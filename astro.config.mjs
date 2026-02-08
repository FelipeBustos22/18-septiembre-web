// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://felipebustos22.github.io',
  base: '/18-septiembre-web',
  vite: {
    plugins: [tailwindcss()]
  }
});