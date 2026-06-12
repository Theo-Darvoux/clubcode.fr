import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clubcode.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    preview: {
      allowedHosts: true,
    },
  },
});
