import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";

// Context
import { ContextConsumer } from "../../context/index";

// Data
import { stack, social } from "../../data/stack";

// Component
import { Stack } from "../shared";

// Theme
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
                  Hi, I am Casprine, frontend developer and ui designer based in
                  Ghana 🇬🇭 in love with React and CSS
                </div>

                <div className="description mb">
                  I design and develop experiences that make people's lives
                  simple. <br /> Let me help you grow your business & make your
                  product look pretty while I'm at it.
                </div>
                <div className="stacks mb">
                  <div className="text">I currently work with </div>
                  {stack.map((s, i) => (
                    <Stack key={i} name={s} />
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

  @media (max-width: 750px) {
    width: 100%;
  }

  .mb {
    margin: 20px 0;
  }

  .heading {
    letter-spacing: -0.03em;
    word-wrap: break-word;
    font-size: 35px;
    color: ${white};
    text-rendering: auto;
    margin-bottom: 0.5rem;
    font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
  }

  .description {
    line-height: 28px;
    font-size: 18px;
    color: ${grey};
  }

  .text {
    color: ${white};
    font-size: 17px;
    margin-right: 5px;
    display: inline-block;
    line-height: 23px;
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
