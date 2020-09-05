import React, { useContext } from "react";
import styled from "styled-components";

import { PortfolioContext } from "../../context";
import WorkItem from "./WorkItem";

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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;
