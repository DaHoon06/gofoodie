import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const carouselLayout = style({
  width: "100%",
  height: 280,
  backgroundColor: "rgba(227,227,227,0.7)",
});

export const carouselContainer = style({
  width: "100%",
  height: "100%",
});

export const carouselBanner = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});
export const carouselBannerImage = style({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,
});

export const carouselCountWrapper = style({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
});

export const carouselCount = style({
  position: "relative",
  bottom: 38,
  right: 4,
  zIndex: 1,
  backgroundColor: "rgba(79,79,79,0.61)",
  width: 46,
  height: 30,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "24px",
  color: vars.colors.white000,
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: "-0.3px",
});
