// Theme management utility - simplified dark mode logic
export function initializeTheme(): boolean {
  // Use system preference by default, with localStorage override
  const stored = localStorage.getItem("theme");
  
  if (stored) {
    const isDark = stored === "dark";
    applyTheme(isDark);
    return isDark;
  }

  // Default to system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark);
  return prefersDark;
}

export function toggleTheme(): boolean {
  const isDark = document.documentElement.classList.contains("dark");
  const newDarkState = !isDark;
  applyTheme(newDarkState);
  return newDarkState;
}

export function applyTheme(isDark: boolean): void {
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

export function listenToSystemThemeChanges(callback: (isDark: boolean) => void): () => void {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
  const handleChange = (e: MediaQueryListEvent) => {
    // Only apply system preference if user hasn't manually set a preference
    if (!localStorage.getItem("theme")) {
      callback(e.matches);
      applyTheme(e.matches);
    }
  };

  mediaQuery.addEventListener("change", handleChange);
  return () => mediaQuery.removeEventListener("change", handleChange);
}
