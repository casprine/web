import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";

// Components
import {
  Layout,
  Header,
  SectionHeader
} from "../../src/components/shared/index";

// Data
import { writings } from "../../src/data/blogs";
import { Article } from "../../src/components/writings/index";

const Writings = () => {
  return (
    <Fragment>
      <Head>
        <title>Casprine's Writings</title>
      </Head>
      <Layout>
        <Header />

        <StyledWrtings>
          {writings.map((article, i) => {
            return <Article {...article} key={i} />;
          })}
        </StyledWrtings>
      </Layout>
    </Fragment>
  );
};

const StyledWrtings = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export default Writings;
