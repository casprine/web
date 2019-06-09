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
      {({ theme, footer }) => (
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
      )}
    </ContextConsumer>
  </Fragment>
);

const StyledLayout = styled.div`
  background: ${body};
  background-repeat: repeat-x;
  background-position: top;
  height: 100%;
  outline: 1px solid red;

  * {
    outline: 1px solid red;
  }

  .children {
    background: rgba(0, 0, 0, 0)
      linear-gradient(rgba(0, 0, 32, 0), ${body} 320px) repeat scroll 0% 0%;
    padding: 0 10rem;
    width: 900px;
    @media (max-width: 1307px) and (min-width: 749px) {
      padding: 0 1rem;
    }
    @media (max-width: 750px) {
      padding: 0 2rem;
      background: ${body};
    }
  }
`;

export default Layout;
