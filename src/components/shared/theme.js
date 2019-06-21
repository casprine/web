import theme from "styled-theming";

export const black = theme("mode", {
  false: "white",
  true: "rgb(28,41,56)"
});

export const white = theme("mode", {
  false: "hsl(209, 61%, 16%)",
  true: "#fff"
});

export const grey = theme("mode", {
  false: "hsl(209, 34%, 30%)",
  true: "#fff"
});

export const projectCard = theme("mode", {
  false: " #2b6cb0",
  true: " #38a169"
});

export const body = theme("mode", {
  false: "#E7EEF8",
  true: "rgb(16, 23, 30)"
});

export const footer = theme("mode", {
  true: "#E7EEF8",
  false: "rgb(16, 23, 30) "
});

export const footerText = theme("mode", {
  false: "#fff",
  true: ""
});
