import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const apiBase = process.env.PAYLOAD_PUBLIC_API_URL;
if (!apiBase) throw new Error("PAYLOAD_PUBLIC_API_URL is required.");

const listResponse = await fetch(`${apiBase.replace(/\/$/, "")}/language-guides`);
if (!listResponse.ok) throw new Error(`Guide list returned ${listResponse.status}.`);
const list = await listResponse.json();
const docs = [];

for (const summary of list.docs ?? []) {
  const response = await fetch(`${apiBase.replace(/\/$/, "")}/language-guides/${summary.slug}`);
  if (!response.ok) throw new Error(`${summary.slug} returned ${response.status}.`);
  const payload = await response.json();
  docs.push(payload.doc);
}

await mkdir("tmp", { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const output = path.resolve("tmp", `production-guide-backup-${stamp}.json`);
await writeFile(output, `${JSON.stringify({ capturedAt: new Date().toISOString(), docs }, null, 2)}\n`);
console.log(`Backed up ${docs.length} public guide(s) to ${output}.`);
