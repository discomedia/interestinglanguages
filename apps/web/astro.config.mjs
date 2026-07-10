import react from "@astrojs/react";
import { defineConfig } from "astro/config";

const site = process.env.PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3081";

export default defineConfig({
  site,
  integrations: [react()],
  output: "static"
});
