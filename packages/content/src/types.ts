export type GuideStatus = "draft" | "published";

export type GuideHero = {
  imageUrl?: string;
  imageAlt?: string;
  callToActionLabel?: string;
};

export type PronunciationGuide = {
  overview: string;
  script: string;
  vowels: string;
  consonants: string;
  sampleWord: {
    original: string;
    transliteration?: string;
    translation: string;
  };
};

export type GrammarTopic = {
  title: string;
  body: string;
  example?: string;
  exampleTranslation?: string;
};

export type SpokenRegion = {
  place: string;
  note: string;
};

export type LearningResource = {
  type: "course" | "video" | "app" | "book" | "dictionary" | "podcast" | "community" | "other";
  title: string;
  url?: string;
  level?: "beginner" | "intermediate" | "advanced" | "all";
  description: string;
};

export type RelatedLanguage = {
  name: string;
  slug?: string;
  relationship: string;
  explanation: string;
};

export type StarterPhrase = {
  original: string;
  transliteration?: string;
  translation: string;
  literalMeaning?: string;
  usageNote?: string;
};

export type ContentSource = {
  title: string;
  url?: string;
  publisher?: string;
  accessedAt?: string;
};

export type SeoFields = {
  title: string;
  description: string;
  socialImageUrl?: string;
};

export type LanguageGuideSummary = {
  slug: string;
  name: string;
  autonym?: string;
  summary: string;
  status: GuideStatus;
  publishedAt?: string;
  seo: SeoFields;
};

export type LanguageGuide = LanguageGuideSummary & {
  hero: GuideHero;
  learnerOverview: string;
  pronunciation: PronunciationGuide;
  grammar: {
    overview: string;
    topics: GrammarTopic[];
  };
  whereSpoken: {
    overview: string;
    regions: SpokenRegion[];
    mapImageUrl?: string;
    mapImageAlt?: string;
  };
  learningDifficulty: string;
  culturalNotes?: string;
  resources: LearningResource[];
  relatedLanguages: RelatedLanguage[];
  phrases: StarterPhrase[];
  sources: ContentSource[];
};

export type PublicGuideListResponse = {
  docs: LanguageGuideSummary[];
};

export type PublicGuideResponse = {
  doc: LanguageGuide;
};
