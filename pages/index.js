import React, { Fragment } from "react";
import Head from "next/head";
import { Layout, Header } from "../src/components/shared/index";
import { LeftSide, RightSide } from "../src/components/home/index";
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 30%);

  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

export default () => (
  <Fragment>
    <Head>
      <title>Casprine Assempah</title>
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
