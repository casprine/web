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
                  Ghana 🇬🇭 in love with React and CSS.
                </div>

                {/* <div className="description mb"> */}
                {/*   I am a web and mobile developer <br /> Let me help you grow your business & make your */}
                {/*   product look pretty while I'm at it. */}
                {/* </div> */}
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

    @media (max-width: 750px) {
      font-size: 25px;
      margin-top: 20px;
    }
  }

  .description {
    line-height: 28px;
    color: ${grey};
    outline: 1px solid red;
    font-size: 16px;
    font-family: "inter-regular", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
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
