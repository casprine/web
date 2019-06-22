import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";

// components
import { Layout } from "../src/components/shared/index";
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
    <Head>
      <title>Hi, I'm Casprine </title>
    </Head>
    <StyledHome>
      <LeftSide />
      <RightSide />
    </StyledHome>
  </Fragment>
);

export default Index;
