import { useEffect } from "react";

export type Theme = "light" | "dark" | "auto";

export function useTheme(): (theme: Theme) => void {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    const getPreferredTheme = (): Theme => {
      if (storedTheme) return storedTheme;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const applyTheme = (theme: Theme) => {
      const isDark = theme === "dark" || (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);

      // For Bootstrap
      document.documentElement.setAttribute("data-bs-theme", isDark ? "dark" : "light");

      // For Tailwind
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Set theme initially
    applyTheme(getPreferredTheme());

    // Listen for system theme changes
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (!stored || stored === "auto") {
        applyTheme(e.matches ? "dark" : "light");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  // Return a setter for your buttons
  return (theme: Theme) => {
    localStorage.setItem("theme", theme);

    const isDark = theme === "dark" || (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    // For Bootstrap
    document.documentElement.setAttribute("data-bs-theme", isDark ? "dark" : "light");

    // For Tailwind
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
}
