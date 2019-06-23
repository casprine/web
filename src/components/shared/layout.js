import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
import { withRouter } from "next/router";

// Context
import { ContextConsumer } from "../../context/index";

// Theme
import { body, grey, white } from "./theme";

// Components
import Header from "./header";
import { BlogPostLayout } from "../writings";
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

const Layout = withRouter(({ children, router }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <ContextConsumer>
      {({ theme, footer }) => {
        if (router.route.length > 10) {
          return (
            <ThemeProvider theme={{ mode: theme }}>
              <StyledLayout>
                <div
                  style={layoutStyles.wrapper}
                  className={!footer ? "children" : "children overflow"}
                >
                  <Header />
                  <BlogPostLayout route={router.route}>
                    {children}
                  </BlogPostLayout>
                </div>
              </StyledLayout>
            </ThemeProvider>
          );
        } else
          return (
            <ThemeProvider theme={{ mode: theme }}>
              <StyledLayout>
                <div
                  style={layoutStyles.wrapper}
                  className={!footer ? "children" : "children overflow"}
                >
                  <Header />

                  {children}
                </div>
              </StyledLayout>
            </ThemeProvider>
          );
      }}
    </ContextConsumer>
  </Fragment>
));

const StyledLayout = styled.div`
  background: ${body};
  height: 100%;
  background: ${body};

  .children {
    width: 70vw;

    @media (max-width: 1307px) and (min-width: 749px) {
      padding: 0 1rem;
    }

    @media (max-width: 1120px) {
      width: 90vw;
    }
    @media (max-width: 750px) {
      width: 100vw;
    }
  }
`;

export default Layout;
