import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const locationItemWrapper = style({
  margin: "0.5em 0",
  width: "100%",
  height: "100%",
  display: "inline-block",
});

export const input = style({
  boxSizing: "border-box",
  backgroundColor: vars.colors.backgroundColor,
  borderRadius: 2,
  border: `1px solid ${vars.colors.gray000}`,
  color: vars.colors.black500,
  width: "100%",
  height: 38,
  outline: "none",
  padding: "0.2em 0.8em",

  selectors: {
    "&:focus": {
      borderColor: vars.colors.primary,
      backgroundColor: vars.colors.white000,
    },
    "&::placeholder": {
      color: vars.colors.gray300,
    },
  },
});