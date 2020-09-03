import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiSun, FiMoon, FiAlignRight } from "react-icons/fi";

import { PortfolioContext } from "../../context";
import { bp } from "../../GlobalStyles";

const Nav = () => {
  const { isDark, handleTheme } = useContext(PortfolioContext);

  return (
    <Wrapper>
      <Link to="/" className="nav__logo">
        RK
      </Link>

      <ul>
        <li>
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/works" className="nav__link">
            Works
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="nav__link">
            Blogs
          </Link>
        </li>
      </ul>
      <div>
        <button onClick={handleTheme} className="btn">
          {isDark ? <FiSun /> : <FiMoon />}
        </button>
        <button className="btn btn-menu">
          <FiAlignRight />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  .nav__logo {
    font-size: 5rem;
    font-weight: 600;
  }

  ul {
    display: none;

    @media (min-width: ${bp.md}) {
      display: flex;
    }
  }
  .nav__link {
    padding-left: 2rem;
    letter-spacing: 0.2rem;
    text-transform: capitalize;
  }
  .btn-menu {
    display: block;
    @media (min-width: ${bp.md}) {
      display: none;
    }
  }
`;

export default Nav;
