import theme from "styled-theming";

export const black = theme("mode", {
  false: "#deecff",
  true: "#201c29"
});

export const white = theme("mode", {
  false: "hsl(209, 61%, 16%)",
  true: "#fff"
});

export const grey = theme("mode", {
  false: "hsl(209, 34%, 30%)",
  true: "#fff"
});

export const body = theme("mode", {
  false: "#E7EEF8",
  true: "rgb(27,27,30)"
});

export const footer = theme("mode", {
  true: "#E7EEF8",
  false: "rgb(27,27,30)"
});

export const footerText = theme("mode", {
  false: "#fff",
  true: ""
});
