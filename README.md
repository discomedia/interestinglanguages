# Interesting Languages

Interesting Languages is a source-backed language reference site for advanced language learners.

- Public site: Astro static HTML + a React search island, deployed to Cloudflare Pages at <https://interestinglanguages.com>
- Content: canonical TypeScript guide files under `packages/content/src/guides/`
- Local public URL: <http://localhost:3081>

## Quick Start

```bash
npm install
npm run dev:web
```

Useful commands:

```bash
npm run build
npm run typecheck
npm run lint
npm run content:validate
npm run validate
npm run preview:pages
```

For a release, commit and push the validated checkout, then run `npm run publish` and verify the live routes. Pages serves `apps/web/dist`; guide pages, the sitemap, and robots file are generated at build time. See [AGENTS.md](./AGENTS.md) and [the guide publishing playbook](./docs/creating-language-guides.md) for the complete workflow.
