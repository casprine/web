import React, { Fragment, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { withRouter } from "next/router";

// Context
import { ContextConsumer } from "../../context/index";

// Theme
import { body, grey, white } from "./theme";

// Components
import Header from "./header";
import { Code, ArticleHeader, Share } from "../writings";
import SEO from "./seo";
// helpers
import me from "../../../config";

// Data
import writings from "../../data/writings.json";

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

const Layout = ({ children, router: { route } }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <ContextConsumer>
      {({ theme, footer }) => {
        if (route.length > 10) {
          const slug = route.replace("/writings/", "").replace("/");
          const url = `${me.url}${slug}`;
          const { title, desc = "", date } = writings[slug];

          return (
            <ThemeProvider theme={{ mode: theme }}>
              <StyledLayout>
                <div
                  style={layoutStyles.wrapper}
                  className={!footer ? "children" : "children overflow"}
                >
                  <Header />
                  <MDXProvider
                    components={{
                      code: Code
                    }}
                  >
                    <SEO title={title} url={url} />
                    <StyledBlogPost>
                      <ArticleHeader title={title} date={date} />
                      {children}
                      <Share title={title} url={url} />
                    </StyledBlogPost>
                  </MDXProvider>
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

export default withRouter(Layout);

const StyledLayout = styled.div`
  background: ${body};
  height: 100%;
  background: ${body};

  .children {
    width: 80vw;

    @media (max-width: 1307px) and (min-width: 749px) {
      padding: 0 1rem;
    }
    @media (max-width: 750px) {
      width: 90%;
    }
  }
`;

const StyledBlogPost = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (max-width: 750px) {
    width: 95%;
    margin-top: 15px;
    margin-bottom: 100px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-weight: 100 !important;
    color: ${white};
  }

  strong,
  b {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  p {
    color: ${grey};
    line-height: 28px;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
  * {
  }
`;
