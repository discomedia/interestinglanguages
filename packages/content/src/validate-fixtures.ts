import { sampleGuides } from "./sample-data.js";
import { validateLanguageGuide } from "./validation.js";

let hasIssues = false;

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
