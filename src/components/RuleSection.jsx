import { splitLabel } from '../utils/formatText';
import HighlightedText from './HighlightedText';
import './RuleSection.css';

// Renders one category and its rules (rules are passed in from data/rules.js).
export default function RuleSection({ category, ruleList }) {
  const { id, kanji, title, group, variant, leadLabel } = category;
  return (
    <section className={`rule-section ${variant === 'ping' ? 'rule-section--warn' : ''}`} id={id} aria-labelledby={`${id}-heading`}>
      <header className="rule-section__head">
        <span className="rule-section__kanji" aria-hidden="true">{kanji}</span>
        <div>
          {group && <div className="rule-section__group">{group}</div>}
          <h2 id={`${id}-heading`}>{title}</h2>
        </div>
      </header>
      {variant === 'ping' && (
        <div className="rule-callout rule-callout--ping">
          <b>350 ms</b>
          <span><strong>Maximum ping in combat.</strong><br />Players above this limit must withdraw from combat immediately.</span>
        </div>
      )}
      {/* {variant === 'uniform' && (
        <>
          <div className="rule-callout">Designated uniform is mandatory.<small>Required during Dormitory Flag and Meteor events.</small></div>
          <div className="rule-callout rule-callout--safe">Players without the required uniform must not be targeted or attacked.<small>This protects players who are not in uniform.</small></div>
        </>
      )} */}
      <ol className="rule-section__list">
        {ruleList.map((text, i) => {
          const { label, body } = leadLabel ? splitLabel(text) : { label: '', body: text };
          return (
            <li key={i}>
              <span className="rule-section__text">
                {label && <strong>{label}: </strong>}
                <HighlightedText text={body} />
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
