import { chromium } from "playwright-core";

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const baseUrl = process.env.PUBLIC_VERIFY_URL ?? "http://localhost:3081";

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

const errors = [];
const desktop = await browser.newPage({
  viewport: {
    width: 1440,
    height: 1600
  },
  deviceScaleFactor: 1
});

desktop.on("console", (message) => {
  if (["error", "warning"].includes(message.type())) {
    errors.push(`${message.type()}: ${message.text()}`);
  }
});
desktop.on("pageerror", (error) => {
  errors.push(`pageerror: ${error.message}`);
});

const representativeGuides = ["swahili", "arabic", "mandarin-chinese", "persian", "navajo", "basque"];
const guideChecks = [];
for (const slug of representativeGuides) {
  await desktop.goto(`${baseUrl}/${slug}`, { waitUntil: "networkidle" });
  guideChecks.push({
    slug,
    h1: await desktop.locator("h1").first().textContent(),
    sectionCount: await desktop.locator(".entry-section").count(),
    sourceCount: await desktop.locator("#sources li").count(),
    citationCount: await desktop.locator(".citations a").count(),
    phraseCount: await desktop.locator("#in-use .phrase-list article").count()
  });
}

await desktop.goto(`${baseUrl}/swahili`, { waitUntil: "networkidle" });
const title = await desktop.title();
const h1 = await desktop.locator("h1").first().textContent();
const sectionCount = await desktop.locator(".entry-section").count();
const sourceCount = await desktop.locator("#sources li").count();
const desktopScreenshotPath = "tmp/swahili-desktop.png";
await desktop.screenshot({ path: desktopScreenshotPath, fullPage: true });

const mobile = await browser.newPage({
  viewport: {
    width: 390,
    height: 1200
  },
  isMobile: true
});

await mobile.goto(baseUrl, { waitUntil: "networkidle" });
await mobile.locator('input[type="search"]').fill("swa");
const mobileCardCount = await mobile.locator(".guide-row").count();
const mobileScreenshotPath = "tmp/home-mobile.png";
await mobile.screenshot({ path: mobileScreenshotPath, fullPage: true });

await browser.close();

const result = {
  title,
  h1,
  sectionCount,
  sourceCount,
  mobileCardCount,
  guideChecks,
  errors,
  desktopScreenshotPath,
  mobileScreenshotPath
};

console.log(JSON.stringify(result, null, 2));

if (h1 !== "Swahili") {
  throw new Error(`Expected Swahili H1, found ${h1}`);
}

if (sectionCount < 10) {
  throw new Error(`Expected at least 10 guide sections, found ${sectionCount}`);
}

if (sourceCount < 4) {
  throw new Error(`Expected at least 4 sources, found ${sourceCount}`);
}

for (const guide of guideChecks) {
  if (guide.sectionCount < 11 || guide.sourceCount < 10 || guide.citationCount < 8 || guide.phraseCount < 10) {
    throw new Error(`Representative guide verification failed: ${JSON.stringify(guide)}`);
  }
}

if (mobileCardCount < 1) {
  throw new Error("Expected mobile search to show at least one guide.");
}

if (errors.length > 0) {
  throw new Error(`Browser console/page errors found:\n${errors.join("\n")}`);
}
