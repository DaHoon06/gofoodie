import {style} from '@vanilla-extract/css';
import {vars} from "@/styles/theme.css";

export const appLayout = style({
  width: "100%",
  maxWidth: "unset",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "row",
  gap: 30,
  paddingLeft: "0 !important",
  paddingRight: "0 !important",
  justifyContent: "center",
  backgroundColor: vars.colors.backgroundColor,
});

export const appContainer = style({
  width: '100%',
  maxWidth: '428px !important',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.colors.white000,
  boxShadow: "0px 0px 16px rgb(50 50 50 / 12%)"
})

export const appMainContainer = style({
  width: '100%',
  maxWidth: '428px !important',
  position: "relative",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: "calc(100% - 162px)",
})
