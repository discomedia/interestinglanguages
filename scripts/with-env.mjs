import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

function findEnvFile(startDir) {
  let current = startDir;

  while (current !== path.dirname(current)) {
    const candidate = path.join(current, ".env");
    if (existsSync(candidate)) {
      return candidate;
    }
    current = path.dirname(current);
  }

  return undefined;
}

function parseEnv(contents) {
  const parsed = {};

  for (const line of contents.split(/\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separator = trimmed.indexOf("=");
    if (separator === -1) {
      continue;
    }

    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    parsed[key] = value;
  }

  return parsed;
}

const [command, ...args] = process.argv.slice(2);

if (!command) {
  console.error("Usage: node scripts/with-env.mjs <command> [...args]");
  process.exit(1);
}

const envFile = findEnvFile(process.cwd());
const env = {
  ...process.env,
  ...(envFile ? parseEnv(readFileSync(envFile, "utf8")) : {})
};

const child = spawn(command, args, {
  env,
  stdio: "inherit",
  shell: process.platform === "win32"
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
