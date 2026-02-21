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
      CLERK_SECRET_KEY: envField.string({ context: "server", access: "secret", optional: true }),
      SANITY_TOKEN: envField.string({ context: "server", access: "secret", optional: true }),
      SANITY_DATASET: envField.string({ context: "client", access: "public", optional: true }),
      SANITY_PROJECT_ID: envField.string({ context: "client", access: "public", optional: true }),
      SIGNING_SECRET: envField.string({ context: "server", access: "secret", optional: true }),
      STRIPE_SECRET_KEY: envField.string({ context: "server", access: "secret", optional: true }), //usar culqi
      STRIPE_WEBHOOK_SECRET: envField.string({ context: "server", access: "secret", optional: true }), //usar culqi
      PUBLIC_DOMAIN_URL: envField.string({ context: "client", access: "public", optional: true }),
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
      plugins: [tailwindcss()],
      optimizeDeps: {
        force: true,
        exclude: ['@clerk/astro', '@sanity/astro'],
        include: [
          'sanity',
          'sanity/desk',
          'sanity/structure',
          'sanity/presentation',
          '@sanity/vision',
          '@sanity/client',
          '@sanity/ui',
          '@sanity/icons',
          'void-elements',
          'prop-types',
          'debug',
          'lodash',
        ],
      }
    },

  adapter: netlify(),
  output: 'server'
});