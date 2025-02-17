import { style } from "@vanilla-extract/css";

export const textareaLayout = style({
  width: "100%",
  maxHeight: "70vh",
  height: "auto",
});

export const textarea = style({
  all: "unset",
  "-webkit-appearance": "none",
  "-moz-appearance": "none",
  appearance: "none",
  width: "100%",
  height: "1.7em",
  maxHeight: 600,
  background: "white",
  border: "none",
  resize: "none",
  overflow: "auto",
  boxSizing: "border-box",
  padding: "1em",
  outline: "none",
  color: "black",
  whiteSpace: "pre-wrap",

  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});
