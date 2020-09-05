import React from "react";
import styled from "styled-components";

import { shadows, colors } from "../../GlobalStyles";

const Work = ({ work }) => {
  const { id, name, stacks, completed, images } = work;
  return (
    <Wrapper>
      <div className="img-container">
        <img src={images} alt={name} />
      </div>
      <div className="work-container">
        <div className="work-info">
          <h6>{name}</h6>
          <p>status: {completed ? "completed" : "ongoing"}</p>
          <ul>
            stacks:
            {stacks.map((item) => {
              return (
                <li key={id}>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="work-footer">
          <a
            href="https://jw-react-beach-resort.netlify.app/"
            className="btn btn-primary"
          >
            Live
          </a>
          <a
            href="https://github.com/jojowabbit/react-beach-resort-app"
            className="btn btn-primary"
          >
            Source
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Work;

const Wrapper = styled.article`
  width: 50rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: ${shadows.s2};
  text-transform: capitalize;
  .img-container {
    min-width: 40rem;
    height: 20rem;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .work-container {
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    line-height: 1.6;
    .work-info {
      ul {
        display: flex;
        li {
          padding: 0 0.5rem;

          span {
            background-color: ${colors.gray.s3};
            color: ${colors.primary.s9};
            padding: 0.5rem;
            border-radius: 999rem;
          }
        }
      }
    }
    .work-footer {
      a {
        margin-right: 0.5rem;
      }
    }
  }
`;
