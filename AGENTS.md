# Interesting Languages Agent Guide

This file is part of the operating contract for the repo. Keep it current whenever architecture, commands, deployment behavior, schemas, env vars, or component conventions change.

## Architecture

This is an npm-workspace monorepo.

- `apps/web`: Astro public site with React islands. It is deployed to Netlify and should run locally on `localhost:3081`.
- `packages/content`: canonical language-guide data, shared content types, normalizers, citations, and validation helpers used by the public site.

The public site builds entirely from the canonical guide files under `packages/content/src/guides/`. There is no runtime CMS, content API, or database dependency.

## Commands

- Install: `npm install`
- Public site dev: `npm run dev:web`
- Full build: `npm run build`
- Public-only build: `npm run build:web`
- Typecheck: `npm run typecheck`
- Lint/check: `npm run lint`
- Validate content fixtures: `npm run content:validate`
- Audit content source/resource links: `npm run content:audit-links` (definitive 404/410 responses fail; access restrictions, timeouts, rate limits, and server errors are reported separately)
- Report per-guide word/source/example counts: `npm run content:stats`
- Browser-check representative local or deployed guides: `npm run verify:web` (set `PUBLIC_VERIFY_URL` for a deployed site)

## Env Vars

- `PUBLIC_SITE_URL`: public canonical URL. Use `http://localhost:3081` locally and `https://interestinglanguages.com` in production.
- `NEXT_PUBLIC_APP_URL`: retained only for compatibility. Prefer `PUBLIC_SITE_URL`.

Do not introduce a runtime content service for data that can be rendered from the repository during the Netlify build.

## Content Model

Each language has a complete standalone canonical guide in `packages/content/src/guides/`. The guide index is the production content registry used for validation and static route generation. Do not reintroduce a shared prose generator: helpers may format data but editorial text must remain language-specific. A guide should include:

The complete creation workflow, research standards, reusable subagent prompt, QA/release checklist, and next-70 roadmap live in `docs/creating-language-guides.md`. Future large guide batches should use one dedicated research/writing subagent per language, with each subagent limited to its own fixture file.

The status of the original catalog's plain-language rewrites lives in `docs/guide-readability-status.md`. Mark a guide complete only after root QA, a successful Netlify deployment, and live-page verification.

Guide prose should use active voice and readable, conversational phrasing. Keep every paragraph to no more than three sentences, give it one main idea, and explain the simple picture before adding terminology, exceptions, or regional nuance.

- Slug, name, autonym, status, publication date, summary, family/classification, macro-region, primary script, difficulty label, learner hook, and speaker/community overview.
- Compact facts, origins/history, contact history, standardization, variants/registers, pronunciation, writing system, grammar profile, where spoken, advanced learning path, difficulty assessment, words/texts, relationships, phrases, learning resources, and sources.
- SEO title, SEO description, and optional social image.

Long-form narrative fields accept either legacy strings or cited text objects shaped as `{ text, sourceIds }`. New guide content should use cited text, and every `sourceId` must resolve to the stable `id` of an entry in that guide's source list. Public pages render these as numbered inline links to the bibliography.

Separate narrative paragraphs with a blank line inside a text field; the public renderer preserves those breaks.

## Public Components

Use Astro for static layout and React only for interactive islands. Components should be small and content-driven:

- Static page structure, SEO, and article sections belong in Astro.
- Search, filters, expandable panels, and media controls may be React islands.
- Keep guide pages fast by avoiding client data fetching for content that can be rendered at build time.
- Keep visible copy in content data wherever possible; do not hard-code guide facts inside visual components.
- Use the global design tokens in `apps/web/src/styles/global.css` before adding one-off colors or spacing.

The public design system is a modern reference site: true white background, deep ink text, restrained teal links/icons, saffron only as a rare accent, thin dividers, compact language rows, sticky article navigation, and readable long-form typography. Avoid app-like dashboards, decorative gradients, generic hero panels, and boilerplate product copy.

## Deployment Notes

Production deploys are GitHub-driven. Pushing `main` to `https://github.com/discomedia/interestinglanguages.git` rebuilds the public site on Netlify directly from the committed guide files. Do not use `netlify deploy` or local platform linking for a normal production release. After pushing, monitor the Netlify deployment to terminal success and verify the affected public routes.

Netlify builds from the repo root with `npm run build:web` and publishes `apps/web/dist`.

## Maintenance Requirement

When changing any of the following, update this file in the same PR/commit:

- Workspace structure or app boundaries.
- Local development commands or required ports.
- Build, test, deploy, or content-validation commands.
- Env vars or secret handling.
- Content types, guide registration, or publication workflow.
- Frontend component conventions, design tokens, or routing.
