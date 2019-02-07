import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'gte';
    src:  url('../static/fonts/gte.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }



  @font-face {
    font-family: 'expo';
    src:  url('../static/fonts/expo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:"expo",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    scroll-behavior: smooth;
  }

  html , body {
    height: 100vh;
    margin:0;
    padding:0;
  }

#__next{
  height: inherit;
}

  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  .flex-wrap {
    display: flex;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  ul {
    li {
      list-style: none;
    }
  }

.grid-base,
.grid-3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.grid-3 > * {
  width: -webkit-calc(33.33% - 2 * 40px/3);
  width: calc(33.33% - 2 * 40px / 3);
  margin: 20px 0;
}
.grid-3 > *:nth-child(3n + 2) {
  margin-left: 40px;
  margin-right: 40px;
}

@media only screen and (max-width: 1420px) {
  .grid-3 > * {
    width: -webkit-calc(50% - 40px/2);
    width: calc(50% - 40px / 2);
  }
  .grid-3 > *:nth-child(3n + 2) {
    margin-left: auto;
    margin-right: auto;
  }
  .grid-3 > *:nth-child(2n + 1) {
    margin-right: 40px;
  }
}
@media only screen and (max-width: 740px) {
  .grid-3 > * {
    width: 100%;
  }
  .grid-3 > *:nth-child(2n + 1) {
    margin-right: auto;
  }
}

.padding {
  padding: 40px 90px;
  width: 90vw;
  margin-right: auto;
  margin-left: auto;
}
.padding-side {
  width: 85vw;
  margin-right: auto;
  margin-left: auto;
}
.padding-top {
  padding-top: 40px;
}
.padding-bottom {
  padding-bottom: 40px;
}

.pointer {
  cursor:pointer;
}


`;

export default GlobalStyles;
