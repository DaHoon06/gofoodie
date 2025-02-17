import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

/**
 * =======================
 * @description 버튼 유형
 * =======================
 */

export const defaultButton = style({
  borderRadius: 50,
  backgroundColor: vars.colors.primary,
  padding: "6px 12px",
});

export const gray = style({
  borderRadius: 2,
  backgroundColor: "#f9f9f9",
  border: "1px solid #ededed",
  padding: "0.8em 1em",
  color: "#bababa",
});

export const primary = style({
  borderRadius: 2,
  backgroundColor: "#FF7101",
  border: "1px solid transparent",
  padding: "0.8em 1em",
  color: vars.colors.white000,
});

export const icon = style({
  backgroundColor: "transparent",
  width: "fit-content",
  height: "auto",
});
