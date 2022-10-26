import preprocess from "svelte-preprocess";
import cloudflare from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: cloudflare(),
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
