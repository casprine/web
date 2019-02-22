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
        {({ theme, footer }) => (
          <ThemeProvider theme={{ mode: theme }}>
            <StyledRightSide footer={footer}>
              <div className="wrapper">
                <div className="projects">
                  <Link href="/projects">
                    <StyledHeading>@Projects</StyledHeading>
                  </Link>
                  {projs.map((proj, i) => {
                    console.log(i);
                    return (
                      <StyledProject>
                        <span className="about">{proj.about}</span>
                        <StyledLink href={proj.github}>
                          <span key={i} className="link">
                            @{proj.name}
                          </span>
                        </StyledLink>
                      </StyledProject>
                    );
                  })}
                </div>

                <div className="blog">
                  <StyledHeading>@Writings</StyledHeading>
                  <div className="posts">
                    {blogs.map((b, i) => {
                      console.log(i);
                      return (
                        <StyledBlogPost key={i}> {b.title} </StyledBlogPost>
                      );
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
  width: 50%;

  @media (max-width: 750px) {
    width: 100%;
    margin-bottom: ${props => (props.footer ? "15rem" : "4rem")};
  }

  .wrapper {
    text-align: right;
    margin: 0 auto 0 auto;
    @media (max-width: 750px) {
      text-align: left;
    }
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

  @media (max-width: 750px) {
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }

  p {
    list-style: none;
  }

  a {
    width: 75px;
    text-transform: lowercase;
    text-align: right;

    @media (max-width: 750px) {
      text-align: left;
      width: 100%;
      font-size: 18px;
      padding: 10px 0;
    }
  }
  .about {
    color: ${grey};
    text-transform: lowercase;

    @media (max-width: 750px) {
      margin-left: auto;
    }
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

const StyledLink = styled.a`
  span {
    display: inline-block;
    position: relative;

    :after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      box-shadow: 0 1px rgba(255, 255, 255, 0.6);
      background: black;
    }

    :hover {
      background: hsl(36, 77%, 49%);
    }
  }
`;

export default RightSide;
