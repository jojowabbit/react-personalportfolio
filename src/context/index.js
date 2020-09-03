import React, { useState } from "react";

import { defaultTheme, darkTheme, bp } from "../GlobalStyles";

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
    <PortfolioContext.Provider value={{ theme, isDark, handleTheme, bp }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };
