import type { CitedText } from "./types.js";

export function cited(text: string, ...sourceIds: string[]): CitedText {
  return { text, sourceIds };
}

export function textOf(value: CitedText | undefined): string {
  if (!value) return "";
  return typeof value === "string" ? value : value.text;
}

export function sourceIdsOf(value: CitedText | undefined): string[] {
  return value && typeof value !== "string" ? value.sourceIds : [];
}
