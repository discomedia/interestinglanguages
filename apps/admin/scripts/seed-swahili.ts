import { swahiliGuide } from "@interesting-languages/content";
import { getPayload } from "payload";
import config from "../src/payload.config";

const payload = await getPayload({ config });

const existing = await payload.find({
  collection: "language-guides",
  limit: 1,
  overrideAccess: true,
  where: {
    slug: {
      equals: swahiliGuide.slug
    }
  }
});

const data = {
  status: swahiliGuide.status,
  publishedAt: swahiliGuide.publishedAt,
  slug: swahiliGuide.slug,
  name: swahiliGuide.name,
  autonym: swahiliGuide.autonym,
  summary: swahiliGuide.summary,
  heroImageAlt: swahiliGuide.hero.imageAlt,
  heroCallToActionLabel: swahiliGuide.hero.callToActionLabel,
  learnerOverview: swahiliGuide.learnerOverview,
  pronunciationOverview: swahiliGuide.pronunciation.overview,
  script: swahiliGuide.pronunciation.script,
  vowels: swahiliGuide.pronunciation.vowels,
  consonants: swahiliGuide.pronunciation.consonants,
  sampleWord: swahiliGuide.pronunciation.sampleWord.original,
  sampleWordTransliteration: swahiliGuide.pronunciation.sampleWord.transliteration,
  sampleWordTranslation: swahiliGuide.pronunciation.sampleWord.translation,
  grammarOverview: swahiliGuide.grammar.overview,
  grammarTopics: swahiliGuide.grammar.topics,
  whereSpokenOverview: swahiliGuide.whereSpoken.overview,
  spokenRegions: swahiliGuide.whereSpoken.regions,
  mapImageAlt: swahiliGuide.whereSpoken.mapImageAlt,
  learningDifficulty: swahiliGuide.learningDifficulty,
  culturalNotes: swahiliGuide.culturalNotes,
  resources: swahiliGuide.resources,
  relatedLanguages: swahiliGuide.relatedLanguages,
  phrases: swahiliGuide.phrases,
  sources: swahiliGuide.sources,
  seoTitle: swahiliGuide.seo.title,
  seoDescription: swahiliGuide.seo.description
};

if (existing.docs[0]) {
  await payload.update({
    collection: "language-guides",
    id: existing.docs[0].id,
    data,
    overrideAccess: true
  });
  console.log("Updated existing Swahili guide.");
} else {
  await payload.create({
    collection: "language-guides",
    data,
    overrideAccess: true
  });
  console.log("Created Swahili guide.");
}

process.exit(0);
