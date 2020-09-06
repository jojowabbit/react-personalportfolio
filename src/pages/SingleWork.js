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
  let { name, completed, tags, description, images } = work;
  tags = tags.map((item, index) => {
    return (
      <li key={index}>
        <span>#{item}</span>
      </li>
    );
  });
  return (
    <Wrapper>
      <h3 className="section-title">{name} details</h3>
      <div className="img-container">
        <img src={images} alt={name} />
      </div>
      <p className="completed">
        completion : {completed ? "completed" : "ongoing"}
      </p>
      <ul className="tags">tags : {tags}</ul>
      <p className="desc">{description}</p>
      <h6>
        to be addeD:
        <ol>
          <li>blocking</li>
          <li>solution</li>
          <li>visual fix</li>
        </ol>
      </h6>
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
