import type { APIRoute } from "astro";
import { fetchLanguageGuideSummaries, siteUrl } from "../lib/content";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const GET: APIRoute = async () => {
  const guides = await fetchLanguageGuideSummaries();
  const urls = [
    { location: siteUrl("/"), lastModified: undefined },
    { location: siteUrl("/about"), lastModified: undefined },
    { location: siteUrl("/privacy"), lastModified: undefined },
    ...guides.map((guide) => ({
      location: siteUrl(`/${guide.slug}`),
      lastModified: guide.publishedAt
    }))
  ];

  const entries = urls
    .map(
      ({ location, lastModified }) =>
        `  <url>\n    <loc>${escapeXml(location)}</loc>${
          lastModified ? `\n    <lastmod>${escapeXml(lastModified)}</lastmod>` : ""
        }\n  </url>`
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
};
