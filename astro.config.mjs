import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  integrations: [mdx(), sitemap(), tailwind(), vue()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    routing: {
        prefixDefaultLocale: false
    },
  },
});