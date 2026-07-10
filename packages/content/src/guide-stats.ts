import { sampleGuides } from "./sample-data.js";
import { collectCitedText, guideWordCount } from "./validation.js";
import { sourceIdsOf } from "./citations.js";

for (const guide of sampleGuides) {
  const citedSources = new Set(collectCitedText({ ...guide, sources: undefined }).flatMap(sourceIdsOf));
  console.log([
    guide.slug.padEnd(18),
    `words=${String(guideWordCount(guide)).padStart(4)}`,
    `sources=${String(guide.sources.length).padStart(2)}`,
    `cited=${String(citedSources.size).padStart(2)}`,
    `grammar=${guide.grammar.topics.length}`,
    `phrases=${guide.phrases.length}`
  ].join("  "));
}
