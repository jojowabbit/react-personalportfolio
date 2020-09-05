import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hero from "../images/hero.svg";
import { bp, colors } from "../GlobalStyles";

export default function Home() {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={hero} alt="hero" />
      </div>
      <header>
        <h1>
          Hello, this is <span>Rk</span>
        </h1>
        <h3>a front-end web developer.</h3>
        <Link to="/works" className="btn btn-primary">
          see my works
        </Link>
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
  header {
    text-align: left;
    padding-top: 2rem;
    @media (min-width: ${bp.md}) {
      padding-top: 0;
      padding-left: 2rem;
    }

    h1 {
      font-size: 6rem;
      span {
        color: ${colors.primary.s5};
      }
    }
    h3 {
      font-size: 4rem;
    }
  }
  .img-container {
    max-width: 50rem;
    width: 100%;
    padding-top: 2rem;
    @media (min-width: ${bp.md}) {
      padding-top: 0;
      padding-left: 2rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
