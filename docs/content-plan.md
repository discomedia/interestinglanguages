# Content Creation And Deployment Plan

## Editorial Template

Every language guide should include:

- Learner-oriented intro.
- Pronunciation and sound system.
- Script or writing system.
- Grammar overview.
- Where it is spoken.
- Dialects, registers, or variation notes where relevant.
- Learner difficulty and study strategy.
- Recommended resources.
- Related languages and relationship notes.
- Starter phrases.
- Source list.

## Workflow

1. Create or update the research dossier.
2. Draft the structured Payload entry.
3. Run `npm run content:validate` for fixture coverage.
4. Review the rendered page locally at `http://localhost:3081`.
5. Publish the guide in Payload.
6. Confirm the Netlify build hook ran.
7. Confirm the production page is updated.

## Launch Content

V1 ships with a home page and `/swahili`, using a rewritten and structured guide inspired by the existing user-authored source article rather than copied wholesale.

## Future Improvements

- Protected draft preview route.
- S3/R2-backed media storage.
- Language family index pages.
- Search index generated during Netlify build.
