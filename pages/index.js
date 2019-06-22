import React, { Fragment } from "react";
import styled from "styled-components";

// components
import { SEO, Container } from "../src/components/shared/index";
import { LeftSide, RightSide } from "../src/components/home/index";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrapper {
    margin: 0 auto;
  }
  @media (max-width: 750px) {
    flex-wrap: wrap;
    .wrapper {
      width: 100%;
    }
  }
`;

const Index = () => (
  <Fragment>
    <SEO />
    <Container>
      <StyledHome>
        <LeftSide />
        <RightSide />
      </StyledHome>
    </Container>
  </Fragment>
);

export default Index;
