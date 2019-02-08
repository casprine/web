import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { white, grey } from "../shared/theme";
import { ContextConsumer } from "../../context/index";
import { projects } from "../../data/projects";
import Link from "next/link";

const RightSide = () => {
  const projs = projects.slice(0, 3);
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
                    <div className="project">
                      <li>{proj.about}</li>
                      <a href={proj.github}>
                        <li key={i}>@{proj.name}</li>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="blog">
                  <StyledHeading>@Writings</StyledHeading>
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

  .projects {
    .project {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 20px 0;
      li {
        list-style: none;
        padding: 0 5px;
        :last-child {
          width: 60px;
          text-align: right;
        }
        :first-child {
          font-size: 14px;
          color: ${grey};
          text-transform: lowercase;
        }
      }
    }
  }
`;

const StyledHeading = styled.div`
  font-family: "expo2";
  color: ${white};
  font-size: 20px;
`;

export default RightSide;
