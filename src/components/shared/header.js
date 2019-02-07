import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { white, grey } from "../shared/theme";
import { ContextConsumer } from "../../context/index";

const Header = () => (
  <Fragment>
    <ContextConsumer>
      {({ theme }) => (
        <Fragment>
          <ThemeProvider theme={{ mode: theme }}>
            <StyledHeader>logo and links here</StyledHeader>
          </ThemeProvider>
        </Fragment>
      )}
    </ContextConsumer>
  </Fragment>
);

const StyledHeader = styled.div`
  outline: 1px solid white;
  padding: 50px 0;
  color: ${white};
`;

export default Header;
