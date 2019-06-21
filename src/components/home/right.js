import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import Link from "next/link";

// Theme
import { white, grey, projectCard, borders } from "../shared/theme";

// Context
import { ContextConsumer } from "../../context/index";

// Data
import { projects } from "../../data/projects";
import { blogPosts } from "../../data/blogs";

// Components
import { Article } from "../writings/index";

const RightSide = () => {
  const projs = projects.slice(0, 3);
  const blogs = blogPosts.slice(0, 3);

  return (
    <Fragment>
      <ContextConsumer>
        {({ theme, footer }) => (
          <ThemeProvider theme={{ mode: theme }}>
            <StyledRightSide footer={footer}>
              <div className="wrapper">
                <StyledProjects className="projects">
                  <span>built</span>
                  {projs.map((proj, i) => {
                    return (
                      <StyledLink href={proj.link} key={i}>
                        {proj.name}
                      </StyledLink>
                    );
                  })}
                  <span>
                    and a some other stuff{" "}
                    <StyledLink href="/works">here</StyledLink>
                  </span>
                </StyledProjects>

                <div className="blog">
                  <StyledHeading>Writings</StyledHeading>
                  <div className="posts">
                    {blogs.map((b, i) => {
                      return <Article key={i}> {b.title} </Article>;
                    })}
                  </div>
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
  width: 70%;

  @media (max-width: 750px) {
    width: 100%;
    margin-bottom: ${props => (props.footer ? "15rem" : "4rem")};
  }

  .wrapper {
    margin: 0 auto 0 auto;
  }

  div {
    margin: 40px 0;
  }

  .blog {
    * {
      outline: 1px solid red;
    }
  }
`;

const StyledHeading = styled.div`
  font-family: "apercu";
  color: ${white};
  font-size: 1.5rem;
`;

const StyledProjects = styled.div`
  font-family: "apercu";
  font-size: 18px;
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
  margin: 0 0.2rem !important;
  display: inline-block;
  color: inherit;
  border-bottom: 2px solid ${borders};
  transition: all 0.25s;

  &:hover {
    border-bottom: 2px solid ${projectCard};
  }
`;

export default RightSide;
