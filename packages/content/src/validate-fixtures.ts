import { languageGuides } from "./language-guides.js";
import { textOf } from "./citations.js";
import { collectCitedText, validateLanguageGuide } from "./validation.js";

let hasIssues = false;

if (languageGuides.length !== 30) {
  hasIssues = true;
  console.error(`Expected 30 guide fixture(s), found ${languageGuides.length}.`);
}

for (const guide of languageGuides) {
  const issues = validateLanguageGuide(guide);

  if (issues.length > 0) {
    hasIssues = true;
    console.error(`\n${guide.slug}`);
    for (const issue of issues) {
      console.error(`- ${issue.path}: ${issue.message}`);
    }
  }
}

const paragraphOwners = new Map<string, string[]>();
for (const guide of languageGuides) {
  for (const value of collectCitedText({ ...guide, sources: undefined })) {
    const paragraph = textOf(value).replace(/\s+/g, " ").trim().toLowerCase();
    if (paragraph.length < 120) continue;
    paragraphOwners.set(paragraph, [...(paragraphOwners.get(paragraph) ?? []), guide.slug]);
  }
}
for (const [paragraph, owners] of paragraphOwners) {
  const uniqueOwners = [...new Set(owners)];
  if (uniqueOwners.length > 1) {
    hasIssues = true;
    console.error(`\nDuplicate long-form prose in ${uniqueOwners.join(", ")}: ${paragraph.slice(0, 100)}…`);
  }
}

if (hasIssues) {
  process.exitCode = 1;
} else {
  console.log(`Validated ${languageGuides.length} guide fixture(s).`);
}
