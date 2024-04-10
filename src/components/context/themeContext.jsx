import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  const theme = isDark ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
