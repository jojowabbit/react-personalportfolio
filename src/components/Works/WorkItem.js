import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SiNetlify, SiGithub } from "react-icons/si";

import { shadows, colors } from "../../GlobalStyles";

const Work = ({ work }) => {
  let { id, name, stacks, completed, images } = work;
  stacks = stacks.map((item, index) => {
    return (
      <li key={index}>
        <span>#{item}</span>
      </li>
    );
  });

  return (
    <Wrapper>
      <div className="img-container">
        <img src={images} alt={name} />
        <Link to={`/works/${id}`} className="btn btn-primary work-link">
          details
        </Link>
      </div>

      <div className="work-container">
        <div className="work-info">
          <h6>{name}</h6>
          <p>
            status: <em>{completed ? "completed" : "ongoing"}</em>
          </p>
          <ul>{stacks}</ul>
        </div>

        <div className="work-footer">
          <a
            href="https://jw-react-beach-resort.netlify.app/"
            className="btn btn-primary"
          >
            <SiNetlify />
          </a>
          <a
            href="https://github.com/jojowabbit/react-beach-resort-app"
            className="btn btn-primary"
          >
            <SiGithub />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Work;

const Wrapper = styled.article`
  margin: 1.5rem 2rem;
  border-radius: 0.25rem;
  box-shadow: ${shadows.s3};
  text-transform: capitalize;
  background-color: ${colors.gray.s2};
  color: ${colors.gray.s8};
  .img-container {
    height: 20rem;
    position: relative;

    overflow: hidden;
    .work-link {
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img {
      transition: all 0.45s;
    }
    &:hover img {
      opacity: 0.7;
      scale: 1.2;
    }
    &:hover .work-link {
      opacity: 1;
    }
  }
  .work-container {
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    line-height: 1.6;

    .work-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      ul {
        display: flex;
        li {
          padding: 0 0.5rem;

          span {
            background-color: ${colors.gray.s3};
            color: ${colors.primary.s9};
            padding: 0.5rem;
            border-radius: 0.25rem;
          }
        }
      }
    }
    .work-footer {
      padding-left: 2rem;
      a {
        margin-right: 0.5rem;
        display: block;
        text-align: center;
      }
    }
  }
`;
