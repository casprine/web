import React, { Fragment } from "react";
import Head from "next/head";
import { Layout, Header } from "../src/components/shared/index";
import { LeftSide, RightSide } from "../src/components/home/index";
import styled from "styled-components";

const StyledHome = styled.div`
  outline: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrapper {
    margin: 0 auto;
  }
  @media (max-width: 750px) {
    flex-wrap: PLFwrap;

    .wrapper {
      width: 100%;
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
