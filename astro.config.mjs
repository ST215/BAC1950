import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const PRIORITIES = {
  '/': 1.0,
  '/fraternity/': 0.8,
  '/chapter/': 0.8,
  '/programs/': 0.8,
  '/membership/': 0.8,
  '/contact/': 0.8,
  '/fraternity/history/': 0.7,
  '/fraternity/founders/': 0.7,
  '/fraternity/leadership/': 0.7,
  '/chapter/history/': 0.7,
  '/chapter/leadership/': 0.7,
  '/chapter/past-polemarchs/': 0.7,
  '/chapter/senior-kappa-brothers/': 0.7,
  '/chapter/undergraduate-chapters/': 0.7,
  '/programs/kappa-league/': 0.7,
  '/programs/cuts-and-curls/': 0.7,
  '/membership/reclamation/': 0.6,
  '/news/': 0.6,
  '/recognition/boston-citation-2026/': 0.6,
  '/privacy-policy/': 0.3,
};

export default defineConfig({
  site: 'https://bac1950.pages.dev',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      serialize(item) {
        const path = new URL(item.url).pathname;
        return { ...item, priority: PRIORITIES[path] ?? 0.5 };
      },
    }),
  ],
});
