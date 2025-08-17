import { useEffect } from 'react';

export type Theme = 'light' | 'dark' | 'auto';

export function useTheme(): (theme: Theme) => void {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;

    const getPreferredTheme = (): Theme => {
      if (storedTheme) return storedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = (theme: Theme) => {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme);
      }
    };

    // Set theme initially
    setTheme(getPreferredTheme());

    // Listen for system theme changes
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('theme') as Theme | null;
      if (!stored || stored === 'auto') {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  // Return a setter for your buttons
  return (theme: Theme) => {
    localStorage.setItem('theme', theme);
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  };
}
