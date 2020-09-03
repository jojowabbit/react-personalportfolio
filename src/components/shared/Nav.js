import React, { useContext } from "react";

import styled from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";

import { PortfolioContext } from "../../context";

const Nav = () => {
  const { isDark, handleTheme } = useContext(PortfolioContext);
  return (
    <nav>
      <button onClick={handleTheme} className="btn btn-primary">
        {isDark ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  );
};

export default Nav;
