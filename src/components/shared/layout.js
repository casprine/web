import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";

// Context
import { ContextConsumer } from "../../context/index";

// Theme
import { body, grey, white } from "./theme";

// Components
import Header from "./header";

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
      {({ theme, footer, router }) => {
        if (router.route.length > 10) {
          return (
            <ThemeProvider theme={{ mode: theme }}>
              <StyledLayout>
                <div
                  style={layoutStyles.wrapper}
                  className={!footer ? "children" : "children overflow"}
                >
                  <Header />
                  <StyledBlogPost>{children}</StyledBlogPost>
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
);

const StyledLayout = styled.div`
  background: ${body};
  height: 100%;
  background: ${body};

  .shit {
    outline: 1px solid red;
    * {
      outline: 1px solid red;
    }
  }
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

const StyledBlogPost = styled.div`
  width: 70%;
  margin: 0 auto;
  outline: 1px solid red;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong .h {
    font-family: "apercu";
    font-weight: 100 !important;
    font-size: 2rem;
    color: ${white};
  }

  p {
    color: ${grey};
    line-height: 28px;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
  }
`;

export default Layout;
