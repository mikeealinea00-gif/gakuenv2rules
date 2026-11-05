// Case-insensitive partial-match search over every rule in every category.
export function searchRules(query, categories, rules) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return categories.flatMap((category) =>
    (rules[category.id] || [])
      .map((text, index) => ({ category, text, index }))
      .filter(({ text }) => text.toLowerCase().includes(q)),
  );
}

export const countRules = (rules) => Object.values(rules).reduce((n, list) => n + list.length, 0);
