# Creating and Publishing New Language Guides

This is the operating playbook for adding researched language guides to Interesting Languages. It records the process used for the first 30 long-form guides and is written for future Codex threads, editors, and language-specific research subagents.

Read `AGENTS.md`, this document, `packages/content/src/types.ts`, `packages/content/src/validation.ts`, and two or three existing guides before beginning. The TypeScript types and validator are the final authority if this document ever drifts.

## What a Finished Guide Is

A finished guide is a standalone, reader-focused article of 3,000–4,500 visible words. It should help a curious beginner understand what makes the language distinctive while giving an experienced learner enough precision to plan serious study.

The article must combine:

- A memorable opening and an honest description of the speaker community.
- Accessible linguistic detail supported by complete examples.
- History, contact, standardization, variation, register, and cultural use.
- Practical learning advice tied to the actual language rather than generic study slogans.
- Stable inline citations and a useful bibliography.
- Respect for the names, identities, territories, and classifications used by speaker communities.

Every language owns one file under `packages/content/src/guides/`. Shared code may format content, but it must not generate editorial prose. Do not revive the deleted catalog/template prose generator.

## The Canonical Template

There is deliberately no reusable prose template. The former shared generator caused the boilerplate this project removed. The canonical structural template is now:

1. `packages/content/src/types.ts` for the complete `LanguageGuide` interface.
2. `packages/content/src/validation.ts` for enforced minimums.
3. Existing standalone fixtures for implementation examples.

Use a structurally clear existing guide as a reference, but do not copy its prose, examples, learning plan, source descriptions, or section openings. Good fixtures to inspect include:

- `swahili.ts` for a guide with extensive Discover Discomfort sources.
- `arabic.ts` for diglossia, register labels, transliteration, and RTL script.
- `mandarin-chinese.ts` for tones, characters, and romanization.
- `navajo.ts` for community-sensitive claims and complex morphology.
- `basque.ts` for a language isolate, regional standards, and Latin-script presentation.

The required top-level shape is:

```ts
import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const sources = [
  {
    id: "wikipedia",
    title: "Example language",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Example_language",
    updatedAt: "YYYY-MM-DD",
    accessedAt: "YYYY-MM-DD"
  }
] satisfies LanguageGuide["sources"];

export const exampleGuide: LanguageGuide = {
  slug: "example",
  name: "Example",
  autonym: "Original-script name",
  status: "published",
  publishedAt: "YYYY-MM-DD",
  summary: "...",
  family: "...",
  macroRegion: "...",
  primaryScript: "...",
  difficultyLabel: "Moderate",
  learnerHook: "...",
  hero: {},
  classification: "...",
  speakerCommunity: "...",
  facts: [],
  learnerOverview: "...",
  origins: {
    overview: cited("...", "source-id"),
    timeline: [],
    contactHistory: cited("...", "source-id"),
    standardization: cited("...", "source-id")
  },
  variants: { overview: cited("...", "source-id"), items: [] },
  pronunciation: {
    overview: cited("...", "source-id"),
    script: "...",
    soundSystem: cited("...", "source-id"),
    prosody: cited("...", "source-id"),
    learnerTraps: [],
    sampleWords: []
  },
  writing: {
    overview: cited("...", "source-id"),
    primaryScript: "...",
    romanization: cited("...", "source-id"),
    spellingNorms: cited("...", "source-id"),
    styleNotes: []
  },
  grammar: {
    overview: cited("...", "source-id"),
    typologicalProfile: cited("...", "source-id"),
    morphology: cited("...", "source-id"),
    syntax: cited("...", "source-id"),
    advancedPainPoints: [],
    topics: []
  },
  whereSpoken: { overview: cited("...", "source-id"), regions: [] },
  difficulty: {
    label: "Moderate",
    overview: cited("...", "source-id"),
    easierAspects: [],
    hardAspects: [],
    plateauRisks: [],
    workload: cited("...", "source-id")
  },
  advancedLearning: {
    strategy: cited("...", "source-id"),
    mediaPractice: cited("...", "source-id"),
    dictionariesAndCorpora: cited("...", "source-id"),
    resources: []
  },
  wordsAndTexts: {
    overview: cited("...", "source-id"),
    notableWords: [],
    loanwordLayers: cited("...", "source-id"),
    idioms: [],
    textGenres: []
  },
  relationships: { overview: cited("...", "source-id"), languages: [] },
  culturalNotes: "...",
  resources: [],
  relatedLanguages: [],
  phrases: [],
  sources,
  seo: { title: "...", description: "..." }
} satisfies LanguageGuide;
```

This is a shape reference, not paste-ready content. Arrays must meet the counts below, and factual narrative should use `cited()` objects.

## Editorial Structure and Target Lengths

The renderer groups fields into a readable article rather than displaying them in object order. Plan the guide as an article first, then map the material into the fixture.

| Editorial area | Approximate words | What it should accomplish |
| --- | ---: | --- |
| Opening and learner overview | 250–350 | Begin with a concrete linguistic or cultural observation. Explain why the language is interesting without generic praise. |
| Origins, contact, and standardization | 400–600 | Explain descent, historical stages, contact layers, writing/print institutions, and how a standard emerged. |
| Speakers, places, variants, and registers | 350–500 | Distinguish first-language, additional-language, heritage, diaspora, regional, social, and formal uses. |
| Pronunciation and prosody | 300–450 | Explain the sound system, rhythm/tone/stress, learner traps, and approximately five revealing examples. |
| Grammar | 600–800 | Explain the typological profile and 5–8 useful topics through complete, translated examples. |
| Writing and orthography | 250–400 | Explain the script, spelling, romanization/transliteration, literacy conventions, and digital issues. |
| Words, idioms, texts, and cultural use | 350–500 | Use six notable words, four idioms, genres, and context notes to show the language in use. |
| Relationships | 200–300 | Separate genetic descent, areal similarity, borrowing, and mutual intelligibility. |
| Learning path and resources | 300–450 | Give a language-specific sequence, media practice, dictionaries/corpora, and at least five maintained resources. |
| Difficulty | 200–300 | Describe easier aspects, hard aspects, plateau risks, and workload without universal rankings. |

Some metadata and short list items are not included in the validator's visible word count. Check the measured total with `npm run content:stats`; do not estimate it from file length.

### Enforced minimums

The current validator requires:

- 3,000–4,500 visible words.
- 4 compact facts.
- 3 timeline events.
- 3 variants or register notes.
- 5 pronunciation examples and 3 learner traps.
- 3 writing style notes.
- 5 grammar topics and 3 advanced pain points.
- 3 spoken regions.
- 3 easier aspects, 3 hard aspects, and 2 plateau risks.
- 3 advanced-learning resources and 5 resources in the complete resource list.
- 6 notable words, 4 idioms, and 4 text genres.
- 3 related languages.
- 10 practical phrases.
- 10 bibliography sources, including at least one relevant Wikipedia language article.
- At least 8 distinct source IDs used in inline citations.

The editorial target is usually 12–16 good sources, 5–8 grammar topics, approximately 5 pronunciation examples, 6 notable words, 4 idioms, and 10–14 practical phrases. More is useful only when it adds genuine coverage.

## Research Process

Research before drafting. The purpose is not to accumulate links; it is to identify the questions the guide must answer, locate the best evidence for each one, and discover language-specific details that could not be dropped into another article.

### 1. Establish scope and naming

Decide what the guide actually covers before writing:

- Is the name a single language, a macrolanguage, a standardized register, or a family label?
- Which autonym and script should headline the page?
- Are major varieties mutually intelligible, politically contested, or treated as separate languages by specialists or communities?
- Does the guide need an explicit anchor variety for examples?
- Which labels are preferred by speakers, institutions, and recent scholarship?

For a continuum such as Arabic, Chinese, Quechuan, Nahuatl, Kurdish, or Punjabi, never hide the scope problem. State what the examples represent and label every dialect/register-sensitive example.

### 2. Search preferred sources first

Search Discover Discomfort before the general web. Use queries such as:

- `site:discoverdiscomfort.com <language>`
- `site:discoverdiscomfort.com <language> grammar`
- `site:discoverdiscomfort.com <language> phrases`
- `site:discoverdiscomfort.com <language> learn`

Open every directly relevant result. Use the strongest relevant articles prominently in the learning section and bibliography. Do not force an unrelated Discover Discomfort link merely to satisfy house preference; record that no directly relevant article was found.

Then read the main Wikipedia language article and relevant specialist pages about its script, phonology, grammar, dialects, history, literature, and standardization. Wikipedia is valuable for orientation, terminology, and follow-up references, but important or contested claims should be cross-checked against a primary or specialist source.

### 3. Build a source map

Find current, authoritative sources for each evidence category:

| Question | Preferred sources |
| --- | --- |
| Classification and varieties | Glottolog, specialist grammars, peer-reviewed work, community or national language institutions |
| Current speaker/community facts | Recent census agencies, UNESCO, official statistical bodies, language authorities; include the reference year |
| Phonology and grammar | Reference grammars, university teaching materials, WALS, peer-reviewed descriptions, reputable dictionaries |
| Script and digital text | Unicode, official orthography bodies, script standards, university resources |
| History and standardization | Recent scholarship, university presses, official academies, historical corpora |
| Examples and usage | Dictionaries with examples, corpora, teaching materials, media, native-speaker-reviewed sources |
| Learning resources | Maintained courses, broadcasters, libraries, dictionaries, corpora, podcasts, community programs |

Create stable, readable source IDs such as `dd-grammar`, `unicode-script`, `glottolog`, `census-2021`, or `academy-dictionary`. Do not use array numbers or IDs likely to change when a source is reordered.

For present-day claims, store `publishedAt` or `updatedAt` when available and always store `accessedAt`. Do not convert an undated page into a falsely precise publication date.

Keep a new fixture in `draft` status while it is being researched and reviewed. Change it to `published` and set `publishedAt` to its real first-publication date only when the root editor accepts it for release. When revising an existing production guide, preserve its original `publishedAt`.

### 4. Keep a claim and uncertainty ledger

Before drafting, note:

- The exact source for current speaker estimates and the estimate's year and definition.
- Claims that differ across sources.
- Examples whose spelling, tone, vowel length, transliteration, register, or naturalness need verification.
- Classification, identity, or boundary questions that should be described rather than “resolved.”
- Resources that appear abandoned, paywalled, geographically restricted, or pedagogically dated.

Prefer a transparent qualification over false certainty. If an example cannot be verified reliably, replace it. If it is valuable but genuinely variable, label the variety, register, and uncertainty in the guide.

### 5. Verify examples independently

Every example should include original script, a reliable transliteration when useful, a natural translation, and a short note explaining the feature. Check:

- Orthography, diacritics, capitalization, punctuation, and directionality.
- Tone marks, vowel length, stress, mutation, agreement, classifiers, honorifics, or other relevant morphology.
- Whether the translation is natural rather than mechanically literal.
- Whether the example is a complete utterance when the grammar point needs one.
- Region, dialect, formality, gender, age, or relationship constraints.

Do not invent example sentences by recombining dictionary entries unless the result is verified in a grammar, corpus, teaching source, or by a qualified speaker. Short phrases are especially easy to overgeneralize.

## Writing Standards

Write to the reader, but make every section specific to the language.

Good prose does the following:

- Opens with a form, sound, contrast, social choice, or text that the article later explains.
- Defines linguistic terminology on first use: for example, “evidential, a form that marks how the speaker knows something.”
- Shows a pattern before naming it when that makes the explanation easier.
- Explains why an example matters, not only what it translates to.
- Separates textbook standards from everyday speech.
- Treats speakers as contemporary communities, not scenery for a learner's journey.
- Connects learning advice to the language's actual script, sound system, variation, media, and available tools.

Avoid:

- “This language rewards learners,” “opens doors,” “rich tapestry,” and similar interchangeable openings.
- Unsupported difficulty rankings or fixed hour estimates.
- Tourist-copy lists detached from real interaction.
- Treating a national border as a language boundary.
- Treating the standard as the only correct speech.
- Calling a contact language a genetic relative.
- Repeating the same study plan, grammar explanation, or resource description used in another guide.
- Long quotations. Paraphrase original research and cite it.

### Citation practice

Use `cited(text, ...sourceIds)` for factual narrative. A paragraph can cite several sources when they jointly support it. Citation IDs must match entries in `sources` exactly.

Citation density should follow claims, not sentences. One citation object may contain a coherent paragraph supported by the same sources. Split the paragraph when later claims depend on different evidence. General editorial transitions and clearly marked practical advice may remain plain strings, but present-day facts, history, classification, linguistic claims, and resource assessments should be cited.

Do not cite a source merely because it mentions the topic. The cited page must support the claim being made.

## One-Subagent-Per-Language Workflow

For a large expansion, use exactly one dedicated research/writing subagent per language. An agent owns only its language fixture, which prevents edit collisions and makes accountability clear. Run no more than three language agents concurrently unless the active environment explicitly permits more.

The root agent should do the following before starting language workers:

1. Read `AGENTS.md`, this guide, types, validation, citations, the guide index, and representative fixtures.
2. Confirm the language list, filenames, slugs, and exported variable names.
3. Create empty structural scaffolds if needed, without boilerplate prose.
4. Assign one file and one language to each worker.
5. Tell workers that they must perform live web research and may edit only their assigned guide file.

After each wave, the root agent should:

1. Read the entire contributed fixture and the worker's source/uncertainty audit.
2. Check the opening, terminology, examples, translations, register labels, citations, URLs, and source quality.
3. Compare the guide against previously accepted guides for repeated prose or generic advice.
4. Run `npm run content:validate`, `npm run content:stats`, and typecheck before starting the next wave.
5. Send targeted corrections back to the same language agent when its specialist context is still useful.

Do not have a general cleanup agent rewrite all language files at the end. Cross-guide editing belongs to the root editor so ownership and factual context are not blurred.

### How the first 30-guide batch was executed

The successful first expansion used ten waves of three agents: Swahili/Arabic/Mandarin Chinese; Japanese/Korean/Hindi; Urdu/Turkish/Persian; Hebrew/Greek/Russian; Polish/Welsh/Irish; Finnish/Hungarian/Basque; Georgian/Armenian/Vietnamese; Thai/Indonesian/Tagalog; Tamil/Amharic/Yoruba; and Navajo/Quechua/Nahuatl.

The root agent first built the citation interface, renderer, validation, link audit, statistics, production backup, and independent file structure. Each language agent then researched and wrote only its assigned fixture. After every wave, the root ran targeted validation and reviewed the agents' source/uncertainty audits. Once all 30 were present, the root ran a cross-guide prose pass, audited 493 unique links, built the fixture-backed site, and inspected Arabic, Mandarin Chinese, Navajo, Swahili, and Basque as representative rendering cases. Production was backed up, code was pushed through the GitHub-driven deploy flow, all guides were seeded by slug, all 30 production documents were read back and validated, and the live routes were checked after the final Netlify rebuild.

That sequencing matters. Building the data model and validator before commissioning articles prevented 30 incompatible drafts; wave-by-wave checks stopped structural mistakes from spreading; and production readback caught problems that a successful local seed command alone could not rule out.

## Reusable Subagent Prompt

Replace every bracketed value before sending this prompt. Include the relevant current turn context or explicitly paste the paths because a subagent without context may not know the repo contract.

```text
You are the sole research-and-writing owner for the [LANGUAGE] guide in the
Interesting Languages repository.

Repository: /Users/danahooshmand/dev/discomedia/interestinglanguages
Your only editable file: packages/content/src/guides/[SLUG].ts
Expected export: [EXPORT_NAME]

Read these files completely before editing:
- AGENTS.md
- docs/creating-language-guides.md
- packages/content/src/types.ts
- packages/content/src/validation.ts
- packages/content/src/citations.ts
- packages/content/src/guides/[REFERENCE_GUIDE_1].ts
- packages/content/src/guides/[REFERENCE_GUIDE_2].ts

Do not edit any other file. Other agents are working in the same checkout, so
do not revert, reformat, or overwrite their work. Do not create shared prose or
use a generator. Write one complete, standalone LanguageGuide fixture.

Research requirements

1. Perform live web research before drafting. Search Discover Discomfort first:
   - site:discoverdiscomfort.com [LANGUAGE]
   - site:discoverdiscomfort.com [LANGUAGE] grammar
   - site:discoverdiscomfort.com [LANGUAGE] phrases
   Include every directly relevant Discover Discomfort resource, prominently
   in learning resources and the bibliography. Do not force an irrelevant link;
   if none is relevant, state that in your final audit.
2. Read the main Wikipedia language article and useful specialist Wikipedia
   pages for orientation. Cross-check important claims with authoritative
   sources.
3. Use 12–16 linked sources where possible. Prefer official language bodies,
   recent census/statistics agencies, UNESCO, universities, Unicode, Glottolog,
   WALS, reputable dictionaries and corpora, reference grammars, and current
   scholarship.
4. Give present-day or sensitive claims a dated source. Treat speaker counts,
   endangered status, identity, political boundaries, and disputed
   classifications carefully.
5. Verify every example's script, transliteration, translation, morphology,
   tone/stress/length where relevant, dialect, and register. Never silently mix
   varieties. If the guide covers a continuum, name the anchor variety for each
   example.

Editorial requirements

- Write 3,000–4,500 visible words. Aim for roughly 3,700–4,200 so later edits
  do not cross a validator boundary.
- Make the opening unmistakably about [LANGUAGE]. Do not use interchangeable
  praise such as “rewards learners,” “opens doors,” or “rich tapestry.”
- Cover the speaker/community context, origins, contact history,
  standardization, variants and registers, pronunciation, prosody, writing,
  grammar, where spoken, relationships, cultural use, learning strategy,
  difficulty, words/texts, phrases, resources, and sources.
- Explain every linguistic term on first use.
- Include at least 5 pronunciation examples, 5–8 grammar topics with complete
  translated examples, 6 notable words, 4 idioms, 10 practical phrases, 5
  specific learning/media resources, 3 related languages, and 10 sources.
- Use original script and reliable transliteration where useful. Include a
  natural translation and explain why each example is interesting.
- Label dialect and register explicitly. Separate standard, colloquial,
  literary, regional, historical, and ceremonial forms.
- Make learning advice language-specific and useful at beginner, intermediate,
  and advanced levels. Assess resource maintenance, register, and limitations.
- Paraphrase sources. Use no long quotations and no copied prose.

Implementation requirements

- Use `cited("...", "source-id")` for factual narrative.
- Give every source a stable unique `id`, absolute HTTP(S) URL, publisher when
  known, and publication/update/access dates when available.
- Ensure at least 8 distinct sources are used by inline citations and include a
  relevant Wikipedia article.
- Preserve exact Unicode, apostrophes, diacritics, directionality, and
  transliteration marks.
- Set status and publication metadata consistently with the assignment from the
  root agent.
- Run the targeted checks available to you, at minimum:
  npm run content:validate
  npm run content:stats
  npm run typecheck
- Fix every error attributable to your file. Do not weaken validation.

Before finishing, reread the full guide as an editor. Remove generic paragraphs,
repeated advice, unsupported claims, fake precision, unnatural translations,
and examples that could belong to another language.

Return a concise audit containing:
- File changed and measured visible word count.
- Source count and the Discover Discomfort articles included, or confirmation
  that no directly relevant article was found.
- The anchor varieties/registers used for examples.
- Claims or examples you cross-checked especially carefully.
- Remaining uncertainty that the root editor should review.
- Validation commands run and their results.
```

## Root Editorial and Technical QA

The root editor remains responsible for accepting the work. A passing validator does not prove that a phrase is natural, a source supports a claim, or an article is interesting.

### Per-guide review

Check:

- Does the first paragraph contain a language-specific idea or example?
- Are community and naming choices respectful and current?
- Are speaker estimates dated and scoped?
- Is genetic relationship kept separate from contact and typological resemblance?
- Does every technical term receive a plain-language explanation?
- Are examples complete, translated naturally, and labeled by variety/register?
- Are the script and transliteration internally consistent?
- Do the grammar examples actually demonstrate the described rule?
- Are idioms and phrases useful, current, and context-labeled?
- Are resources specific, maintained, and honestly described?
- Does every factual paragraph's source support its claims?
- Are all source URLs direct rather than search-result pages?
- Does the guide feel written for this language rather than filled into a form?

### Cross-guide review

After all new guides are present:

1. Run the exact-duplicate prose check built into `npm run content:validate`.
2. Search manually for recurring phrases such as “three-column notebook,” “build a two-track routine,” “not a monolith,” or generic resource descriptions.
3. Compare openings, difficulty sections, and study plans, where boilerplate hides most easily.
4. Check that related-language slugs point to existing or deliberately planned guides.
5. Check for reused example sentences, copied cultural notes, and identical explanations of common concepts.
6. Review potentially fragile Unicode in RTL, combining-mark, tone-marked, syllabic, abugida, and non-BMP scripts.

## Validation, Publication, and Rollback

Run these checks from the repo root:

```sh
npm run content:validate
npm run content:stats
npm run content:audit-links
npm run typecheck
npm run lint
npm run build
npm run build:web:fixtures
npm run verify:web
```

The link audit fails definitive 404/410 responses. It reports access restrictions, rate limits, timeouts, and server errors separately so transient network behavior does not masquerade as a structural content failure. Investigate each report, but do not replace an authoritative source solely because its server blocks automated requests.

Inspect representative pages locally. For a multi-language batch, cover at least:

- One RTL language.
- One tonal language.
- One non-Latin or complex-script language.
- One morphologically complex language.
- One Latin-script control guide.
- Mobile and desktop layouts.
- Inline citation links, bibliography targets, phrases, idioms, resources, Unicode, and transliteration.

Before a production bulk seed:

1. Run `npm run content:backup:production` and retain the ignored JSON snapshot under `tmp/`.
2. Commit the validated fixtures and code.
3. Push `main`; GitHub automatically deploys the Payload admin/API to Railway and the public site to Netlify. Do not use `railway up` or `netlify deploy` for a normal release.
4. Wait for both deployments to reach terminal success and verify the public API is healthy.
5. Run `npm run seed:guides`. The slug-based upsert should update existing documents and create new language documents without replacing existing IDs.
6. Read back the production collection. Verify the expected total count, new slugs, word/source counts, citation resolution, publication state, and representative Unicode.
7. Push a second small commit if necessary to trigger the final Netlify static rebuild against the newly seeded API, as described in `AGENTS.md`.
8. Verify every new live route plus representative old routes.

If deployment or seeding fails, stop publication, keep the pre-seed API snapshot, and use the previous fixture revision as the rollback source. Do not report completion until GitHub, Railway, Payload, Netlify, the production API, and the public routes all agree.

## Adding a Guide to the Repository

For each accepted guide:

1. Create `packages/content/src/guides/<slug>.ts` with one exported fixture.
2. Import and append it in `packages/content/src/guides/index.ts`.
3. Re-export it from the same index if direct imports are useful.
4. Run validation and stats immediately; a guide absent from the index is absent from validation, seeding, and static route generation.
5. Confirm the slug is unique and lowercase kebab-case.
6. Confirm `relatedLanguages[].slug` values use canonical existing slugs when links should resolve.
7. Do not add a Payload migration unless the `LanguageGuide`/collection schema changes. Adding another document through the existing JSON fields requires only fixture registration and seeding.

## Next 70 Languages

This is the recommended next expansion set. It balances learner demand, global and diaspora reach, structural variety, scripts, language revitalization, and gaps left by the first 30. The waves are an editorial batching suggestion, not a ranking of cultural importance.

### Wave 1: widely learned European languages

1. Spanish
2. French
3. German
4. Portuguese
5. Italian
6. Dutch
7. Swedish

### Wave 2: northern, eastern, and southeastern Europe

8. Norwegian
9. Danish
10. Icelandic
11. Ukrainian
12. Czech
13. Romanian
14. Albanian

### Wave 3: regional, minoritized, and historically diasporic Europe

15. Catalan
16. Galician
17. Scottish Gaelic
18. Maltese
19. Yiddish
20. Lithuanian
21. Estonian

### Wave 4: East and Inner Asia

22. Cantonese
23. Taiwanese Hokkien
24. Shanghainese (Wu Chinese)
25. Tibetan
26. Burmese
27. Mongolian
28. Lao

### Wave 5: Southeast Asia and the wider Austronesian world

29. Khmer
30. Malay
31. Javanese
32. Sundanese
33. Cebuano
34. Malagasy
35. Tok Pisin

### Wave 6: South Asia

36. Bengali
37. Punjabi
38. Gujarati
39. Marathi
40. Nepali
41. Telugu
42. Malayalam

### Wave 7: South and Central Asian continuums

43. Sinhala
44. Kannada
45. Pashto
46. Kurdish (with Kurmanji and Sorani scope made explicit)
47. Azerbaijani
48. Kazakh
49. Uzbek

### Wave 8: major African languages and contact histories

50. Somali
51. Hausa
52. Igbo
53. Zulu
54. Xhosa
55. Afrikaans
56. Oromo

### Wave 9: African regional and cross-border languages

57. Tigrinya
58. Kinyarwanda
59. Lingala
60. Wolof
61. Akan (Twi scope made explicit)
62. Bambara

### Wave 10: a signed language, creoles, Indigenous languages, and Oceania

63. American Sign Language
64. Haitian Creole
65. Jamaican Patois
66. Guaraní
67. Greenlandic (Kalaallisut)
68. Māori
69. Hawaiian
70. Samoan

Before assigning any of these, confirm the canonical public name, slug, autonym, guide scope, and whether a broad label should become more than one guide. In particular, treat Chinese varieties, Tibetan, Kurdish, Punjabi, Akan/Twi, and signed languages as scope decisions rather than simple metadata choices. American Sign Language will also require an intentional content-model and renderer review: signed-language phonology and production must not be forced into speech-centric “pronunciation” copy, and the absence of a single everyday writing system should not be presented as a deficiency.
