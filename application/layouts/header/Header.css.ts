import {style} from "@vanilla-extract/css";
import {vars} from "@/styles/theme.css";

const height = 66;

export const headerLayout = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 428,
  height,
  margin: '0 auto',
  minHeight: 'unset !important',
  padding: '0 20px',
  gap: 8,
  backgroundColor: vars.colors.white000,
  color: vars.colors.black100,
  position: 'sticky',
  top: '0',
  zIndex: 1100
});

export const headerLists = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height
})

export const logo = style({
  width: 'auto',
  height: 34
})
