import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";

// Components
import {
  Header,
  SectionHeader,
  SEO,
  Container
} from "../../src/components/shared/index";

// Data
import { Article } from "../../src/components/writings/index";

// helpers
import { sortedWritings } from "../../src/utils/helpers";

const Writings = () => {
  const writings = sortedWritings();

  return (
    <Fragment>
      <SEO
        title="Casprine's writings"
        description="Experiments on CSS, React, Javascript and Design"
      />

      <Container>
        {writings.map((article, i) => {
          return <Article {...article} key={i} />;
        })}
      </Container>
    </Fragment>
  );
};

export default Writings;
