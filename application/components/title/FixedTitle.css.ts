import { style } from "@vanilla-extract/css";

export const titleBoxLayout = style({
  width: "100%",
  backgroundColor: "#fff",
  position: "sticky",
  top: 0,
  borderBottom: "1px solid #dddddd",
  padding: "0 1em",
  zIndex: 99,
  display: "flex",
  height: 80,
  alignItems: "center",
  justifyContent: "center",
});

export const title = style({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  fontWeight: 600,
});

export const childrenContainer = style({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  padding: "0 0.8em",
});
