// themes.js
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // setupTheme();
  }, []);

  const setupTheme = () => {
    let value = localStorage.getItem("theme");

    if (!value || value === "dark") {
      value = "light";
    } else {
      value = "dark";
    }
    localStorage.setItem("theme", value);
    setTheme(value);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(value);
  };

  const toggleTheme = () => {
    setupTheme();
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
