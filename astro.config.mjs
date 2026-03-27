import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jonnathanaguilar.dev',
  trailingSlash: 'always',
  output: 'static',
  vite: {
    css: {
      postcss: './postcss.config.cjs',
    },
  },
});