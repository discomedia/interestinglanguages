export type GuideStatus = "draft" | "published";

export type DifficultyLabel = "Moderate" | "Demanding" | "Very demanding";

export type GuideFact = {
  label: string;
  value: string;
};

export type TimelineEvent = {
  period: string;
  event: string;
};

export type GuideHero = {
  imageUrl?: string;
  imageAlt?: string;
  callToActionLabel?: string;
};

export type TextExample = {
  original: string;
  transliteration?: string;
  translation: string;
  note?: string;
};

export type PronunciationGuide = {
  overview: string;
  script: string;
  soundSystem: string;
  prosody: string;
  learnerTraps: string[];
  sampleWords: TextExample[];
};

export type WritingSystemGuide = {
  overview: string;
  primaryScript: string;
  romanization?: string;
  spellingNorms: string;
  styleNotes: string[];
};

export type GrammarTopic = {
  title: string;
  body: string;
  example?: string;
  exampleTranslation?: string;
};

export type GrammarGuide = {
  overview: string;
  typologicalProfile: string;
  morphology: string;
  syntax: string;
  advancedPainPoints: string[];
  topics: GrammarTopic[];
};

export type SpokenRegion = {
  place: string;
  note: string;
};

export type VariantNote = {
  name: string;
  note: string;
};

export type LearningResource = {
  type: "course" | "video" | "app" | "book" | "dictionary" | "podcast" | "community" | "corpus" | "media" | "other";
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

export type WordNote = {
  term: string;
  transliteration?: string;
  meaning: string;
  note: string;
};

export type LanguageGuideSummary = {
  slug: string;
  name: string;
  autonym?: string;
  summary: string;
  status: GuideStatus;
  publishedAt?: string;
  seo: SeoFields;
  family: string;
  macroRegion: string;
  primaryScript: string;
  difficultyLabel: DifficultyLabel;
  learnerHook: string;
};

export type LanguageGuide = LanguageGuideSummary & {
  hero: GuideHero;
  classification: string;
  speakerCommunity: string;
  facts: GuideFact[];
  learnerOverview: string;
  origins: {
    overview: string;
    timeline: TimelineEvent[];
    contactHistory: string;
    standardization: string;
  };
  variants: {
    overview: string;
    items: VariantNote[];
  };
  pronunciation: PronunciationGuide;
  writing: WritingSystemGuide;
  grammar: GrammarGuide;
  whereSpoken: {
    overview: string;
    regions: SpokenRegion[];
    mapImageUrl?: string;
    mapImageAlt?: string;
  };
  difficulty: {
    label: DifficultyLabel;
    overview: string;
    easierAspects: string[];
    hardAspects: string[];
    plateauRisks: string[];
    workload: string;
  };
  advancedLearning: {
    strategy: string;
    mediaPractice: string;
    dictionariesAndCorpora: string;
    resources: LearningResource[];
  };
  wordsAndTexts: {
    overview: string;
    notableWords: WordNote[];
    loanwordLayers: string;
    idioms: TextExample[];
    textGenres: string[];
  };
  relationships: {
    overview: string;
    languages: RelatedLanguage[];
  };
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
