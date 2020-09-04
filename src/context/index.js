import React, { useState } from "react";

// import { worksData, blogsData } from "./data";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, defaultTheme, darkTheme } from "../GlobalStyles";

// Setup Context
const PortfolioContext = React.createContext();

// Setup HOC that return Context.Provider
const PortfolioProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [isDark, setIsDark] = useState(false);
  // mock data for later
  // const [works, setWorks] = useState(worksData);
  // const [blogs, setBlogs] = useState(blogsData);

  const handleTheme = () => {
    theme === defaultTheme ? setTheme(darkTheme) : setTheme(defaultTheme);
    theme === defaultTheme ? setIsDark(true) : setIsDark(false);
  };

  return (
    <PortfolioContext.Provider value={{ theme, isDark, handleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };
