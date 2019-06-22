import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";

// ContextProvider
import { ContextProvider } from "../src/context/index.js";

// GlobalStylyes
import GlobalStyle from "./global.css";

// LayoutRender
import { SectionHeader, Layout } from "../src/components/shared/";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <html lang="en" />
        </Head>
        <GlobalStyle />
        <ContextProvider value="dark">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </Container>
    );
  }
}

export default MyApp;

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};
