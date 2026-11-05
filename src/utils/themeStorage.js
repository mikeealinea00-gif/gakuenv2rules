// Safe localStorage + OS-preference helpers. Keep STORAGE_KEY in sync with index.html.
export const STORAGE_KEY = 'gakuen-theme';
const isTheme = (v) => v === 'light' || v === 'dark';

export function getStoredTheme() {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return isTheme(v) ? v : null;
  } catch {
    return null; // storage blocked (private mode, disabled cookies, etc.)
  }
}

export function storeTheme(theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore: the theme still works for this visit */
  }
}

export const getSystemTheme = () =>
  window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
