import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import Link from "next/link";

// Theme
import { white, grey, projectCard, borders } from "../shared/theme";

// Context
import { ContextConsumer } from "../../context/index";

// Data
import { projects } from "../../data/projects";

// Components
import { Article } from "../writings/index";

// helpers
import { sortedWritings } from "../../utils/helpers";

const RightSide = () => {
  const writings = sortedWritings();
  const latestPosts = writings.slice(0, 3);
  const projs = projects.slice(0, 3);

  return (
    <Fragment>
      <ContextConsumer>
        {({ theme, footer }) => (
          <ThemeProvider theme={{ mode: theme }}>
            <StyledRightSide footer={footer}>
              <div className="wrapper mb">
                <StyledProjects className="projects">
                  <span>made</span>
                  {projs.map((proj, i) => {
                    return (
                      <StyledLink href={proj.link} key={i} className="mlr">
                        {proj.name}
                      </StyledLink>
                    );
                  })}
                  <span>
                    and some other stuff{" "}
                    <Link prefetch passHref href="/work">
                      <StyledLink className="mlr">here</StyledLink>
                    </Link>
                  </span>
                </StyledProjects>

                <div className="mb">
                  <StyledHeading>Writings</StyledHeading>
                  <div className="posts">
                    {latestPosts.map((article, i) => {
                      return <Article {...article} key={i} />;
                    })}
                  </div>
                  <Link prefetch passHref href="/writings">
                    <StyledLink className="read-more">Read More</StyledLink>
                  </Link>
                </div>
              </div>
            </StyledRightSide>
          </ThemeProvider>
        )}
      </ContextConsumer>
    </Fragment>
  );
};

const StyledRightSide = styled.div`
  color: ${white};
  * {
    outline: 1px solid red;
  }
  @media (max-width: 750px) {
    margin-bottom: ${props => (props.footer ? "15rem" : "4rem")};
  }

  .mb {
    margin: 40px 0;
  }

  .mlr {
    margin: 0 0.2rem !important;
    color: ${grey};
  }

  .read-more {
    text-transform: capitalize !important;
    margin: 10px 0;
    color: ${projectCard};
  }
`;

const StyledHeading = styled.div`
  font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  color: ${white};
  font-size: 2rem;
`;

const StyledProjects = styled.div`
  font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-size: 18px;
  margin-top: 30px;
`;

const StyledBlogPost = styled.article`
  margin: 15px 0;
  color: ${grey};
  font-size: 14px;
  cursor: pointer;
  :hover {
    margin-right: 10px;
    opacity: 0.5;
  }
`;

const StyledLink = styled.a`
  text-transform: lowercase;
  color: ${grey};
  display: inline-block;
  color: inherit;
  border-bottom: 2px solid ${borders};
  transition: all 0.25s;

  &:hover {
    border-bottom: 2px solid ${projectCard};
  }
`;

export default RightSide;
