import './CategoryCard.css';

export default function CategoryCard({ category, onSelect }) {
  const Icon = category.icon;
  return (
    <a className="category-card" href={`#${category.id}`} onClick={(e) => { e.preventDefault(); onSelect(category.id); }}>
      <span className="category-card__kanji" aria-hidden="true">{category.kanji}</span>
      <span className="category-card__body">
        <span className="category-card__title"><Icon size={18} aria-hidden="true" /> {category.title}</span>
        <span className="category-card__desc">{category.description}</span>
        <span className="category-card__more">View rules →</span>
      </span>
    </a>
  );
}
