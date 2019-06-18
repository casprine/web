import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
import { ContextConsumer } from "../../context/index";
import { body } from "./theme";

const layoutStyles = {
  wrapper: {
    minHeight: "100vh",
    Maxwidth: "800px",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column"
  }
};

const Layout = ({ children }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <ContextConsumer>
      {({ theme, footer }) => {
        return (
          <ThemeProvider theme={{ mode: theme }}>
            <StyledLayout>
              <div
                style={layoutStyles.wrapper}
                className={!footer ? "children" : "children overflow"}
              >
                {children}
              </div>
            </StyledLayout>
          </ThemeProvider>
        );
      }}
    </ContextConsumer>
  </Fragment>
);

const StyledLayout = styled.div`
  background: ${body};
  height: 100%;
  background: ${body};
  .children {
    width: 70vw;

    @media (max-width: 1307px) and (min-width: 749px) {
      padding: 0 1rem;
    }
    @media (max-width: 750px) {
      width: 90%;
    }
  }
`;

export default Layout;
