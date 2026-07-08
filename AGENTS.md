# Interesting Languages Agent Guide

This file is part of the operating contract for the repo. Keep it current whenever architecture, commands, deployment behavior, schemas, env vars, or component conventions change.

## Architecture

This is an npm-workspace monorepo.

- `apps/web`: Astro public site with React islands. It is deployed to Netlify and should run locally on `localhost:3081`.
- `apps/admin`: Payload CMS admin/API app. It is deployed to Railway at `admin.interestinglanguages.com` and should run locally on `localhost:3082`.
- `packages/content`: shared content types, normalizers, seed data, and validation helpers used by both apps.

The public site treats Payload as the content API boundary. Do not query Payload's database tables directly from `apps/web`; fetch normalized published content from the Payload public endpoints or use the local seed fallback for offline builds.

## Commands

- Install: `npm install`
- Public site dev: `npm run dev:web`
- Admin dev: `npm run dev:admin`
- Full build: `npm run build`
- Public-only build: `npm run build:web`
- Admin-only build: `npm run build:admin`
- Typecheck: `npm run typecheck`
- Lint/check: `npm run lint`
- Seed Swahili content: `npm run seed:swahili`
- Validate content fixtures: `npm run content:validate`

## Env Vars

- `NEON_CONNECTION_STRING`: Neon Postgres connection string for Payload.
- `PUBLIC_SITE_URL`: public canonical URL. Use `http://localhost:3081` locally and `https://interestinglanguages.com` in production.
- `PAYLOAD_PUBLIC_API_URL`: base URL for public content API, e.g. `http://localhost:3082/api/public`.
- `PAYLOAD_ADMIN_URL`: admin origin, e.g. `http://localhost:3082` locally and `https://admin.interestinglanguages.com` in production.
- `PAYLOAD_SECRET`: required by Payload.
- `PAYLOAD_UPLOADS_DIR`: upload directory for Payload media. On Railway this should point at the mounted volume path.
- `NETLIFY_BUILD_HOOK_URL`: optional hook called when a guide is published.
- `NEXT_PUBLIC_APP_URL`: retained only for compatibility. Prefer `PUBLIC_SITE_URL`.

Never expose `NEON_CONNECTION_STRING` or `PAYLOAD_SECRET` to client code.

## Content Model

Payload's `language-guides` collection owns the public language guide content. A guide should include:

- Slug, name, autonym, status, publication date, summary, and hero details.
- Learner overview, pronunciation, script, grammar, where spoken, learning difficulty, and cultural notes.
- Starter phrases, learning resources, related languages, and sources.
- SEO title, SEO description, and optional social image.

Payload exposes normalized published-only content through:

- `GET /api/public/language-guides`
- `GET /api/public/language-guides/:slug`

The response shape must match `packages/content`.

## Public Components

Use Astro for static layout and React only for interactive islands. Components should be small and content-driven:

- Static page structure, SEO, and article sections belong in Astro.
- Search, filters, expandable panels, and media controls may be React islands.
- Keep guide pages fast by avoiding client data fetching for content that can be rendered at build time.
- Keep visible copy in content data wherever possible; do not hard-code guide facts inside visual components.
- Use the global design tokens in `apps/web/src/styles/global.css` before adding one-off colors or spacing.

The public design system is clean editorial: true white background, deep ink text, restrained teal links/icons, saffron primary action, thin dividers, compact cards, and readable long-form typography.

## Deployment Notes

Netlify builds from the repo root with `npm run build:web` and publishes `apps/web/dist`.

Railway builds the admin app with `npm run build:admin` and starts it with `npm run start --workspace @interesting-languages/admin`. Configure Railway env vars for Neon, Payload secret, site URLs, upload volume path, and the Netlify build hook.

Payload media uses local/Railway volume storage in v1. If media grows or multiple admin instances are needed, migrate uploads to S3-compatible storage such as Cloudflare R2 and update this file.

## Maintenance Requirement

When changing any of the following, update this file in the same PR/commit:

- Workspace structure or app boundaries.
- Local development commands or required ports.
- Build, test, deploy, or seed commands.
- Env vars or secret handling.
- Payload collections, public API response shapes, or content workflow.
- Frontend component conventions, design tokens, or routing.
