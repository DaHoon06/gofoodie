import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const addressSearchTab = style({
  width: "100%",
  height: 30,
  borderBottom: `1px solid #f7f7f7`,
});

export const currentTabActive = style({
  backgroundColor: vars.colors.white000,
  border: `1px solid ${vars.colors.gray000}`,
  position: "relative",
  top: 1,
});

export const currentTabUnActive = style({
  backgroundColor: "#f8f8f8",
  border: `1px solid ${vars.colors.gray000}`,
});

export const tabButton = style({
  padding: "0.5em",
  borderRadius: "4px 4px 0 0",
  borderColor: "transparent",
  display: "flex",
  alignItems: "center",
  gap: 4,
  borderTop: "1px solid #f6f6f6",
  borderLeft: "1px solid #f6f6f6",
  borderRight: "1px solid #f6f6f6",
});
