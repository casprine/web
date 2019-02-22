import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Layout, Header, SectionHeader } from "../src/components/shared/index";
import ProjectCard from "../src/components/work/projectCard";
import { projects } from "../src/data/projects";
import { ContextConsumer } from "../src/context/";

const StyledWorkWrapper = styled.div`
  @media (max-width: 750px) {
    margin-bottom: ${props => (props.footer ? "18rem" : "5rem")};
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
      <ContextConsumer>
        {({ footer }) => (
          <StyledWorkWrapper className="grid-3" footer={footer}>
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </StyledWorkWrapper>
        )}
      </ContextConsumer>
    </Layout>
  </Fragment>
);

export default Work;
