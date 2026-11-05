import { useCallback, useEffect, useState } from 'react';
import { getStoredTheme, getSystemTheme, storeTheme } from '../utils/themeStorage';

// Saved choice wins; otherwise follow the OS. Applies data-theme to <html>.
export function useTheme() {
  const [theme, setTheme] = useState(() => getStoredTheme() ?? getSystemTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Follow live OS changes only while the user has not chosen a theme.
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mq) return undefined;
    const onChange = (e) => { if (!getStoredTheme()) setTheme(e.matches ? 'dark' : 'light'); };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      storeTheme(next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
