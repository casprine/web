import React, { Fragment } from "react";
import { ContextConsumer } from "../../context/index";
import styled from "styled-components";
import { body, grey, white } from "./theme";

const ThemeChanger = () => (
  <Fragment>
    <ContextConsumer>
      {({ theme, toggleTheme }) => (
        <StyledToggler onClick={toggleTheme}>
          <span className={theme ? "icon" : "light"} theme={theme}>
            {theme ? "◉" : "○"}
          </span>
          <span className="text">{theme ? "Night Mode" : "Light Mode"}</span>
        </StyledToggler>
      )}
    </ContextConsumer>
  </Fragment>
);

const StyledToggler = styled.div`
  color: ${white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  * {
    padding: 0 5px;
    display: block;
  }

  .light {
    line-height: 10px;
    align-self: center;
    padding-top: 1px;
    font-size: 30px;
  }
  .icon {
  }

  .text {
    font-family: "gte";
  }
`;

export default ThemeChanger;
