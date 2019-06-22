import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";

// Components
import { Header, SectionHeader, SEO } from "../../src/components/shared/index";

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
      <StyledWrtings>
        {writings.map((article, i) => {
          return <Article {...article} key={i} />;
        })}
      </StyledWrtings>
    </Fragment>
  );
};

const StyledWrtings = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export default Writings;
