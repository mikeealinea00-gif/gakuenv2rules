import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import logo from '../assets/images/logo.webp';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const links = [
  { href: '#top', label: 'Home' },
  { href: '#handbook', label: 'Rules and Regulations' },
  { href: '#pvp', label: 'Combat Rules' },
  { href: '#enforcement', label: 'Enforcement' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#top" onClick={close}>
          <img src={logo} alt="" width="44" height="44" />
          <span>Gakuen V2</span>
        </a>
        <nav id="nav-menu" className={`navbar__menu ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a className="btn navbar__discord" href={siteConfig.discordUrl} target="_blank" rel="noopener noreferrer" onClick={close}>Discord</a>
        </nav>
        <div className="navbar__actions">
          <ThemeToggle />
          <button className="navbar__toggle" aria-expanded={open} aria-controls="nav-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
