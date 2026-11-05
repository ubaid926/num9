import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  theme: "light",
  isDark: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  // const [theme, setThemeState] = useState(() => {
  //   if (typeof window === "undefined") return "light";
  //   try {
  //     const saved = localStorage.getItem("theme");
  //     if (saved === "dark" || saved === "light") return saved;
  //     if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //       return "dark";
  //     }
  //   } catch (e) {
  //     // Graceful fallback
  //   }
  //   return "light";
  // });
  const [theme, setThemeState] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  // Sync with OS system preference changes only if the user hasn't explicitly set a preference
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      try {
        const saved = localStorage.getItem("theme");
        if (!saved) {
          setThemeState(e.matches ? "dark" : "light");
        }
      } catch (err) {}
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 350);
  };

  const setTheme = (newTheme) => {
    if (newTheme !== "dark" && newTheme !== "light") return;
    const root = document.documentElement;
    root.classList.add("theme-transition");
    setThemeState(newTheme);
    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 350);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === "dark", toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

