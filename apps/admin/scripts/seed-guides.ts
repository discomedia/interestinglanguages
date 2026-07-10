import { assertValidLanguageGuide, sampleGuides, type LanguageGuide } from "@interesting-languages/content";
import { getPayload } from "payload";
import config from "../src/payload.config";

const payload = await getPayload({ config });

for (const guide of sampleGuides) {
  assertValidLanguageGuide(guide);
}

function toPayloadData(guide: LanguageGuide) {
  return {
    status: guide.status,
    publishedAt: guide.publishedAt,
    slug: guide.slug,
    name: guide.name,
    autonym: guide.autonym,
    summary: guide.summary,
    family: guide.family,
    classification: guide.classification,
    macroRegion: guide.macroRegion,
    primaryScript: guide.primaryScript,
    difficultyLabel: guide.difficultyLabel,
    learnerHook: guide.learnerHook,
    speakerCommunity: guide.speakerCommunity,
    factTable: guide.facts,
    learnerOverviewRich: guide.learnerOverview,
    originNotes: guide.origins,
    variantNotes: guide.variants,
    pronunciationGuide: guide.pronunciation,
    writingSystem: guide.writing,
    grammarProfile: guide.grammar,
    spokenProfile: guide.whereSpoken,
    difficultyProfile: guide.difficulty,
    advancedLearning: guide.advancedLearning,
    wordNotes: guide.wordsAndTexts,
    relationshipNotes: guide.relationships,
    culturalNotesRich: guide.culturalNotes,
    resourceList: guide.resources,
    phrasebook: guide.phrases,
    sourceList: guide.sources,
    heroImageAlt: guide.hero.imageAlt,
    heroCallToActionLabel: guide.hero.callToActionLabel,
    mapImageAlt: guide.whereSpoken.mapImageAlt,
    seoTitle: guide.seo.title,
    seoDescription: guide.seo.description
  };
}

let created = 0;
let updated = 0;

for (const guide of sampleGuides) {
  const existing = await payload.find({
    collection: "language-guides",
    limit: 1,
    overrideAccess: true,
    where: {
      slug: {
        equals: guide.slug
      }
    }
  });

  const data = toPayloadData(guide);

  if (existing.docs[0]) {
    await payload.update({
      collection: "language-guides",
      id: existing.docs[0].id,
      data: data as never,
      overrideAccess: true
    });
    updated += 1;
  } else {
    await payload.create({
      collection: "language-guides",
      data: data as never,
      overrideAccess: true
    });
    created += 1;
  }
}

console.log(`Seeded ${sampleGuides.length} language guides (${created} created, ${updated} updated).`);
process.exit(0);
