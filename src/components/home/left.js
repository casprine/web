import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { white, grey } from "../shared/theme";
import { ContextConsumer } from "../../context/index";
import { stack } from "../../data/stack";
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
`;

export default LeftSide;
