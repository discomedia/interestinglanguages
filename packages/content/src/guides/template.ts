import type { DifficultyLabel, LanguageGuide, LearningResource, RelatedLanguage, TextExample } from "../types.js";

export type GuideBlueprint = {
  slug: string;
  name: string;
  autonym?: string;
  family: string;
  classification: string;
  macroRegion: string;
  primaryScript: string;
  difficultyLabel: DifficultyLabel;
  learnerHook: string;
  speakerCommunity: string;
  origin: string;
  history: string;
  contactHistory: string;
  standardization: string;
  variants: string[];
  soundSystem: string;
  prosody: string;
  learnerTraps: string[];
  writing: {
    overview: string;
    romanization?: string;
    spellingNorms: string;
    styleNotes: string[];
  };
  grammar: {
    typologicalProfile: string;
    morphology: string;
    syntax: string;
    painPoints: string[];
    topics: Array<{ title: string; body: string; example?: string; exampleTranslation?: string }>;
  };
  regions: Array<{ place: string; note: string }>;
  easierAspects: string[];
  hardAspects: string[];
  plateauRisks: string[];
  workload: string;
  advancedStrategy: string;
  mediaPractice: string;
  dictionariesAndCorpora: string;
  notableWords: Array<{ term: string; transliteration?: string; meaning: string; note: string }>;
  loanwordLayers: string;
  idioms: TextExample[];
  textGenres: string[];
  relationships: {
    overview: string;
    languages: RelatedLanguage[];
  };
  phrases: TextExample[];
  sources: Array<{ title: string; publisher: string; url?: string }>;
};

const publishedAt = "2026-07-09";

const richText = (value: string, suffix: string, minLength = 90): string =>
  value.length >= minLength ? value : `${value} ${suffix}`;

const baseResources = (guide: GuideBlueprint): LearningResource[] => [
  {
    type: "dictionary",
    title: `${guide.name} reference dictionaries`,
    level: "all",
    description: `Use a monolingual or specialist ${guide.name} dictionary early; advanced progress depends on seeing register, collocations, and example sentences, not only English glosses.`
  },
  {
    type: "media",
    title: `${guide.name} long-form listening and reading`,
    level: "advanced",
    description: guide.mediaPractice
  },
  {
    type: "corpus",
    title: `${guide.name} corpora and parallel texts`,
    level: "advanced",
    description: guide.dictionariesAndCorpora
  },
  {
    type: "book",
    title: `Advanced ${guide.name} grammar notes`,
    level: "advanced",
    description: `Treat reference grammar as a map for noticing patterns in real texts: ${guide.grammar.painPoints[0]}.`
  }
];

export function createLanguageGuide(guide: GuideBlueprint): LanguageGuide {
  const summary = `${guide.name} for advanced learners: ${guide.learnerHook}`;

  return {
    slug: guide.slug,
    name: guide.name,
    autonym: guide.autonym,
    status: "published",
    publishedAt,
    summary,
    family: guide.family,
    macroRegion: guide.macroRegion,
    primaryScript: guide.primaryScript,
    difficultyLabel: guide.difficultyLabel,
    learnerHook: guide.learnerHook,
    hero: {
      imageAlt: `${guide.name} reference guide entry.`,
      callToActionLabel: `Study ${guide.name}`
    },
    classification: guide.classification,
    speakerCommunity: richText(
      guide.speakerCommunity,
      `For advanced learners, the important point is to study ${guide.name} through speakers, media, institutions, and regional settings rather than as a single abstract code.`
    ),
    facts: [
      { label: "Family", value: guide.family },
      { label: "Region", value: guide.macroRegion },
      { label: "Script", value: guide.primaryScript },
      { label: "Difficulty", value: guide.difficultyLabel }
    ],
    learnerOverview: `${guide.name} rewards learners who move past phrasebook study and treat the language as a system of sounds, texts, and social choices. ${guide.learnerHook} Advanced work should connect pronunciation, grammar, writing conventions, regional variation, and the kinds of authentic sources speakers actually use.`,
    origins: {
      overview: richText(
        guide.origin,
        `Its history matters because modern ${guide.name} grammar, vocabulary, script choices, and prestige registers still reflect older contact and standardization.`
      ),
      timeline: [
        { period: "Origins", event: guide.history },
        { period: "Contact", event: guide.contactHistory },
        { period: "Modern standard", event: guide.standardization }
      ],
      contactHistory: richText(
        guide.contactHistory,
        `Those layers are especially visible in formal vocabulary, names, religious or literary language, and modern media.`
      ),
      standardization: richText(
        guide.standardization,
        `Advanced learners should compare the standard with regional speech and older written forms.`
      )
    },
    variants: {
      overview: `${guide.name} has variation that matters for advanced comprehension. Do not treat the standard as the whole language; learn which forms belong to broadcast, literature, school, conversation, or local speech.`,
      items: guide.variants.map((variant) => {
        const [name = variant, ...noteParts] = variant.split(":");
        return { name: name.trim(), note: noteParts.join(":").trim() || variant };
      })
    },
    pronunciation: {
      overview: `${guide.name} pronunciation becomes much easier when learners separate spelling habits from the real sound system.`,
      script: guide.primaryScript,
      soundSystem: richText(
        guide.soundSystem,
        `Work from recordings and full phrases so the sound system becomes automatic in connected speech.`
      ),
      prosody: guide.prosody,
      learnerTraps: guide.learnerTraps,
      sampleWords: guide.notableWords.slice(0, 3).map((word) => ({
        original: word.term,
        transliteration: word.transliteration,
        translation: word.meaning,
        note: word.note
      }))
    },
    writing: {
      overview: richText(
        guide.writing.overview,
        `Advanced literacy means learning how spelling, typography, older materials, and informal writing differ.`
      ),
      primaryScript: guide.primaryScript,
      romanization: guide.writing.romanization,
      spellingNorms: guide.writing.spellingNorms,
      styleNotes: guide.writing.styleNotes
    },
    grammar: {
      overview: `${guide.name} grammar is best learned through patterns that explain real sentences rather than isolated paradigms.`,
      typologicalProfile: guide.grammar.typologicalProfile,
      morphology: guide.grammar.morphology,
      syntax: guide.grammar.syntax,
      advancedPainPoints: guide.grammar.painPoints,
      topics: guide.grammar.topics
    },
    whereSpoken: {
      overview: richText(
        guide.speakerCommunity,
        `Use this geography as a study map: each place can imply different pronunciation, vocabulary, register, and source availability.`
      ),
      regions: guide.regions,
      mapImageAlt: `Regions where ${guide.name} is spoken or historically important.`
    },
    difficulty: {
      label: guide.difficultyLabel,
      overview: `${guide.name} is ${guide.difficultyLabel.toLowerCase()} for most English-speaking learners because the challenge is uneven: some parts become predictable quickly, while others require long exposure.`,
      easierAspects: guide.easierAspects,
      hardAspects: guide.hardAspects,
      plateauRisks: guide.plateauRisks,
      workload: guide.workload
    },
    advancedLearning: {
      strategy: guide.advancedStrategy,
      mediaPractice: guide.mediaPractice,
      dictionariesAndCorpora: guide.dictionariesAndCorpora,
      resources: baseResources(guide)
    },
    wordsAndTexts: {
      overview: `The vocabulary history of ${guide.name} is a compact record of contact, education, religion, literature, and everyday life.`,
      notableWords: guide.notableWords,
      loanwordLayers: guide.loanwordLayers,
      idioms: guide.idioms,
      textGenres: guide.textGenres
    },
    relationships: guide.relationships,
    culturalNotes: `${guide.name} learning is also cultural learning: register, geography, script choice, and source selection shape what counts as fluent, educated, local, formal, or literary.`,
    resources: baseResources(guide),
    relatedLanguages: guide.relationships.languages,
    phrases: guide.phrases.map((phrase) => ({
      original: phrase.original,
      transliteration: phrase.transliteration,
      translation: phrase.translation,
      usageNote: phrase.note
    })),
    sources: guide.sources.map((source) => ({
      ...source,
      accessedAt: publishedAt
    })),
    seo: {
      title: `${guide.name} Language Guide for Advanced Learners`,
      description: `A source-backed guide to ${guide.name}: origins, speakers, variants, pronunciation, grammar, writing system, vocabulary, related languages, difficulty, and advanced learning strategy.`
    }
  };
}
