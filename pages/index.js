import React, { Fragment } from "react";
import Head from "next/head";
import { Layout, Header } from "../src/components/shared/index";
import { LeftSide, RightSide } from "../src/components/home/index";
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: row;
  .wrapper {
    margin: 0 auto;
  }

  @media (max-width: 750px) {
    flex-wrap: wrap;
    outline: 1px solid red;
    .left,
    .right,
    .wrapper {
      width: 100%;
      outline: 1px solid red;
    }
  }
`;

const Index = () => (
  <Fragment>
    <Head>
      <title>Casprine Assempah - Frontend Developer , Designer</title>
    </Head>
    <Layout>
      <Header />
      <StyledHome>
        <LeftSide />
        <RightSide />
      </StyledHome>
    </Layout>
  </Fragment>
);

export default Index;
