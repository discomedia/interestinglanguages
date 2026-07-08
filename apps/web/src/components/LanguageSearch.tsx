import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { LanguageGuideSummary } from "@interesting-languages/content";

type Props = {
  guides: LanguageGuideSummary[];
};

export function LanguageSearch({ guides }: Props) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const visibleGuides = useMemo(() => {
    if (!normalizedQuery) {
      return guides;
    }

    return guides.filter((guide) => {
      const haystack = `${guide.name} ${guide.autonym ?? ""} ${guide.summary}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [guides, normalizedQuery]);

  return (
    <section className="language-browser" aria-labelledby="language-browser-title">
      <div className="section-heading">
        <h2 id="language-browser-title">Browse language guides</h2>
        <p>Start with published learner guides, then expand into writing systems, related families, and resources.</p>
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
      <div className="guide-grid">
        {visibleGuides.map((guide) => (
          <a className="guide-card" href={`/${guide.slug}`} key={guide.slug}>
            <span>{guide.autonym ?? guide.name}</span>
            <h3>{guide.name}</h3>
            <p>{guide.summary}</p>
          </a>
        ))}
      </div>
      {visibleGuides.length === 0 && <p className="empty-state">No guides match that search yet.</p>}
    </section>
  );
}
