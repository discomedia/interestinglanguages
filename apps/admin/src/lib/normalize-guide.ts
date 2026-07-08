import type { LanguageGuide, LanguageGuideSummary } from "@interesting-languages/content";

type PayloadGuideDoc = Record<string, any>;

const text = (value: unknown, fallback = ""): string => (typeof value === "string" ? value : fallback);
const array = <T>(value: unknown): T[] => (Array.isArray(value) ? (value as T[]) : []);

function mediaUrl(media: unknown): string | undefined {
  if (typeof media === "string") {
    return undefined;
  }

  if (media && typeof media === "object" && "url" in media && typeof media.url === "string") {
    return media.url;
  }

  return undefined;
}

export function normalizeGuideSummary(doc: PayloadGuideDoc): LanguageGuideSummary {
  return {
    slug: text(doc.slug),
    name: text(doc.name),
    autonym: text(doc.autonym, undefined as unknown as string),
    summary: text(doc.summary),
    status: doc.status === "published" ? "published" : "draft",
    publishedAt: text(doc.publishedAt, undefined as unknown as string),
    seo: {
      title: text(doc.seoTitle, `${text(doc.name)} Language Guide`),
      description: text(doc.seoDescription, text(doc.summary))
    }
  };
}

export function normalizeGuide(doc: PayloadGuideDoc): LanguageGuide {
  const summary = normalizeGuideSummary(doc);

  return {
    ...summary,
    hero: {
      imageUrl: mediaUrl(doc.heroImage),
      imageAlt: text(doc.heroImageAlt),
      callToActionLabel: text(doc.heroCallToActionLabel, `Start learning ${summary.name}`)
    },
    learnerOverview: text(doc.learnerOverview),
    pronunciation: {
      overview: text(doc.pronunciationOverview),
      script: text(doc.script),
      vowels: text(doc.vowels),
      consonants: text(doc.consonants),
      sampleWord: {
        original: text(doc.sampleWord),
        transliteration: text(doc.sampleWordTransliteration),
        translation: text(doc.sampleWordTranslation)
      }
    },
    grammar: {
      overview: text(doc.grammarOverview),
      topics: array<PayloadGuideDoc>(doc.grammarTopics).map((topic) => ({
        title: text(topic.title),
        body: text(topic.body),
        example: text(topic.example),
        exampleTranslation: text(topic.exampleTranslation)
      }))
    },
    whereSpoken: {
      overview: text(doc.whereSpokenOverview),
      mapImageUrl: mediaUrl(doc.mapImage),
      mapImageAlt: text(doc.mapImageAlt),
      regions: array<PayloadGuideDoc>(doc.spokenRegions).map((region) => ({
        place: text(region.place),
        note: text(region.note)
      }))
    },
    learningDifficulty: text(doc.learningDifficulty),
    culturalNotes: text(doc.culturalNotes),
    resources: array<PayloadGuideDoc>(doc.resources).map((resource) => ({
      type: resource.type ?? "other",
      title: text(resource.title),
      url: text(resource.url),
      level: resource.level ?? "all",
      description: text(resource.description)
    })),
    relatedLanguages: array<PayloadGuideDoc>(doc.relatedLanguages).map((language) => ({
      name: text(language.name),
      slug: text(language.slug),
      relationship: text(language.relationship),
      explanation: text(language.explanation)
    })),
    phrases: array<PayloadGuideDoc>(doc.phrases).map((phrase) => ({
      original: text(phrase.original),
      transliteration: text(phrase.transliteration),
      translation: text(phrase.translation),
      literalMeaning: text(phrase.literalMeaning),
      usageNote: text(phrase.usageNote)
    })),
    sources: array<PayloadGuideDoc>(doc.sources).map((source) => ({
      title: text(source.title),
      url: text(source.url),
      publisher: text(source.publisher),
      accessedAt: text(source.accessedAt)
    }))
  };
}
