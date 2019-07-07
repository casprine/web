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
  false: "rgb(55, 70, 95);",
  true: "#fff"
});

export const projectCard = theme("mode", {
  false: " #2b6cb0",
  true: " #38a169"
});

export const borders = theme("mode", {
  false: "#c5d4f1",
  true: "#9AE6B4"
});

export const body = theme("mode", {
  false: "#F7FAFC",
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

export const LinkBg = theme("mode", {
  false: "rgba(43, 108, 176, 0.5)",
  true: "rgba(56, 161, 105, 0.5)"
});
