import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";

import { ContextConsumer } from "../../context/index";
import { stack, social } from "../../data/stack";
import { Stack } from "../shared";
import { white, grey } from "../shared/theme";

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
                  simple. <br /> Let me help you grow your business & make your
                  product look pretty while I'm at it.
                </div>
                <div className="stacks">
                  <span className="description text">
                    I currently work with{" "}
                  </span>
                  {stack.map((s, i) => (
                    <Stack key={i} name={s} />
                  ))}
                </div>

                <div className="social">
                  {social.map((s, i) => (
                    <a href={s.link} key={i}>
                      {s.title}
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
  width: 70%;
  font-family: "maison";

  @media (max-width: 750px) {
    width: 100%;
  }

  div {
    margin: 20px 0;
  }
  .heading {
    letter-spacing: -0.03em;
    word-wrap: break-word;
    font-size: 35px;
    color: ${white};
    text-rendering: auto;
    margin-bottom: 0.5rem;
  }

  .description {
    line-height: 28px;
  }

  .text {
    color: ${white};
    font-family: "inter";
    margin-right: 5px;
  }

  .stacks {
    outline: 1px solid red;

    .stack {
      outline: red;
      margin-right: 5px;
      margin-left: 0;
    }
  }

  .social {
    display: flex;
    a {
      margin-right: 5px;
      color: ${grey};
      text-transform: lowercase;
      cursor: pointer;

      @media (max-width: 750px) {
        display: none;
      }
    }
  }
`;

export default LeftSide;
