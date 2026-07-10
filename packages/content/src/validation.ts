import { sourceIdsOf, textOf } from "./citations.js";
import type { CitedText, LanguageGuide } from "./types.js";

export type ValidationIssue = {
  path: string;
  message: string;
};

const isNonEmpty = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;

const asText = (value: unknown): string => {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && "text" in value && typeof value.text === "string") return value.text;
  return "";
};

const words = (value: CitedText | undefined): number =>
  textOf(value).trim().split(/\s+/u).filter(Boolean).length;

export function guideWordCount(guide: LanguageGuide): number {
  const values: Array<CitedText | undefined> = [
    guide.learnerOverview, guide.speakerCommunity,
    guide.origins.overview, ...guide.origins.timeline.map((item) => item.event),
    guide.origins.contactHistory, guide.origins.standardization,
    guide.variants.overview, ...guide.variants.items.map((item) => item.note),
    guide.pronunciation.overview, guide.pronunciation.soundSystem, guide.pronunciation.prosody,
    ...guide.pronunciation.sampleWords.flatMap((item) => [item.translation, item.note]),
    guide.writing.overview, guide.writing.romanization, guide.writing.spellingNorms, ...guide.writing.styleNotes,
    guide.grammar.overview, guide.grammar.typologicalProfile, guide.grammar.morphology, guide.grammar.syntax,
    ...guide.grammar.topics.flatMap((item) => [item.body, item.exampleTranslation]),
    guide.whereSpoken.overview, ...guide.whereSpoken.regions.map((item) => item.note),
    guide.difficulty.overview, guide.difficulty.workload,
    guide.advancedLearning.strategy, guide.advancedLearning.mediaPractice, guide.advancedLearning.dictionariesAndCorpora,
    ...guide.advancedLearning.resources.map((item) => item.description),
    guide.wordsAndTexts.overview, guide.wordsAndTexts.loanwordLayers,
    ...guide.wordsAndTexts.notableWords.map((item) => item.note),
    ...guide.wordsAndTexts.idioms.flatMap((item) => [item.translation, item.note]),
    guide.relationships.overview, ...guide.relationships.languages.map((item) => item.explanation),
    guide.culturalNotes, ...guide.resources.map((item) => item.description),
    ...guide.phrases.flatMap((item) => [item.translation, item.literalMeaning, item.usageNote])
  ];
  return values.reduce((total, value) => total + words(value), 0);
}

export function collectCitedText(value: unknown, results: CitedText[] = []): CitedText[] {
  if (!value) return results;
  if (typeof value === "object" && !Array.isArray(value) && "text" in value && "sourceIds" in value) {
    results.push(value as CitedText);
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectCitedText(item, results));
  } else if (typeof value === "object") {
    Object.values(value as Record<string, unknown>).forEach((item) => collectCitedText(item, results));
  }
  return results;
}

export function validateLanguageGuide(guide: LanguageGuide): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  const requireText = (path: string, value: unknown, minLength = 1) => {
    const resolved = asText(value);
    if (!isNonEmpty(resolved) || resolved.trim().length < minLength) {
      issues.push({ path, message: `Required text is missing or shorter than ${minLength} characters.` });
    }
  };

  const requireRows = (path: string, value: unknown[] | undefined, minRows: number) => {
    if ((value ?? []).length < minRows) {
      issues.push({ path, message: `Add at least ${minRows} entries.` });
    }
  };

  requireText("slug", guide.slug);
  requireText("name", guide.name);
  requireText("summary", guide.summary, 90);
  requireText("family", guide.family);
  requireText("macroRegion", guide.macroRegion);
  requireText("primaryScript", guide.primaryScript);
  requireText("difficultyLabel", guide.difficultyLabel);
  requireText("learnerHook", guide.learnerHook, 70);
  requireText("classification", guide.classification, 20);
  requireText("speakerCommunity", guide.speakerCommunity, 80);
  requireText("learnerOverview", guide.learnerOverview, 150);
  requireText("origins.overview", guide.origins?.overview, 80);
  requireText("origins.contactHistory", guide.origins?.contactHistory, 70);
  requireText("origins.standardization", guide.origins?.standardization, 60);
  requireText("variants.overview", guide.variants?.overview, 80);
  requireText("pronunciation.overview", guide.pronunciation?.overview, 80);
  requireText("pronunciation.script", guide.pronunciation?.script);
  requireText("pronunciation.soundSystem", guide.pronunciation?.soundSystem, 70);
  requireText("pronunciation.prosody", guide.pronunciation?.prosody, 70);
  requireText("writing.overview", guide.writing?.overview, 80);
  requireText("writing.primaryScript", guide.writing?.primaryScript);
  requireText("writing.spellingNorms", guide.writing?.spellingNorms, 70);
  requireText("grammar.overview", guide.grammar?.overview, 70);
  requireText("grammar.typologicalProfile", guide.grammar?.typologicalProfile, 60);
  requireText("grammar.morphology", guide.grammar?.morphology, 70);
  requireText("grammar.syntax", guide.grammar?.syntax, 50);
  requireText("whereSpoken.overview", guide.whereSpoken?.overview, 70);
  requireText("difficulty.overview", guide.difficulty?.overview, 70);
  requireText("difficulty.workload", guide.difficulty?.workload, 70);
  requireText("advancedLearning.strategy", guide.advancedLearning?.strategy, 90);
  requireText("advancedLearning.mediaPractice", guide.advancedLearning?.mediaPractice, 80);
  requireText("advancedLearning.dictionariesAndCorpora", guide.advancedLearning?.dictionariesAndCorpora, 80);
  requireText("wordsAndTexts.overview", guide.wordsAndTexts?.overview, 70);
  requireText("wordsAndTexts.loanwordLayers", guide.wordsAndTexts?.loanwordLayers, 70);
  requireText("relationships.overview", guide.relationships?.overview, 60);
  requireText("seo.title", guide.seo?.title);
  requireText("seo.description", guide.seo?.description, 120);

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(guide.slug)) {
    issues.push({ path: "slug", message: "Slug must be lowercase kebab-case." });
  }

  if (guide.status === "published" && !isNonEmpty(guide.publishedAt)) {
    issues.push({ path: "publishedAt", message: "Published guides need a publication date." });
  }

  requireRows("facts", guide.facts, 4);
  requireRows("origins.timeline", guide.origins?.timeline, 3);
  requireRows("variants.items", guide.variants?.items, 3);
  requireRows("pronunciation.learnerTraps", guide.pronunciation?.learnerTraps, 3);
  requireRows("pronunciation.sampleWords", guide.pronunciation?.sampleWords, 3);
  requireRows("writing.styleNotes", guide.writing?.styleNotes, 3);
  requireRows("grammar.advancedPainPoints", guide.grammar?.advancedPainPoints, 3);
  requireRows("grammar.topics", guide.grammar?.topics, 3);
  requireRows("whereSpoken.regions", guide.whereSpoken?.regions, 3);
  requireRows("difficulty.easierAspects", guide.difficulty?.easierAspects, 3);
  requireRows("difficulty.hardAspects", guide.difficulty?.hardAspects, 3);
  requireRows("difficulty.plateauRisks", guide.difficulty?.plateauRisks, 2);
  requireRows("advancedLearning.resources", guide.advancedLearning?.resources, 3);
  requireRows("wordsAndTexts.notableWords", guide.wordsAndTexts?.notableWords, 3);
  requireRows("wordsAndTexts.idioms", guide.wordsAndTexts?.idioms, 2);
  requireRows("wordsAndTexts.textGenres", guide.wordsAndTexts?.textGenres, 4);
  requireRows("relationships.languages", guide.relationships?.languages, 3);
  requireRows("phrases", guide.phrases, 8);
  requireRows("sources", guide.sources, 4);

  requireRows("pronunciation.sampleWords", guide.pronunciation?.sampleWords, 5);
  requireRows("grammar.topics", guide.grammar?.topics, 5);
  requireRows("wordsAndTexts.notableWords", guide.wordsAndTexts?.notableWords, 6);
  requireRows("wordsAndTexts.idioms", guide.wordsAndTexts?.idioms, 4);
  requireRows("phrases", guide.phrases, 10);
  requireRows("resources", guide.resources, 5);
  requireRows("sources", guide.sources, 10);

  const wordCount = guideWordCount(guide);
  if (wordCount < 3000 || wordCount > 4500) {
    issues.push({ path: "content", message: `Visible editorial word count must be 3,000-4,500; found ${wordCount}.` });
  }

  const sourceIds = new Set<string>();
  for (const [index, source] of guide.sources.entries()) {
    if (!source.id) issues.push({ path: `sources.${index}.id`, message: "Source ID is required." });
    if (sourceIds.has(source.id)) issues.push({ path: `sources.${index}.id`, message: `Duplicate source ID ${source.id}.` });
    sourceIds.add(source.id);
    if (!source.url || !/^https?:\/\//.test(source.url)) {
      issues.push({ path: `sources.${index}.url`, message: "Every source needs an absolute HTTP(S) URL." });
    }
  }

  const usedSourceIds = new Set<string>();
  for (const citedValue of collectCitedText({ ...guide, sources: undefined })) {
    for (const sourceId of sourceIdsOf(citedValue)) {
      usedSourceIds.add(sourceId);
      if (!sourceIds.has(sourceId)) {
        issues.push({ path: "citations", message: `Citation references missing source ID ${sourceId}.` });
      }
    }
  }
  if (usedSourceIds.size < 8) {
    issues.push({ path: "citations", message: `Use at least 8 distinct inline-cited sources; found ${usedSourceIds.size}.` });
  }
  if (!guide.sources.some((source) => source.url?.includes("wikipedia.org/wiki/"))) {
    issues.push({ path: "sources", message: "Include at least one relevant Wikipedia article." });
  }

  return issues;
}

export function assertValidLanguageGuide(guide: LanguageGuide): void {
  const issues = validateLanguageGuide(guide);

  if (issues.length > 0) {
    const message = issues.map((issue) => `${issue.path}: ${issue.message}`).join("\n");
    throw new Error(`Invalid language guide:\n${message}`);
  }
}
