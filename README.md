# Interesting Languages

Interesting Languages is a database-managed language reference site for advanced language learners.

- Public site: Astro + React, deployed to Netlify at <https://interestinglanguages.com>
- Admin/CMS: Payload CMS, deployed to Railway at <https://admin.interestinglanguages.com>
- Database: Neon Postgres
- Local public URL: <http://localhost:3081>
- Local admin URL: <http://localhost:3082>

## Quick Start

```bash
npm install
npm run dev:web
npm run dev:admin
```

Useful commands:

```bash
npm run build
npm run typecheck
npm run lint
npm run seed:guides
npm run content:validate
```

See [AGENTS.md](./AGENTS.md) for the architecture, component rules, content model, and maintenance requirements.
