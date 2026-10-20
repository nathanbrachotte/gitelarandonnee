import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://gitelarandonnee.fr",
  output: "hybrid",
  integrations: [
    sitemap({
      filter: (page) =>
        !["/activites/", "/avis/", "/404/"].some((path) => page.endsWith(path)),
      lastmod: new Date(),
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
