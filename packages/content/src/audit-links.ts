import { sampleGuides } from "./sample-data.js";

const urls = [...new Set(sampleGuides.flatMap((guide) => [
  ...guide.sources.map((source) => source.url),
  ...guide.resources.map((resource) => resource.url),
  ...guide.advancedLearning.resources.map((resource) => resource.url)
]).filter((url): url is string => Boolean(url)))];

const definitiveFailures: string[] = [];
const transientFailures: string[] = [];
let cursor = 0;

async function check(url: string): Promise<void> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  try {
    let response = await fetch(url, { method: "HEAD", redirect: "follow", signal: controller.signal });
    if (response.status === 405 || response.status === 403) {
      response = await fetch(url, { method: "GET", redirect: "follow", signal: controller.signal });
    }
    if (response.status === 404 || response.status === 410) {
      definitiveFailures.push(`${response.status} ${url}`);
    } else if (!response.ok) {
      transientFailures.push(`${response.status} ${url}`);
    }
  } catch (error) {
    transientFailures.push(`${error instanceof Error ? error.name : "Error"} ${url}`);
  } finally {
    clearTimeout(timeout);
  }
}

async function worker(): Promise<void> {
  while (cursor < urls.length) {
    const url = urls[cursor++];
    if (url) await check(url);
  }
}

await Promise.all(Array.from({ length: Math.min(8, urls.length) }, () => worker()));

console.log(`Audited ${urls.length} unique content link(s).`);
if (transientFailures.length) {
  console.warn(`Transient or rate-limited responses (${transientFailures.length}):\n${transientFailures.join("\n")}`);
}
if (definitiveFailures.length) {
  console.error(`Broken links (${definitiveFailures.length}):\n${definitiveFailures.join("\n")}`);
  process.exitCode = 1;
}
