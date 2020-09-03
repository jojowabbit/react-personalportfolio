import React, { useState, useEffect } from "react";

import { defaultTheme, darkTheme } from "../GlobalStyles";

// Setup Context
const PortfolioContext = React.createContext();

// Setup HOC that return Context.Provider
const PortfolioProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [isDark, setIsDark] = useState(false);

  const handleTheme = () => {
    theme === defaultTheme ? setTheme(darkTheme) : setTheme(defaultTheme);
    theme === defaultTheme ? setIsDark(true) : setIsDark(false);
  };

  return (
    <PortfolioContext.Provider value={{ theme, isDark, handleTheme }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };
