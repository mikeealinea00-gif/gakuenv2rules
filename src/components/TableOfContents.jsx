import './TableOfContents.css';

// Desktop: sticky sidebar list. Mobile (<900px): the list is hidden and a compact dropdown is shown instead.
export default function TableOfContents({ categories, activeId, onSelect }) {
  return (
    <div className="toc-wrap">
      <nav className="toc" aria-label="Table of contents">
        <h3>Table of contents</h3>
        <ul>
          {categories.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className={activeId === c.id ? 'is-active' : ''}
                aria-current={activeId === c.id ? 'true' : undefined}
                onClick={(e) => { e.preventDefault(); onSelect(c.id); }}
              >
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="toc-jump">
        <label htmlFor="toc-jump-select">Jump to category</label>
        <select id="toc-jump-select" value={activeId} onChange={(e) => onSelect(e.target.value)}>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.title}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
