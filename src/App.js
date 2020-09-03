import React, { useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { PortfolioContext } from "./context";

import { GlobalStyles } from "./GlobalStyles";
import Nav from "./components/shared/Nav";

function App() {
  const { theme } = useContext(PortfolioContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav />
        <h1>App</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
