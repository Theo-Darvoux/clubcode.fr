import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://clubcode.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr', en: 'en' },
      },
    }),
  ],
  server: {
    allowedHosts: true,
  },
});
