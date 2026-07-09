import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { LanguageGuideSummary } from "@interesting-languages/content";

type Props = {
  guides: LanguageGuideSummary[];
};

const allOption = "All";

function unique(values: string[]) {
  return [allOption, ...Array.from(new Set(values)).sort((a, b) => a.localeCompare(b))];
}

function includes(value: string, query: string) {
  return value.toLowerCase().includes(query);
}

export function LanguageSearch({ guides }: Props) {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState(allOption);
  const [region, setRegion] = useState(allOption);
  const [script, setScript] = useState(allOption);
  const [difficulty, setDifficulty] = useState(allOption);
  const normalizedQuery = query.trim().toLowerCase();

  const options = useMemo(
    () => ({
      families: unique(guides.map((guide) => guide.family)),
      regions: unique(guides.map((guide) => guide.macroRegion)),
      scripts: unique(guides.map((guide) => guide.primaryScript)),
      difficulties: unique(guides.map((guide) => guide.difficultyLabel))
    }),
    [guides]
  );

  const visibleGuides = useMemo(() => {
    return guides.filter((guide) => {
      const haystack = [
        guide.name,
        guide.autonym ?? "",
        guide.summary,
        guide.family,
        guide.macroRegion,
        guide.primaryScript,
        guide.difficultyLabel,
        guide.learnerHook
      ].join(" ");

      return (
        (!normalizedQuery || includes(haystack, normalizedQuery)) &&
        (family === allOption || guide.family === family) &&
        (region === allOption || guide.macroRegion === region) &&
        (script === allOption || guide.primaryScript === script) &&
        (difficulty === allOption || guide.difficultyLabel === difficulty)
      );
    });
  }, [difficulty, family, guides, normalizedQuery, region, script]);

  const filters = [
    { label: "Family", value: family, setValue: setFamily, options: options.families },
    { label: "Region", value: region, setValue: setRegion, options: options.regions },
    { label: "Script", value: script, setValue: setScript, options: options.scripts },
    { label: "Difficulty", value: difficulty, setValue: setDifficulty, options: options.difficulties }
  ];

  return (
    <section className="language-browser" aria-labelledby="language-browser-title">
      <div className="browser-heading">
        <p>{visibleGuides.length} languages</p>
        <h2 id="language-browser-title">Search the reference</h2>
      </div>
      <label className="search-box">
        <Search aria-hidden="true" size={18} />
        <span className="sr-only">Search languages</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          placeholder="Search languages"
        />
      </label>
      <div className="filter-row" aria-label="Language filters">
        {filters.map((filter) => (
          <label key={filter.label}>
            <span>{filter.label}</span>
            <select value={filter.value} onChange={(event) => filter.setValue(event.currentTarget.value)}>
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
      <div className="guide-list">
        {visibleGuides.map((guide) => (
          <a className="guide-row" href={`/${guide.slug}`} key={guide.slug}>
            <span className="guide-name">
              <strong>{guide.name}</strong>
              {guide.autonym && <span>{guide.autonym}</span>}
            </span>
            <span>{guide.family}</span>
            <span>{guide.macroRegion}</span>
            <span>{guide.primaryScript}</span>
            <span>{guide.difficultyLabel}</span>
            <p>{guide.learnerHook}</p>
          </a>
        ))}
      </div>
      {visibleGuides.length === 0 && <p className="empty-state">No guides match those filters.</p>}
    </section>
  );
}
