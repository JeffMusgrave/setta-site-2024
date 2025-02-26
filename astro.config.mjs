import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://setta.dev',
  integrations: [
    mdx({
      // Optional: Configure MDX options
      extendMarkdownConfig: true,
      optimize: true,
    }),
    tailwind(),
    sitemap(),
    prefetch(),
    robotsTxt()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  image: {
    // Configure built-in image service
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    // Optional: Configure default dimensions for images
    defaultDimensions: { width: 1200, height: 630 },
  },

});