import { keyframes, styled } from "../../styles";
import * as Toast from "@radix-ui/react-toast";

const slideIn = keyframes({
  from: {
    transform: "translateX(calc(100% + 1.3rem))",
  },
  to: {
    transform: "translateX(0)",
  },
});

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

const swipeOut = keyframes({
  from: {
    transform: "translateX(0)",
  },
  to: {
    transform: "translateX(calc(100% + 1.3rem))",
  },
});

export const SearchContainer = styled("form", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  marginBottom: "2rem",
  position: "relative",

  div: {
    display: "flex",

    input: {
      flex: 1,
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      border: "none",
      borderRadius: "15px 0 0 15px",
      backgroundColor: "rgba(100,100,100,0.3)",
      color: "white",
    },
  },

  variants: {
    isResultsOpen: {
      true: {
        div: {
          input: {
            borderRadius: "15px 0 0 0 ",
          },
        },
      },
    },
  },
});

export const SearchButton = styled("button", {
  cursor: "pointer",
  padding: "0.5rem",
  color: "white",
  border: "none",
  borderRadius: "0 15px 15px 0 ",
  backgroundColor: "rgba(100,100,100,0.3)",
  transition: "all 0.2s",

  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },

  variants: {
    isResultsOpen: {
      true: {
        borderRadius: "0 15px 0 0 ",
      },
    },
  },
});

export const SearchResultsContainer = styled("div", {
  position: "absolute",
  width: "100%",
  top: "51px",
  left: 0,

  flexDirection: "column",

  backgroundColor: "white",
  borderRadius: "0 0 15px 15px",
  overflow: "hidden",

  variants: {
    isResultsOpen: {
      true: {
        display: "flex",
      },
      false: {
        display: "none !important",
      },
    },
  },
});

export const IndividualResult = styled("button", {
  color: "black",
  fontSize: "1rem",
  padding: "5px 0",
  border: "none",
  borderTop: "1px solid black",
  transition: "all .2s",

  "&:hover": {
    cursor: "pointer",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
});

export const ToastRoot = styled(Toast.Root, {
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  padding: "1.3rem",
  borderRadius: "15px",

  "&[data-state='open']": {
    animation: `${slideIn} 1500ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  "&[data-state='closed']": {
    animation: `${swipeOut} 150ms ease-in`,
  },

  "&[data-swipe='cancel']": {
    transform: "translateX(0)",
    transition: "transform 2000ms ease-out",
  },

  "&[data-swipe='end']": {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

export const ToastDescription = styled(Toast.Description, {});

export const ToastAction = styled(Toast.Action, {
  lineHeight: "0",
  padding: "5px",
  borderRadius: "15px",
  border: "none",
  marginLeft: "15px",
  cursor: "pointer",
  transition: "color 200ms",

  "&:hover": {
    padding: "3px",
    border: "2px solid white",
    color: "white",
    backgroundColor: "transparent",
  },
});

export const ToastViewport = styled(Toast.Viewport, {
  listStyle: "none",

  position: "fixed",
  bottom: "20px",
  right: "20px",
});
