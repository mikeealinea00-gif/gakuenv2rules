import { splitByQuery } from '../utils/formatText';

export default function HighlightedText({ text, query = '' }) {
  return splitByQuery(text, query).map((part, i) =>
    part.match ? <mark key={i}>{part.text}</mark> : <span key={i}>{part.text}</span>,
  );
}
