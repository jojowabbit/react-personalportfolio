import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiSun, FiMoon, FiAlignRight } from "react-icons/fi";

import { PortfolioContext } from "../../context";
import { bp, colors, shadows } from "../../GlobalStyles";

const Nav = () => {
  const { isDark, handleTheme } = useContext(PortfolioContext);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const showNav = isNavOpen ? "showNav" : null;

  return (
    <Wrapper>
      <Link to="/" className="nav__logo">
        Rk
      </Link>

      {isDark ? (
        <FiSun onClick={handleTheme} className="btn-toggle" />
      ) : (
        <FiMoon onClick={handleTheme} className="btn-toggle" />
      )}

      <ul className={showNav}>
        <li>
          <Link
            to="/"
            className="nav__link"
            onClick={() => setIsNavOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/works"
            className="nav__link"
            onClick={() => setIsNavOpen(false)}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            to="/blogs"
            className="nav__link"
            onClick={() => setIsNavOpen(false)}
          >
            Blogs
          </Link>
        </li>
      </ul>

      <button className="btn btn-menu" onClick={handleNav}>
        <FiAlignRight />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  .nav__logo {
    font-size: 5rem;
    font-weight: 600;
    color: ${colors.primary.s5};
  }

  ul {
    display: none;
    @media (min-width: ${bp.md}) {
      display: flex;
    }
  }
  ul.showNav {
    display: block;
    opacity: 1;
    position: absolute;
    top: 8rem;
    width: 100%;
    background-color: ${colors.primary.s5};

    border-radius: 0.25rem;
    box-shadow: ${shadows.s2};
    z-index: 50;
  }
  ul.showNav .nav__link {
    color: ${colors.primary.s2};
  }
  li {
    padding: 2rem 0;
    text-align: center;
    @media (min-width: ${bp.md}) {
      padding: 0;
      text-align: initial;
    }
  }

  .nav__link {
    display: block;
    letter-spacing: 0.2rem;
    text-transform: capitalize;

    @media (min-width: ${bp.md}) {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      padding-left: 2rem;
    }
  }

  .btn-toggle {
    margin-left: auto;
    font-size: 2.5rem;
    cursor: pointer;
  }
  .btn-menu {
    display: block;
    margin-left: 2rem;
    font-size: 2.5rem;
    @media (min-width: ${bp.md}) {
      display: none;
    }
  }
`;

export default Nav;
