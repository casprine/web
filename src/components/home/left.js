import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { white, grey } from "../shared/theme";
import { ContextConsumer } from "../../context/index";
import { stack, socail } from "../../data/stack";
const LeftSide = () => {
  return (
    <Fragment>
      <ContextConsumer>
        {({ theme }) => (
          <ThemeProvider theme={{ mode: theme }}>
            <StyledLeftSide>
              <div className="wrapper">
                <div className="heading">
                  Hi, I'm Casprine, an independent designer, frontend developer
                  and ui enthusiast.
                </div>

                <div className="description">
                  I design and develop experiences that make people's lives
                  simple Let me help you grow your business & make your product
                  look pretty while I'm at it.
                </div>
                <div className="stack">
                  I currently work with
                  {stack.map((s, i) => (
                    <li key={i}>{s.name}</li>
                  ))}
                </div>

                <div className="social">
                  {socail.map((s, i) => (
                    <a href={s.link} key={i} class>
                      @{s.title}
                    </a>
                  ))}
                </div>
              </div>
            </StyledLeftSide>
          </ThemeProvider>
        )}
      </ContextConsumer>
    </Fragment>
  );
};

const StyledLeftSide = styled.div`
  color: ${white};
  width: 50%;

  div {
    margin: 40px 0;
  }
  .heading {
    font-size: 30px;
    font-family: "expo2";
    line-height: 38px;
  }

  .description,
  .stack {
    color: ${grey};
    font-family: "geo";
    line-height: 28px;
  }

  .stack {
    li {
      padding: 0 2px;
      display: inline-block;
      text-transform: capitalize;
      color: ${white};
      :first-child {
        padding-left: 5px;
      }
    }
  }

  .social {
    display: flex;
    flex-direction: column;

    a {
      padding: 10px 0;
      color: ${grey};
      text-transform: capitalize;
      transition-property: margin-left, opacity;
      transition-duration: 0.6s;
      transition-timing-function: cubic-bezier(0.8, 0.03, 0.25, 1);
      cursor: pointer;
      :hover {
        margin-left: 10px;
        opacity: 0.5;
      }
    }
  }
`;

export default LeftSide;
