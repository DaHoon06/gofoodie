import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const feedLocationLayout = style({
  width: "100%",
  height: "100%",
  paddingRight: "2em",
  paddingLeft: "2em",
  paddingTop: "2em",
  paddingBottom: "4em",
  maxHeight: "80vh",
  overflowY: "auto",
});

export const addressSearchTab = style({
  width: "100%",
  height: 30,
  borderBottom: `1px solid #f7f7f7`,
});

export const currentTabActive = style({
  backgroundColor: vars.colors.white000,
  border: `1px solid ${vars.colors.gray000}`,
});

export const currentTabUnActive = style({
  backgroundColor: "#f8f8f8",
  border: `1px solid ${vars.colors.gray000}`,
});

export const tabButton = style({
  padding: "0.5em",
  borderRadius: "6px 6px 0 0",
  borderColor: "transparent",
  display: "flex",
  alignItems: "center",
  gap: 4,
  borderTop: "1px solid #f6f6f6",
  borderLeft: "1px solid #f6f6f6",
  borderRight: "1px solid #f6f6f6",
});

export const addressSearchContainer = style({
  margin: "1em 0",
  width: "100%",
  position: "relative",
});

export const feedLocationContainer = style({
  width: "100%",
  height: "100%",
  display: "inline-block",
  marginBottom: "1em",
});

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

export const fullAddressInput = style({
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
    "&::placeholder": {
      color: vars.colors.gray300,
    },
  },
});
