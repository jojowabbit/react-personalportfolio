import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import { PortfolioContext } from "../context";
import { colors } from "../GlobalStyles";

export default function SingleWork() {
  const { id } = useParams();
  const { getWork } = useContext(PortfolioContext);
  const work = getWork(id);

  if (!work) {
    return (
      <Wrapper>
        <h3>no work found</h3>
        <Link to="/works" className="btn btn-primary">
          back to works
        </Link>
      </Wrapper>
    );
  }
  let { name, completed, tags, description, images, blocking, solution } = work;
  tags = tags.map((item, index) => {
    return (
      <li key={index}>
        <span>#{item}</span>
      </li>
    );
  });
  return (
    <Wrapper>
      <h3 className="section-title">{name}</h3>
      <div className="img-container">
        <img src={images} alt={name} />
      </div>
      <p className="completed">
        completion : {completed ? "completed" : "ongoing"}
      </p>
      <ul className="tags">tags : {tags}</ul>
      <div className="details">
        <div className="desc">
          <h6>description</h6>
          <p>{description}</p>
        </div>
        <div className="blocking">
          <h6>blocking</h6>
          <p>{blocking}</p>
        </div>
        <div className="solution">
          <h6>solution</h6>
          <p>{solution}</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  line-height: 1.6;
  h3 {
    text-transform: capitalize;
    text-align: center;
    color: ${colors.primary.s5};
  }
  .img-container {
  }
  .tags {
    display: flex;
  }
`;
