import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    background: "linear-gradient(to bottom right, #1001a7 0%, #2f7ffd 100%)",
    backgroundRepeat: "no-repeat",
    color: "white",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});
