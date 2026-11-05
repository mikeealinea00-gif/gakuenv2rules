import { siteConfig } from '../data/siteConfig';
import heroLogo from '../assets/images/hero-logo.webp';
import './Hero.css';

// Decorative falling petals: [left %, duration s, delay s]
const petals = Array.from({ length: 9 }, (_, i) => [8 + i * 10.5, 9 + (i % 4) * 2, -i * 1.7]);

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__petals" aria-hidden="true">
        {petals.map(([left, duration, delay], i) => (
          <i key={i} className="petal" style={{ left: `${left}%`, animationDuration: `${duration}s`, animationDelay: `${delay}s` }} />
        ))}
      </div>
      <div className="container hero__inner">
        <div>
          <h1>{siteConfig.siteName}</h1>
          <h2>{siteConfig.handbookTitle}</h2>
          <p>{siteConfig.tagline}</p>
          <div className="hero__actions">
            <a className="btn" href="#overview">Explore the Rules</a>
            <a className="btn btn--ghost" href="#pvp">Combat Rules</a>
          </div>
        </div>
        <img className="hero__logo" src={heroLogo} width="520" height="520" alt="Gakuen V2 logo: a white-haired anime student in a pink blazer with cherry blossoms and a skull" />
      </div>
    </header>
  );
}
