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

Canonical guides live under `packages/content/src/guides/`. Run `npm run content:validate` before deploying.

## Publication Status (2026-09-27)

All 30 seed guides are live. Eight guides from the 70-language expansion roadmap are also live: Spanish, Estonian, Cantonese, Shanghainese, Pashto, Uzbek, Māori, and Samoan. Their Cloudflare Pages routes passed live verification, leaving 62 roadmap entries pending. The detailed status of each roadmap entry is in [`creating-language-guides.md`](./creating-language-guides.md).

## Workflow

1. Add or revise the standalone guide fixture under `packages/content/src/guides/`; register a new guide in `guides/index.ts`.
2. Run `npm run content:validate`, `npm run content:stats`, and `npm run content:audit-links`. Investigate link-audit restrictions separately from definitive 404/410 failures.
3. Run `npm run validate`, then `npm run preview:pages` and inspect the affected pages, citations, search, and mobile layout locally.
4. Commit the intended files and push `main`. Run `npm run publish` from the same clean checkout to upload `apps/web/dist` to Cloudflare Pages.
5. Verify the Cloudflare deployment finished, then check every affected live route, the sitemap, and a representative existing guide at `interestinglanguages.com`.

## Public Site Direction

The site should feel like a trustworthy modern dictionary or thesaurus reference:

- Search and filters first, not marketing copy.
- Compact language rows with family, region, script, difficulty, and learner hook.
- Dictionary-entry guide pages with facts, article sections, side navigation, and sources.
- True white background, deep ink text, restrained teal links/icons, sparse saffron accent, thin dividers, and readable long-form typography.

Avoid app-like dashboards, large decorative cards, generic hero panels, gradient decoration, and CMS/process boilerplate on public pages.

## Future Improvements

- Protected draft preview route.
- Search index generated during the static build.
- Dedicated family, script, and region index pages.
- S3/R2-backed media storage.
- Per-guide expert review status and source audit notes.
- Work through the 70-language editorial roadmap in `creating-language-guides.md` using one research/writing subagent per language.
