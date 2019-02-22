import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ContextConsumer } from "../src/context/index";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>

        {/* <ContextConsumer>
          {({ footer }) => ( */}
        <body>
          <Main />
          <NextScript />
        </body>
        {/* )}
        </ContextConsumer> */}
      </html>
    );
  }
}
