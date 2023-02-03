import { styled } from "../../styles";

export const SearchContainer = styled("form", {
  display: "flex",
  width: "100%",
  marginBottom: "2rem",
  borderRadius: "15px",
  overflow: "hidden",

  input: {
    flex: 1,
    padding: "0.5rem",
    fontSize: "1rem",
    border: "none",
    backgroundColor: "rgba(100,100,100,0.3)",
    color: "white",
  },

  button: {
    cursor: "pointer",
    padding: "0.5rem",
    color: "white",
    border: "none",
    borderRadius: "0 15px 15px 0 ",
    backgroundColor: "rgba(100,100,100,0.3)",
  },
});
