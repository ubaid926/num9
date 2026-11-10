import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ variant = "navbar", className = "" }) {
  const { theme, isDark, toggleTheme } = useTheme();

  if (variant === "menu") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className={`inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 active:scale-95 text-white border border-white/25 transition-all duration-200 cursor-pointer text-[12px] sm:text-[13px] font-medium tracking-wide ${className}`}
      >
        <span className="relative w-3.5 h-3.5 flex items-center justify-center shrink-0">
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-white transition-transform duration-300" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-white transition-transform duration-300" />
          )}
        </span>
        <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
      </button>
    );
  }

  // Default: Navbar round icon button
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Activate light mode" : "Activate dark mode"}
      className={`relative w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full flex items-center justify-center border-[1.5px] border-slate-300 dark:border-[#28322B] bg-white dark:bg-[#171A18] text-slate-700 dark:text-[#E5E7EB] hover:border-slate-900 dark:hover:border-[#15B83E] hover:text-black dark:hover:text-[#15B83E] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-200 cursor-pointer shrink-0 group ${className}`}
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <div className="relative w-4 h-4 sm:w-[18px] sm:h-[18px] flex items-center justify-center overflow-hidden">
        {/* Sun Icon (Visible in dark mode) */}
        <Sun
          className={`w-4 h-4 sm:w-[18px] sm:h-[18px] text-amber-400 absolute transition-all duration-300 ease-out ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-50 pointer-events-none"
          }`}
        />

        {/* Moon Icon (Visible in light mode) */}
        <Moon
          className={`w-4 h-4 sm:w-[18px] sm:h-[18px] text-slate-700 group-hover:text-black absolute transition-all duration-300 ease-out ${
            isDark
              ? "opacity-0 rotate-90 scale-50 pointer-events-none"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />
      </div>
    </button>
  );
}

