import type { LanguageGuide, LanguageGuideSummary } from "./types.js";

export function toGuideSummary(guide: LanguageGuide): LanguageGuideSummary {
  return {
    slug: guide.slug,
    name: guide.name,
    autonym: guide.autonym,
    summary: guide.summary,
    status: guide.status,
    publishedAt: guide.publishedAt,
    seo: guide.seo
  };
}

export function getPublishedGuides(guides: LanguageGuide[]): LanguageGuide[] {
  return guides.filter((guide) => guide.status === "published");
}

export function getPublishedGuideSummaries(guides: LanguageGuide[]): LanguageGuideSummary[] {
  return getPublishedGuides(guides).map(toGuideSummary);
}
