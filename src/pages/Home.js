import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hero from "../images/hero.svg";
import { bp, colors } from "../GlobalStyles";

export default function Home() {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={hero} alt="hero image" />
      </div>
      <header>
        <h1>
          Hello, this is <span>RK</span>
        </h1>
        <h3>a front-end web developer.</h3>
        <button className="btn btn-primary">see my works</button>
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
  header {
    text-align: left;

    h1 {
      font-size: 6rem;
      span {
        color: ${colors.primary.s6};
      }
    }
    h3 {
      font-size: 4rem;
    }
    button {
      margin-top: 1.25rem;
    }
  }
  .img-container {
    max-width: 40rem;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
