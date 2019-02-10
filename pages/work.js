import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Layout, Header, SectionHeader } from "../src/components/shared/index";
import ProjectCard from "../src/components/work/projectCard";
import { projects } from "../src/data/projects";

const StyledWorkWrapper = styled.div`
  @media (max-width: 450px) {
    padding-bottom: 40px;
  }
`;

const Work = () => (
  <Fragment>
    <Head>
      <title> Casprine Assempah - Projects</title>
    </Head>

    <Layout>
      <Header />
      <SectionHeader />
      <StyledWorkWrapper className="grid-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </StyledWorkWrapper>
    </Layout>
  </Fragment>
);

export default Work;
