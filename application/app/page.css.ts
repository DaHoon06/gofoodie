import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const homeContainerLayout = style({
  width: "100%",
  maxWidth: vars.width.max,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  marginLeft: "unset",
  marginRight: "unset",
  paddingLeft: "0 !important",
  paddingRight: "0 !important",
  boxShadow: "0 0 16px rgb(50, 50, 50 / 12%)",

  // "@media": {
  //   "screen and (max-width: 1024px)": {
  //     width: "466px",
  //   },
  //   "screen and (max-width: 480px)": {
  //     width: "100vw",
  //   },
  // },
});
