import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";

// Components
import { SectionHeader } from "../src/components/shared/index";
import ProjectCard from "../src/components/work/projectCard";

// Data
import { projects } from "../src/data/projects";

// Context
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
  </Fragment>
);

export default Work;
