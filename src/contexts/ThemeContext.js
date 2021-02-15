import React, { useState, createContext, useContext } from "react";

export const ThemeContext = createContext();
export const ThemeToggleContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useThemeToggle = () => {
  return useContext(ThemeToggleContext);
};

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeToggleContext.Provider value={toggleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
