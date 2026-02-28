import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arepaswithfriends.com',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  vite: {
    define: {
      'import.meta.env.MAINTENANCE_MODE': JSON.stringify(process.env.MAINTENANCE_MODE ?? 'false'),
      'import.meta.env.WHATSAPP_NUMBER': JSON.stringify(process.env.WHATSAPP_NUMBER ?? ''),
      'import.meta.env.INSTAGRAM_URL': JSON.stringify(process.env.INSTAGRAM_URL ?? ''),
      'import.meta.env.FORM_ENDPOINT': JSON.stringify(process.env.FORM_ENDPOINT ?? ''),
    },
  },
});
