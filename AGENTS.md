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
- Public build forced to canonical local fixtures: `npm run build:web:fixtures` (use for editorial/browser QA before production seeding)
- Admin-only build: `npm run build:admin`
- Typecheck: `npm run typecheck`
- Lint/check: `npm run lint`
- Run admin migrations: `npm run migrate:admin`
- Check admin migration status: `npm run migrate:status:admin`
- Seed all guide content: `npm run seed:guides`
- Seed Swahili content: `npm run seed:swahili` (compatibility alias for `seed:guides`)
- Validate content fixtures: `npm run content:validate`
- Audit content source/resource links: `npm run content:audit-links` (definitive 404/410 responses fail; access restrictions, timeouts, rate limits, and server errors are reported separately)
- Report per-guide word/source/example counts: `npm run content:stats`
- Back up normalized production guides before a bulk seed: `npm run content:backup:production` (writes an ignored JSON snapshot under `tmp/`)

## Env Vars

- `NEON_CONNECTION_STRING`: Neon Postgres connection string for Payload.
- `PUBLIC_SITE_URL`: public canonical URL. Use `http://localhost:3081` locally and `https://interestinglanguages.com` in production.
- `PAYLOAD_PUBLIC_API_URL`: base URL for public content API, e.g. `http://localhost:3082/api/public`.
- `CONTENT_USE_FIXTURES`: optional build-time QA switch; set to `true` to bypass Payload and build from canonical local fixtures.
- `PAYLOAD_ADMIN_URL`: admin origin, e.g. `http://localhost:3082` locally and `https://admin.interestinglanguages.com` in production.
- `PAYLOAD_SECRET`: required by Payload.
- `PAYLOAD_UPLOADS_DIR`: upload directory for Payload media. On Railway this should point at the mounted volume path.
- `NETLIFY_BUILD_HOOK_URL`: optional hook called when a guide is published.
- `NEXT_PUBLIC_APP_URL`: retained only for compatibility. Prefer `PUBLIC_SITE_URL`.

Never expose `NEON_CONNECTION_STRING` or `PAYLOAD_SECRET` to client code.

Local operational commands should load the repo-root `.env` file when env vars are not already present in the shell. Admin migration/status and seed scripts are wired through `scripts/with-env.mjs` for this. Do not print secret values. When the user explicitly asks to migrate or seed, it is acceptable to mutate the Payload database named by `.env`. Run guide seeding in production mode, as the `seed:guides` script does, so Payload does not try to dev-push schema changes interactively.

## Content Model

Payload's `language-guides` collection owns the public language guide content. Each language has a complete standalone canonical fixture in `packages/content/src/guides/`, seeded into Payload with `npm run seed:guides`. Do not reintroduce a shared prose generator: helpers may format data but editorial text must remain language-specific. A guide should include:

- Slug, name, autonym, status, publication date, summary, family/classification, macro-region, primary script, difficulty label, learner hook, and speaker/community overview.
- Compact facts, origins/history, contact history, standardization, variants/registers, pronunciation, writing system, grammar profile, where spoken, advanced learning path, difficulty assessment, words/texts, relationships, phrases, learning resources, and sources.
- SEO title, SEO description, and optional social image.

Payload exposes normalized published-only content through:

- `GET /api/public/language-guides`
- `GET /api/public/language-guides/:slug`

The response shape must match `packages/content`.

Long-form narrative fields accept either legacy strings or cited text objects shaped as `{ text, sourceIds }`. New guide content should use cited text, and every `sourceId` must resolve to the stable `id` of an entry in that guide's source list. Public pages render these as numbered inline links to the bibliography.

## Public Components

Use Astro for static layout and React only for interactive islands. Components should be small and content-driven:

- Static page structure, SEO, and article sections belong in Astro.
- Search, filters, expandable panels, and media controls may be React islands.
- Keep guide pages fast by avoiding client data fetching for content that can be rendered at build time.
- Keep visible copy in content data wherever possible; do not hard-code guide facts inside visual components.
- Use the global design tokens in `apps/web/src/styles/global.css` before adding one-off colors or spacing.

The public design system is a modern reference site: true white background, deep ink text, restrained teal links/icons, saffron only as a rare accent, thin dividers, compact language rows, sticky article navigation, and readable long-form typography. Avoid app-like dashboards, decorative gradients, generic hero panels, and boilerplate product copy.

## Deployment Notes

Netlify builds from the repo root with `npm run build:web` and publishes `apps/web/dist`.

Railway builds the admin app with `npm run build:admin` and starts it with `npm run start --workspace @interesting-languages/admin`. Configure Railway env vars for Neon, Payload secret, site URLs, upload volume path, and the Netlify build hook.

After deploying Payload schema changes, run `npm run migrate:admin` with the Railway/production env before using `/admin` or the public content API. Missing migrations will surface as Postgres `relation ... does not exist` errors in the admin portal.

Payload media uses local/Railway volume storage in v1. If media grows or multiple admin instances are needed, migrate uploads to S3-compatible storage such as Cloudflare R2 and update this file.

## Maintenance Requirement

When changing any of the following, update this file in the same PR/commit:

- Workspace structure or app boundaries.
- Local development commands or required ports.
- Build, test, deploy, or seed commands.
- Env vars or secret handling.
- Payload collections, public API response shapes, or content workflow.
- Frontend component conventions, design tokens, or routing.
