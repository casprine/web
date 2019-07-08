import { createGlobalStyle } from "styled-components";
import { LinkBg } from "./theme";

const GlobalStyles = createGlobalStyle`

  @font-face {
     font-family: 'apercu';
     src: url('../static/fonts/Apercu-Regular.woff2') format("woff2");
     font-weight: normal;
     font-style: normal;
     font-display: swap;
 }
 
 
 @font-face {
     font-family: 'ibm-plex';
     src: url('../static/fonts/Ibm-Plex.woff2') format("woff2");
     font-weight: normal;
     font-style: normal;
     font-display: swap;
 }

  @font-face {
     font-family: 'inter-regular';
     src: url('../static/fonts/Inter.woff2') format("woff2");
     font-weight: normal;
     font-style: normal;
     font-display: swap;
 }
 
 @font-face {
     font-family: 'work-sans';
     src: url('../static/fonts/Work-Sans-Regular.woff2') format("woff2");
     font-weight: normal;
     font-style: normal;
     font-display: swap;
 }
 


 body {
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     font-family:"inter-regular", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
     scroll-behavior: smooth;
     font-feature-settings: "calt", "kern", "liga";
     margin: 0;
     padding: 0;
     -moz-osx-font-smoothing: grayscale;
 }


.outline-all {
     width: 85vw;
     margin-left: 50%;
     transform: translateX(-50%);
}
 
 #__next {
     height: inherit;
 }
 
 pre,
 code {
     font-family: "ibm-plex", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
 }

 pre {
     margin: 0 0 3rem 0 !important;
 }

 .center {
     display: flex;
     i {
         display: block;
     }
 }
 
a{
     text-decoration:none;
}

 hr {
     display: table-cell;
     width: 1px;
     height: 100%;
     border: 0;
 }
 

 .pointer {
     cursor: pointer;
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
