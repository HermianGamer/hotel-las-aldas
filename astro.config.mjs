// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import clerk from '@clerk/astro'

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  server:{
      port: 3000
  },

  integrations: [react(), clerk()],

  devToolbar:{
      enabled: false
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify(),
  output: 'server'
});