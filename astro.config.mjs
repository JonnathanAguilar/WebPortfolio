import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jonnathanaguilar.netlify.app',
  trailingSlash: 'always',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});