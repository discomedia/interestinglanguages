import {
  sampleGuides,
  toGuideSummary,
  type LanguageGuide,
  type LanguageGuideSummary
} from "@interesting-languages/content";

type PayloadGuideDoc = Record<string, any>;

const text = (value: unknown, fallback = ""): string => (typeof value === "string" && value.length > 0 ? value : fallback);
const object = <T>(value: unknown, fallback: T): T =>
  value && typeof value === "object" && !Array.isArray(value) ? (value as T) : fallback;
const array = <T>(value: unknown, fallback: T[]): T[] => (Array.isArray(value) ? (value as T[]) : fallback);

function mediaUrl(media: unknown): string | undefined {
  if (typeof media === "string") {
    return undefined;
  }

  if (media && typeof media === "object" && "url" in media && typeof media.url === "string") {
    return media.url;
  }

  return undefined;
}

function fallbackFor(doc: PayloadGuideDoc): LanguageGuide | undefined {
  return sampleGuides.find((guide) => guide.slug === doc.slug);
}

export function normalizeGuideSummary(doc: PayloadGuideDoc): LanguageGuideSummary {
  const fallback = fallbackFor(doc) ?? (sampleGuides[0] as LanguageGuide);
  const fallbackSummary = fallback ? toGuideSummary(fallback) : undefined;

  return {
    slug: text(doc.slug, fallbackSummary?.slug),
    name: text(doc.name, fallbackSummary?.name),
    autonym: text(doc.autonym, fallbackSummary?.autonym),
    summary: text(doc.summary, fallbackSummary?.summary),
    status: doc.status === "published" ? "published" : "draft",
    publishedAt: text(doc.publishedAt, fallbackSummary?.publishedAt),
    family: text(doc.family, fallbackSummary?.family),
    macroRegion: text(doc.macroRegion, fallbackSummary?.macroRegion),
    primaryScript: text(doc.primaryScript, fallbackSummary?.primaryScript),
    difficultyLabel: text(doc.difficultyLabel, fallbackSummary?.difficultyLabel) as LanguageGuideSummary["difficultyLabel"],
    learnerHook: text(doc.learnerHook, fallbackSummary?.learnerHook),
    seo: {
      title: text(doc.seoTitle, fallbackSummary?.seo.title ?? `${text(doc.name)} Language Guide`),
      description: text(doc.seoDescription, fallbackSummary?.seo.description ?? text(doc.summary)),
      socialImageUrl: mediaUrl(doc.socialImage) ?? fallbackSummary?.seo.socialImageUrl
    }
  };
}

export function normalizeGuide(doc: PayloadGuideDoc): LanguageGuide {
  const fallback = fallbackFor(doc) ?? (sampleGuides[0] as LanguageGuide);
  const summary = normalizeGuideSummary(doc);

  return {
    ...fallback,
    ...summary,
    hero: {
      imageUrl: mediaUrl(doc.heroImage) ?? fallback?.hero.imageUrl,
      imageAlt: text(doc.heroImageAlt, fallback?.hero.imageAlt ?? `${summary.name} guide entry.`),
      callToActionLabel: text(doc.heroCallToActionLabel, fallback?.hero.callToActionLabel ?? `Study ${summary.name}`)
    },
    classification: text(doc.classification, fallback?.classification),
    speakerCommunity: text(doc.speakerCommunity, fallback?.speakerCommunity),
    facts: array(doc.factTable, fallback?.facts ?? []),
    learnerOverview: text(doc.learnerOverviewRich, fallback?.learnerOverview ?? text(doc.learnerOverview)),
    origins: object(doc.originNotes, fallback?.origins),
    variants: object(doc.variantNotes, fallback?.variants),
    pronunciation: object(doc.pronunciationGuide, fallback?.pronunciation),
    writing: object(doc.writingSystem, fallback?.writing),
    grammar: object(doc.grammarProfile, fallback?.grammar),
    whereSpoken: {
      ...object(doc.spokenProfile, fallback?.whereSpoken),
      mapImageUrl: mediaUrl(doc.mapImage) ?? fallback?.whereSpoken.mapImageUrl,
      mapImageAlt: text(doc.mapImageAlt, fallback?.whereSpoken.mapImageAlt)
    },
    difficulty: object(doc.difficultyProfile, fallback?.difficulty),
    advancedLearning: object(doc.advancedLearning, fallback?.advancedLearning),
    wordsAndTexts: object(doc.wordNotes, fallback?.wordsAndTexts),
    relationships: object(doc.relationshipNotes, fallback?.relationships),
    culturalNotes: text(doc.culturalNotesRich, fallback?.culturalNotes),
    resources: array(doc.resourceList, fallback?.resources ?? []),
    relatedLanguages: object(doc.relationshipNotes, fallback?.relationships)?.languages ?? fallback?.relatedLanguages ?? [],
    phrases: array(doc.phrasebook, fallback?.phrases ?? []),
    sources: array(doc.sourceList, fallback?.sources ?? [])
  };
}
