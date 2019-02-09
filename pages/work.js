import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Layout, Header } from "../src/components/shared/index";
import ProjectCard from "../src/components/work/projectCard";
import { projects } from "../src/data/projects";

const StyledWorkWrapper = styled.div`
  outline: 1px solid red;

  * {
    /* outline: 1px solid red; */
  }
`;

const Work = () => (
  <Fragment>
    <Head>
      <title> Casprine Assempah - Projects</title>
    </Head>

    <Layout>
      <Header />
      <StyledWorkWrapper className="grid-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </StyledWorkWrapper>
    </Layout>
  </Fragment>
);

export default Work;
