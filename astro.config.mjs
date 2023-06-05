import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  server: {
    port: 12230
  },
  integrations: [solidJs(), tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});