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

export const border = theme("mode", {
  false: " hsl(209, 61%, 16%)",
  true: " hsl(36, 77%, 49%)"
});

export const darkBorder = theme("mode", {
  true: " hsl(209, 61%, 16%)",
  false: " hsl(36, 77%, 49%)"
});
