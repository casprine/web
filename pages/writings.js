import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Layout, Header, SectionHeader } from "../src/components/shared/index";

const Writings = () => {
  return (
    <Fragment>
      <Head>
        <title>Casprine's Writings</title>
      </Head>
      <Layout>
        <Header />
        <p>Hey shit</p>
      </Layout>
    </Fragment>
  );
};

export default Writings;
