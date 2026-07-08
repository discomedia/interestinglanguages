/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PAYLOAD_PUBLIC_API_URL?: string;
  readonly PUBLIC_SITE_URL?: string;
  readonly NEXT_PUBLIC_APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
