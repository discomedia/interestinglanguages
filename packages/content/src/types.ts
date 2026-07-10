export type GuideStatus = "draft" | "published";

export type DifficultyLabel = "Moderate" | "Demanding" | "Very demanding";

export type CitedText = string | {
  text: string;
  sourceIds: string[];
};

export type GuideFact = {
  label: string;
  value: string;
};

export type TimelineEvent = {
  period: string;
  event: CitedText;
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
  overview: CitedText;
  script: string;
  soundSystem: CitedText;
  prosody: CitedText;
  learnerTraps: string[];
  sampleWords: TextExample[];
};

export type WritingSystemGuide = {
  overview: CitedText;
  primaryScript: string;
  romanization?: CitedText;
  spellingNorms: CitedText;
  styleNotes: CitedText[];
};

export type GrammarTopic = {
  title: string;
  body: CitedText;
  example?: string;
  exampleTranslation?: string;
};

export type GrammarGuide = {
  overview: CitedText;
  typologicalProfile: CitedText;
  morphology: CitedText;
  syntax: CitedText;
  advancedPainPoints: string[];
  topics: GrammarTopic[];
};

export type SpokenRegion = {
  place: string;
  note: CitedText;
};

export type VariantNote = {
  name: string;
  note: CitedText;
};

export type LearningResource = {
  type: "course" | "video" | "app" | "book" | "dictionary" | "podcast" | "community" | "corpus" | "media" | "other";
  title: string;
  url?: string;
  level?: "beginner" | "intermediate" | "advanced" | "all";
  description: CitedText;
};

export type RelatedLanguage = {
  name: string;
  slug?: string;
  relationship: string;
  explanation: CitedText;
};

export type StarterPhrase = {
  original: string;
  transliteration?: string;
  translation: string;
  literalMeaning?: string;
  usageNote?: string;
};

export type ContentSource = {
  id: string;
  title: string;
  url?: string;
  publisher?: string;
  publishedAt?: string;
  updatedAt?: string;
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
  note: CitedText;
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
    overview: CitedText;
    timeline: TimelineEvent[];
    contactHistory: CitedText;
    standardization: CitedText;
  };
  variants: {
    overview: CitedText;
    items: VariantNote[];
  };
  pronunciation: PronunciationGuide;
  writing: WritingSystemGuide;
  grammar: GrammarGuide;
  whereSpoken: {
    overview: CitedText;
    regions: SpokenRegion[];
    mapImageUrl?: string;
    mapImageAlt?: string;
  };
  difficulty: {
    label: DifficultyLabel;
    overview: CitedText;
    easierAspects: string[];
    hardAspects: string[];
    plateauRisks: string[];
    workload: CitedText;
  };
  advancedLearning: {
    strategy: CitedText;
    mediaPractice: CitedText;
    dictionariesAndCorpora: CitedText;
    resources: LearningResource[];
  };
  wordsAndTexts: {
    overview: CitedText;
    notableWords: WordNote[];
    loanwordLayers: CitedText;
    idioms: TextExample[];
    textGenres: string[];
  };
  relationships: {
    overview: CitedText;
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
