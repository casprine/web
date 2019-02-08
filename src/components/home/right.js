import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { white, grey } from "../shared/theme";
import { ContextConsumer } from "../../context/index";
import { projects } from "../../data/projects";
import { blogPosts } from "../../data/blogs";
import Link from "next/link";

const RightSide = () => {
  const projs = projects.slice(0, 3);
  const blogs = blogPosts.slice(0, 4);
  return (
    <Fragment>
      <ContextConsumer>
        {({ theme }) => (
          <ThemeProvider theme={{ mode: theme }}>
            <StyledRightSide>
              <div className="wrapper">
                <div className="projects">
                  <Link href="/projects">
                    <StyledHeading>@Projects</StyledHeading>
                  </Link>
                  {projs.map((proj, i) => (
                    <StyledProject>
                      <span className="about">{proj.about}</span>
                      <a href={proj.github} className="link">
                        <span key={i}>@{proj.name}</span>
                      </a>
                    </StyledProject>
                  ))}
                </div>

                <div className="blog">
                  <StyledHeading>@Writings</StyledHeading>
                  <div className="posts">
                    {blogs.map((b, i) => (
                      <StyledBlogPost key={i}> {b.title} </StyledBlogPost>
                    ))}
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
  width: 50%;

  .wrapper {
    text-align: right;
    margin: 0 auto 0 auto;
  }

  div {
    margin: 40px 0;
  }
`;

const StyledHeading = styled.div`
  font-family: "expo2";
  color: ${white};
  font-size: 20px;
  cursor: pointer;
`;

const StyledProject = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 0 !important;
  font-size: 14px;

  span {
    list-style: none;
    padding: 0 5px;
  }

  a {
    width: 50px;
    text-align: right;
    text-transform: lowercase;
    text-align: left;
  }
  .about {
    /* margin-left: 10px; */
    color: ${grey};
    text-transform: lowercase;
  }
`;

const StyledBlogPost = styled.article`
  margin: 15px 0;
  color: ${grey};
  transition-property: margin-right, opacity;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.8, 0.03, 0.25, 1);
  cursor: pointer;
  :hover {
    margin-right: 10px;
    opacity: 0.5;
  }
`;

export default RightSide;
