import * as Switch from "@radix-ui/react-switch";
import * as Popover from "@radix-ui/react-popover";

import { styled } from "..";

export const SwitchRoot = styled(Switch.Root, {
  width: "42px",
  height: "25px",
  backgroundColor: "rgba(75, 75, 75, 0.4)",
  borderRadius: "9999px",
  position: "relative",
  boxShadow: "0 2px 10px black",
  border: "none",

  "&[data-state='checked']": {
    backgroundColor: "rgba(100, 100, 100, 1)",
  },
});

export const SwitchThumb = styled(Switch.Thumb, {
  display: "block",
  width: "21px",
  height: "21px",
  backgroundColor: "white",
  borderRadius: "9999px",
  boxShadow: "0 2px 2px black",
  transition: "transform 100ms",
  transform: "translateX(2px)",

  "&[data-state='checked']": {
    transform: "translateX(19px)",
  },
});

export const SwitchContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "1rem 1rem",
  borderRadius: "15px",
  color: "white",
  gap: "1rem",

  div: {
    display: "flex",
    alignItems: "center",

    gap: "1rem",
  },
});

export const PopoverTrigger = styled(Popover.Trigger, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.3rem",
  cursor: "pointer",

  backgroundColor: "rgba(25, 25, 25, 0.5)",
  color: "white",
  border: "none",
  borderRadius: "5px",

  position: "absolute",
  top: "5rem",
  right: "25rem",

  transition: "all 0.2s",

  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },

  "&[data-state='open']": {
    backgroundColor: "white",
    color: "black",
  },
});

export const Main = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

export const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "5rem",
  width: "48rem",
  borderRadius: "15px",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
});

export const Location = styled("div", {
  marginBottom: "2rem",
});

export const Weather = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  img: {
    width: "2rem",
    height: "2rem",
  },

  h1: {
    fontSize: "4.5rem",
  },

  div: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
  },
});
