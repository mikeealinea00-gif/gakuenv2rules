import { Search, X, Printer } from 'lucide-react';
import './RuleSearch.css';

export default function RuleSearch({ query, onChange, resultCount, totalRules, categoryCount }) {
  return (
    <div className="search" role="search">
      <div className="search__box">
        <Search size={18} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Escape' && onChange('')}
          placeholder="Search every rule (e.g. RDM, ping, uniform)"
          aria-label="Search rules"
        />
        {query && (
          <button type="button" className="search__clear" onClick={() => onChange('')} aria-label="Clear search">
            <X size={16} />
          </button>
        )}
      </div>
      <p className="search__count" aria-live="polite">
        {query ? `${resultCount} ${resultCount === 1 ? 'match' : 'matches'}` : `${totalRules} rules in ${categoryCount} categories`}
      </p>
      {/* <button type="button" className="btn btn--line search__print" onClick={() => window.print()}>
        <Printer size={16} aria-hidden="true" /> Print Rules
      </button> */}
    </div>
  );
}
