import React, { useState, useEffect } from "react";

import { worksData } from "./data";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, defaultTheme, darkTheme } from "../GlobalStyles";

// Setup Context
const PortfolioContext = React.createContext();

// Setup HOC that return Context.Provider
const PortfolioProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [isDark, setIsDark] = useState(false);
  // mock data for later
  const [works, setWorks] = useState([]);
  // const [blogs, setBlogs] = useState(blogsData);

  const handleTheme = () => {
    theme === defaultTheme ? setTheme(darkTheme) : setTheme(defaultTheme);
    theme === defaultTheme ? setIsDark(true) : setIsDark(false);
  };

  useEffect(() => {
    setWorks(formatWorks(worksData));
  }, []);

  const formatWorks = (items) => {
    let newItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let work = { ...item.fields, id, images };
      return work;
    });
    return newItems;
  };
  const getWork = (id) => {
    let tempWorks = [...works];
    const work = tempWorks.find((item) => item.id === id);
    return work;
  };

  return (
    <PortfolioContext.Provider
      value={{ theme, isDark, handleTheme, works, getWork }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };
