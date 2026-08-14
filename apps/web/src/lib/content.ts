import {
  getPublishedGuideSummaries,
  languageGuides,
  type LanguageGuide,
  type LanguageGuideSummary
} from "@interesting-languages/content";

export function getLanguageGuideSummaries(): LanguageGuideSummary[] {
  return getPublishedGuideSummaries(languageGuides);
}

export function getLanguageGuide(slug: string): LanguageGuide | undefined {
  return languageGuides.find((guide) => guide.slug === slug && guide.status === "published");
}

export function siteUrl(path = "/"): string {
  const base =
    import.meta.env.PUBLIC_SITE_URL ??
    import.meta.env.NEXT_PUBLIC_APP_URL ??
    process.env.PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_APP_URL ??
    "http://localhost:3081";
  return new URL(path, base.endsWith("/") ? base : `${base}/`).toString();
}
