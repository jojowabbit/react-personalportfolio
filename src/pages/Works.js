import React from "react";
import styled from "styled-components";

import { colors } from "../GlobalStyles";
import WorkList from "../components/Works/WorkList";

export default function Works() {
  return (
    <Wrapper>
      <h2 className="section-title">works</h2>
      <WorkList />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .section-title {
    text-transform: capitalize;
    text-align: center;
    font-size: 5rem;
    padding: 2rem 0;
    color: ${colors.primary.s5};
  }
`;
