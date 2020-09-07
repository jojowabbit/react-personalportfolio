import React, { useContext } from "react";
import styled from "styled-components";

import { PortfolioContext } from "../../context";
import WorkItem from "./WorkItem";
import { bp } from "../../GlobalStyles";

const WorkList = () => {
  const { works } = useContext(PortfolioContext);

  return (
    <Wrapper>
      {works.map((item) => {
        return <WorkItem key={item.id} work={item} />;
      })}
    </Wrapper>
  );
};

export default WorkList;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 1.5rem;
  @media (min-width: ${bp.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${bp.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
