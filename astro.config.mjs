import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import mdx from "@astrojs/mdx"
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: 'https://setta.dev',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    domains: ['setta.dev'],
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [
    tailwind(), 
    sitemap(), 
    prefetch(), 
    mdx(),
    robotsTxt(),
  ],
  redirects:{
  },
  vite: {
    plugins: [
      {
        name: 'image-optimization',
        enforce: 'post',
        apply: 'build',
        transformIndexHtml(html) {
          return html.replace(/src="([^"]+)"/g, (match, url) => {
            if (url.includes('/_astro/')) {
              return match;
            }
            const fileName = url.split('/').pop().split('.')[0];
            return `src="/_astro/${fileName}.webp"`;
          });
        }
      },
    ],
  },
  content: {
    sources: ['src/content'],
    collections: {
      blog: {},
      articles: {},
      topics: {},
    },
  },
});