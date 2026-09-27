import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import { languageGuides } from "../packages/content/dist/language-guides.js";

const dist = new URL("../apps/web/dist/", import.meta.url).pathname;
const site = "https://interestinglanguages.com";
const published = languageGuides.filter((guide) => guide.status === "published");
const routes = ["", "about", "privacy", ...published.map((guide) => guide.slug)];
const sitemap = await readFile(join(dist, "sitemap.xml"), "utf8");

for (const route of routes) {
  const html = await readFile(join(dist, route, "index.html"), "utf8");
  const canonical = route ? `${site}/${route}` : `${site}/`;
  assert.match(html, /<h1\b/u, `Missing visible heading: /${route}`);
  assert.ok(html.includes(`href="${canonical}"`), `Missing canonical URL: ${canonical}`);
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `Missing sitemap route: ${canonical}`);
  if (published.some((guide) => guide.slug === route)) {
    assert.ok(html.includes('id="sources"'), `Missing bibliography: /${route}`);
    assert.ok(html.includes('class="entry-section"'), `Missing guide sections: /${route}`);
  }
}

const robots = await readFile(join(dist, "robots.txt"), "utf8");
assert.ok(robots.includes(`${site}/sitemap.xml`), "Robots file points to the wrong sitemap");
await stat(join(dist, "_headers"));
const notFound = await readFile(join(dist, "404.html"), "utf8");
assert.ok(notFound.includes("We couldn't find that page."), "Missing static 404 page");
for (const serverFile of ["_worker.js", "functions", "server"]) {
  await assert.rejects(stat(join(dist, serverFile)), { code: "ENOENT" });
}

console.log(`Verified ${routes.length} complete static HTML routes, sitemap, robots.txt, and Pages headers.`);
