import type { LanguageGuide } from "./types.js";

export type ValidationIssue = {
  path: string;
  message: string;
};

const isNonEmpty = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;

export function validateLanguageGuide(guide: LanguageGuide): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  const requireText = (path: string, value: unknown, minLength = 1) => {
    if (!isNonEmpty(value) || value.trim().length < minLength) {
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

  return issues;
}

export function assertValidLanguageGuide(guide: LanguageGuide): void {
  const issues = validateLanguageGuide(guide);

  if (issues.length > 0) {
    const message = issues.map((issue) => `${issue.path}: ${issue.message}`).join("\n");
    throw new Error(`Invalid language guide:\n${message}`);
  }
}
