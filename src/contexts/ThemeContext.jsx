import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Default to dark mode if no preference is saved
    return true;
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Update document class for global styling
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      // Background colors
      primary: isDark ? "bg-slate-900" : "bg-white",
      secondary: isDark ? "bg-slate-800" : "bg-gray-50",
      tertiary: isDark ? "bg-slate-700" : "bg-gray-100",

      // Text colors
      textPrimary: isDark ? "text-white" : "text-gray-900",
      textSecondary: isDark ? "text-gray-300" : "text-gray-600",
      textMuted: isDark ? "text-gray-400" : "text-gray-500",

      // Border colors
      border: isDark ? "border-slate-700" : "border-gray-200",
      borderLight: isDark ? "border-slate-600" : "border-gray-300",

      // Card backgrounds
      card: isDark ? "bg-slate-800" : "bg-white",
      cardHover: isDark ? "hover:bg-slate-700" : "hover:bg-gray-50",

      // Button styles
      buttonPrimary: isDark
        ? "bg-blue-600 hover:bg-blue-700"
        : "bg-blue-500 hover:bg-blue-600",
      buttonSecondary: isDark
        ? "bg-slate-700 hover:bg-slate-600"
        : "bg-gray-200 hover:bg-gray-300",

      // Input styles
      input: isDark
        ? "bg-slate-700 border-slate-600 text-white"
        : "bg-white border-gray-300 text-gray-900",
      inputFocus: isDark
        ? "focus:border-blue-500 focus:ring-blue-500"
        : "focus:border-blue-500 focus:ring-blue-500",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
