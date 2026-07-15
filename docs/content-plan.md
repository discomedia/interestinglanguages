# Content Creation And Deployment Plan

For the complete research, writing, subagent, QA, publication, and next-language workflow, read [`creating-language-guides.md`](./creating-language-guides.md). This file remains the concise content and design overview.

## Editorial Template

Every language guide is written for curious readers and language learners at any level. Use active voice, colloquial phrasing, and short paragraphs of no more than three sentences. Explain the simple picture first, then introduce technical detail and exceptions.

Each guide should include:

- Identity metadata: family/classification, region, script, speaker community, difficulty label, and learner hook.
- Origins, history, contact layers, and standardization.
- Variants, dialects, registers, or a clear note when the language has no proven relatives.
- Pronunciation, prosody, learner traps, and sample words.
- Writing system, romanization/transliteration where relevant, spelling norms, and style notes.
- Grammar profile, morphology, syntax, advanced pain points, and examples.
- Words, loanword layers, idioms, text genres, and cultural notes.
- Advanced learning strategy, media practice, dictionary/corpus guidance, and resources.
- Difficulty assessment with easier aspects, hard aspects, plateau risks, and workload.
- Source list with enough reference context to audit factual claims.

## Seed Set

The first 30 guides are:

Swahili, Arabic, Mandarin Chinese, Japanese, Korean, Hindi, Urdu, Turkish, Persian, Hebrew, Greek, Russian, Polish, Welsh, Irish, Finnish, Hungarian, Basque, Georgian, Armenian, Vietnamese, Thai, Indonesian, Tagalog, Tamil, Amharic, Yoruba, Navajo, Quechua, and Nahuatl.

Canonical fixtures live under `packages/content/src/guides/`. Run `npm run content:validate` before seeding or deploying.

## Workflow

1. Update the relevant standalone guide fixture under `packages/content/src/guides/`.
2. Run `npm run content:validate`.
3. Run `npm run build:web` and review generated pages locally.
4. Run `npm run migrate:admin` when Payload schema fields change.
5. Run `npm run seed:guides` against the target Payload environment.
6. Confirm `GET /api/public/language-guides` returns the expected published guide count.
7. Publish/deploy the public site through Netlify.

## Public Site Direction

The site should feel like a trustworthy modern dictionary or thesaurus reference:

- Search and filters first, not marketing copy.
- Compact language rows with family, region, script, difficulty, and learner hook.
- Dictionary-entry guide pages with facts, article sections, side navigation, and sources.
- True white background, deep ink text, restrained teal links/icons, sparse saffron accent, thin dividers, and readable long-form typography.

Avoid app-like dashboards, large decorative cards, generic hero panels, gradient decoration, and CMS/process boilerplate on public pages.

## Future Improvements

- Protected draft preview route.
- Search index generated during Netlify build.
- Dedicated family, script, and region index pages.
- S3/R2-backed media storage.
- Per-guide expert review status and source audit notes.
- Work through the 70-language editorial roadmap in `creating-language-guides.md` using one research/writing subagent per language.
