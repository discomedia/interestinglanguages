import { sampleGuides } from "./sample-data.js";
import { validateLanguageGuide } from "./validation.js";

let hasIssues = false;

if (sampleGuides.length !== 30) {
  hasIssues = true;
  console.error(`Expected 30 guide fixture(s), found ${sampleGuides.length}.`);
}

for (const guide of sampleGuides) {
  const issues = validateLanguageGuide(guide);

  if (issues.length > 0) {
    hasIssues = true;
    console.error(`\n${guide.slug}`);
    for (const issue of issues) {
      console.error(`- ${issue.path}: ${issue.message}`);
    }
  }
}

if (hasIssues) {
  process.exitCode = 1;
} else {
  console.log(`Validated ${sampleGuides.length} guide fixture(s).`);
}
