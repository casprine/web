import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
import { ContextConsumer } from "../../context/index";
import { body } from "./theme";

const Layout = ({ children }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <ContextConsumer>
      {({ theme }) => (
        <ThemeProvider theme={{ mode: theme }}>
          <StyledLayout>
            <div className="children">{children}</div>
          </StyledLayout>
        </ThemeProvider>
      )}
    </ContextConsumer>
  </Fragment>
);

const StyledLayout = styled.div`
  background: ${body};
  background-image: url("https://d30j33t1r58ioz.cloudfront.net/static/backgrounds/background-dark-grid-fade.png");
  background-repeat: repeat-x;
  background-position: top;
  height: 100%;
  .children {
    height: 100%;
    padding: 0 90px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0)
      linear-gradient(rgba(0, 0, 32, 0), ${body} 320px) repeat scroll 0% 0%;
  }
`;

export default Layout;
