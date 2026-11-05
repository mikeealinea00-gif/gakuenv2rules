# Gakuen V2 Roleplay – Official Rules and Regulations

A React + Vite site presenting the official Gakuen V2 rules: searchable, printable, responsive. No backend or paid services.

## Requirements
Node.js 18+ and npm.

## Commands
```bash
npm install        # install dependencies
npm run dev        # development server (http://localhost:5173)
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Folder structure
```text
public/          favicon and logo (served as-is)
src/data/        rules.js (rule text), categories.js (titles, icons), siteConfig.js (settings)
src/components/  one JSX + CSS pair per UI piece (Navbar, Hero, RuleSection, ...)
src/pages/       Home.jsx composes the page
src/hooks/       useActiveSection.js (scroll tracking)
src/utils/       searchRules.js (search), formatText.js (highlighting)
src/styles/      variables, global, layout, responsive, print CSS
```

## Common edits
- **Change a rule:** edit the text in `src/data/rules.js`.
- **Add a category:** add an entry to `src/data/categories.js` (unique `id`, `kanji`, `title`, `description`, a Lucide `icon`), then add an array with the same key in `src/data/rules.js`. Cards, table of contents, search and print update automatically.
- **Discord URL:** `discordUrl` in `src/data/siteConfig.js` (currently a placeholder).
- **Last-updated date:** `lastUpdated` in `src/data/siteConfig.js` (currently a placeholder).
- **Theme colors:** the variables in `src/styles/variables.css`.

## Deployment
Run `npm run build` and upload the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). The build uses relative paths (`base: './'`).

## Light / dark theme
- Colors live in `src/styles/variables.css`: light values under `:root`, dark values under `:root[data-theme='dark']`. Components only use the `--color-*` variables, so a new color is changed in one place.
- `src/hooks/useTheme.js` holds the theme state and sets `data-theme` on `<html>`; `src/components/ThemeToggle.jsx` is the navbar button.
- `src/utils/themeStorage.js` reads/writes `localStorage` (key `gakuen-theme`) safely. A saved choice wins; otherwise the OS `prefers-color-scheme` is used.
- A tiny script in `index.html` sets the theme before first paint to avoid a flash. If you change the storage key, update it there too.
- Printing always uses a light, ink-friendly palette (`src/styles/print.css`), whatever theme is active.

## Branding and images
- Logo, hero artwork and footer banner live in `src/assets/images/` (`logo.webp`, `hero-logo.webp`, `footer-art.jpg`). Replace the files (same names) to change them. The tab icon is `public/favicon.webp`.
- `footer-art-dark.webp` is a transparent copy of the footer banner used in dark mode; if you change `footer-art.jpg`, make a matching transparent version.
- The black and hot-pink palette is in `src/styles/variables.css` (`--crimson`, `--gold` is the soft pink accent, `--black`). Fonts (Shippori Mincho B1, Zen Kaku Gothic New) load from Google Fonts in `index.html`.
