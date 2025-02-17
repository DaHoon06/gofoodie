import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const BorderSelectBox = style({
  position: "relative",
  width: "fit-content",
  padding: 8,
  borderRadius: 2,
  backgroundColor: vars.colors.white000,
  border: `1px solid ${vars.colors.gray000}`,
  alignSelf: "center",
  cursor: "pointer",
  color: vars.colors.black100,
  zIndex: 99,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 20,
  selectors: {
    "&::after": {
      content: "⌵",
      position: "relative",
      color: vars.colors.gray400,
      fontSize: 18,
    },
  },
});

export const selectBoxOptions = style({
  position: "absolute",
  listStyle: "none",
  top: 26,
  left: 4,
  minWidth: 100,
  width: "auto",
  overflow: "hidden",
  padding: 0,
  borderRadius: 4,
  backgroundColor: "#606060",
  zIndex: 99,
});

export const selectBoxOption = style({
  fontSize: 14,
  padding: "6px 8px",
  transition: "background-color 0.2s ease-in",
  textAlign: "center",
  borderBottom: "1px solid #6a6a6aa3",
  color: "#e1e1e1",
  selectors: {
    "&:last-child": {
      borderColor: "transparent",
    },
  },
});
