const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Splits text into [{ text, match }] parts so the UI can wrap matches in <mark>.
export function splitByQuery(text, query) {
  const q = query.trim();
  if (!q) return [{ text, match: false }];
  return text
    .split(new RegExp(`(${escapeRegExp(q)})`, 'gi'))
    .filter(Boolean)
    .map((part) => ({ text: part, match: part.toLowerCase() === q.toLowerCase() }));
}

// Splits "No RDM: Do not..." into { label: 'No RDM', body: 'Do not...' }.
export function splitLabel(text) {
  const i = text.indexOf(': ');
  return i > 0 ? { label: text.slice(0, i), body: text.slice(i + 2) } : { label: '', body: text };
}
