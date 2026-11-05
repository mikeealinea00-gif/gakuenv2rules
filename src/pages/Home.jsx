import { useMemo, useState } from 'react';
import { categories } from '../data/categories';
import { rules } from '../data/rules';
import { siteConfig } from '../data/siteConfig';
import { searchRules, countRules } from '../utils/searchRules';
import { splitLabel } from '../utils/formatText';
import { useActiveSection } from '../hooks/useActiveSection';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import RuleSearch from '../components/RuleSearch';
import RuleSection from '../components/RuleSection';
import TableOfContents from '../components/TableOfContents';
import NoticeBanner from '../components/NoticeBanner';
import HighlightedText from '../components/HighlightedText';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import './Home.css';

const categoryIds = categories.map((c) => c.id);

export default function Home() {
  const [query, setQuery] = useState('');
  const activeId = useActiveSection(categoryIds);
  const results = useMemo(() => searchRules(query, categories, rules), [query]);
  const searching = query.trim().length > 0;

  // Clears any search first so the target section is visible, then scrolls to it.
  const goTo = (id) => {
    setQuery('');
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }));
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="section overview" id="overview">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Rules overview</h2>
              <p className="section__lead">Choose a category to jump straight to it.</p>
            </div>
            <div className="overview__grid">
              {categories.map((c) => <CategoryCard key={c.id} category={c} onSelect={goTo} />)}
            </div>
          </div>
        </section>

        <section className="section" id="handbook">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Rules and Regulations</h2>
              <p className="section__lead">Search every category, or browse by section. Last updated: {siteConfig.lastUpdated}</p>
            </div>
            <RuleSearch query={query} onChange={setQuery} resultCount={results.length} totalRules={countRules(rules)} categoryCount={categories.length} />
            <p className="print-title" hidden>{siteConfig.siteName} – {siteConfig.handbookTitle}</p>
            <div className="handbook">
              <TableOfContents categories={categories} activeId={activeId} onSelect={goTo} />
              <div className="handbook__content">
                {searching && (
                  <div className="search-results" aria-live="polite">
                    {results.length === 0 ? (
                      <div className="no-results">
                        <strong>No rules match “{query}”.</strong>
                        <p>Check the spelling or try a shorter keyword.</p>
                        <button type="button" className="btn btn--line" onClick={() => setQuery('')}>Clear search</button>
                      </div>
                    ) : (
                      results.map(({ category, text, index }) => {
                        const { label, body } = category.leadLabel ? splitLabel(text) : { label: '', body: text };
                        return (
                          <article className="result" key={`${category.id}-${index}`}>
                            <small>{category.group ? `${category.group}: ` : ''}{category.title}</small>
                            <p>{label && <strong><HighlightedText text={label} query={query} />: </strong>}<HighlightedText text={body} query={query} /></p>
                            <a href={`#${category.id}`} onClick={(e) => { e.preventDefault(); goTo(category.id); }}>View in section</a>
                          </article>
                        );
                      })
                    )}
                  </div>
                )}
                <div className="rules-all" hidden={searching}>
                  {categories.map((c) => <RuleSection key={c.id} category={c} ruleList={rules[c.id]} />)}
                </div>
                <NoticeBanner />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
