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
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    scroll-behavior: smooth;
font-feature-settings: "calt", "kern", "liga";
    margin:0;
    padding:0;
    -moz-osx-font-smoothing: grayscale;

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

  #nprogress {
      pointer-events: none
  }
  
  #nprogress .bar {
      background: #2b6cb0;
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px
  }
  
  #nprogress .peg {
      display: block;
      position: absolute;
      right: 0;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #2b6cb0, 0 0 5px #2b6cb0;
      opacity: 1;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
      transform: rotate(3deg) translate(0px, -4px)
  }
  
  #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px
  }
  
  #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: #2b6cb0;
      border-left-color: #2b6cb0;
      border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
      animation: nprogress-spinner 400ms linear infinite
  }
  
  .nprogress-custom-parent {
      overflow: hidden;
      position: relative
  }
  
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
      position: absolute
  }
  
  @-webkit-keyframes nprogress-spinner {
      0% {
          -webkit-transform: rotate(0deg)
      }
      100% {
          -webkit-transform: rotate(360deg)
      }
  }
  
  @keyframes nprogress-spinner {
      0% {
          transform: rotate(0deg)
      }
      100% {
          transform: rotate(360deg)
      }
  }




`;

export default GlobalStyles;
