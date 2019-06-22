import React, { Fragment } from "react";
import styled from "styled-components";

// Components
import { SectionHeader, SEO, Container } from "../src/components/shared/index";
import ProjectCard from "../src/components/work/projectCard";

// Data
import { projects } from "../src/data/projects";

// Context
import { ContextConsumer } from "../src/context/";

const Work = () => (
  <Fragment>
    <SEO />
    <Container>
      <SectionHeader />
      <ContextConsumer>
        {({ footer }) => (
          <StyledWorkWrapper footer={footer}>
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </StyledWorkWrapper>
        )}
      </ContextConsumer>
    </Container>
  </Fragment>
);

const StyledWorkWrapper = styled.div`
  @media (max-width: 750px) {
    margin-bottom: ${props => (props.footer ? "18rem" : "5rem")};
  }
`;
export default Work;
