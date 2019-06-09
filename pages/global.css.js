import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 @font-face {
  font-family: 'inter';
  font-weight: 100 900;
  font-style: oblique 0deg 10deg;
  src: url("../static/fonts/inter.woff2") format("woff2-variations"),
       url("../static/fonts/inter.woff2") format("woff2");
}
  @font-face {
    font-family: 'maison';
    src:  url('../static/fonts/maison.woff') format("woff");
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

 * { 
   }
  .italic { 
    font-variation-settings: "slnt" 10deg;
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


@keyframes link {
	from {
		transform: scaleX(0);
	}
	to {
		transform: scaleX(1);
	}
}



`;

export default GlobalStyles;
