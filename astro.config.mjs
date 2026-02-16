// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import clerk from '@clerk/astro'
import sanity from '@sanity/astro'
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  server:{
      port: 3000
  },

  env: {
    schema: {
      PUBLIC_CLERK_PUBLISHABLE_KEY: envField.string({ context: "client", access: "public", optional: true }),
      CLERK_SECRET_KEY: envField.string({ context: "client", access: "public", optional: true }),
    }
  },

  integrations: [react(), clerk(), sanity({
      projectId: 'iuu4f520',
      dataset: 'production',
      studioBasePath: '/admin',
      useCdn: false,
    }),],

  devToolbar:{
      enabled: false
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify(),
  output: 'server'
});