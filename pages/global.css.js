import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   
  @font-face {
    font-family: 'apercu';
    src:  url('../static/fonts/Apercu-Regular.woff2') format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }


  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    scroll-behavior: smooth;
   font-variation-settings: "slnt" 0deg;  
    margin:0;
    padding:0;
  }
#__next{
  height: inherit;
}

.center{
  display:flex;

  i{
    display:block;
  }
}

hr{
  display: table-cell;
  width: 1px;
  height: 100%;
  border: 0;
}
a {
    position: relative;
    text-decoration:none;
  color:inherit;

  }

  

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
.pointer {
  cursor:pointer;
}






`;

export default GlobalStyles;
