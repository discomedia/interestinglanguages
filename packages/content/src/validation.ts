import type { LanguageGuide } from "./types.js";

export type ValidationIssue = {
  path: string;
  message: string;
};

const isNonEmpty = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;

export function validateLanguageGuide(guide: LanguageGuide): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  const requireText = (path: string, value: unknown) => {
    if (!isNonEmpty(value)) {
      issues.push({ path, message: "Required text is missing." });
    }
  };

  requireText("slug", guide.slug);
  requireText("name", guide.name);
  requireText("summary", guide.summary);
  requireText("learnerOverview", guide.learnerOverview);
  requireText("pronunciation.overview", guide.pronunciation?.overview);
  requireText("pronunciation.script", guide.pronunciation?.script);
  requireText("grammar.overview", guide.grammar?.overview);
  requireText("whereSpoken.overview", guide.whereSpoken?.overview);
  requireText("learningDifficulty", guide.learningDifficulty);
  requireText("seo.title", guide.seo?.title);
  requireText("seo.description", guide.seo?.description);

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(guide.slug)) {
    issues.push({ path: "slug", message: "Slug must be lowercase kebab-case." });
  }

  if (guide.status === "published" && !isNonEmpty(guide.publishedAt)) {
    issues.push({ path: "publishedAt", message: "Published guides need a publication date." });
  }

  if ((guide.grammar?.topics ?? []).length < 3) {
    issues.push({ path: "grammar.topics", message: "Add at least three grammar topics." });
  }

  if ((guide.whereSpoken?.regions ?? []).length < 2) {
    issues.push({ path: "whereSpoken.regions", message: "Add at least two spoken regions." });
  }

  if ((guide.resources ?? []).length < 3) {
    issues.push({ path: "resources", message: "Add at least three learning resources." });
  }

  if ((guide.relatedLanguages ?? []).length < 2) {
    issues.push({ path: "relatedLanguages", message: "Add at least two related languages." });
  }

  if ((guide.phrases ?? []).length < 8) {
    issues.push({ path: "phrases", message: "Add at least eight starter phrases." });
  }

  if ((guide.sources ?? []).length < 2) {
    issues.push({ path: "sources", message: "Add at least two sources." });
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
