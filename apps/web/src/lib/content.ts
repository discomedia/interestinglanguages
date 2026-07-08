import {
  sampleGuides,
  toGuideSummary,
  type LanguageGuide,
  type LanguageGuideSummary,
  type PublicGuideListResponse,
  type PublicGuideResponse
} from "@interesting-languages/content";

const apiBase =
  import.meta.env.PAYLOAD_PUBLIC_API_URL ??
  process.env.PAYLOAD_PUBLIC_API_URL ??
  process.env.PAYLOAD_ADMIN_URL?.replace(/\/$/, "") + "/api/public";

async function fetchJson<T>(path: string): Promise<T | undefined> {
  if (!apiBase || apiBase.includes("undefined")) {
    return undefined;
  }

  try {
    const response = await fetch(`${apiBase.replace(/\/$/, "")}${path}`);

    if (!response.ok) {
      console.warn(`Payload content API returned ${response.status} for ${path}. Falling back to fixtures.`);
      return undefined;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.warn(`Payload content API unavailable for ${path}. Falling back to fixtures.`, error);
    return undefined;
  }
}

export async function fetchLanguageGuideSummaries(): Promise<LanguageGuideSummary[]> {
  const apiResponse = await fetchJson<PublicGuideListResponse>("/language-guides");

  if (apiResponse?.docs?.length) {
    return apiResponse.docs;
  }

  return sampleGuides.filter((guide) => guide.status === "published").map(toGuideSummary);
}

export async function fetchLanguageGuide(slug: string): Promise<LanguageGuide | undefined> {
  const apiResponse = await fetchJson<PublicGuideResponse>(`/language-guides/${slug}`);

  if (apiResponse?.doc) {
    return apiResponse.doc;
  }

  return sampleGuides.find((guide) => guide.slug === slug && guide.status === "published");
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
