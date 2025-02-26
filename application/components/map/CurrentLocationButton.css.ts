import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const CurrentLocationButtonLayout = style({
  width: 34,
  height: 34,
  borderRadius: "50%",
  backgroundColor: vars.colors.primary,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  position: "absolute",
  right: 20,
  bottom: 20,
  zIndex: 10,
});
