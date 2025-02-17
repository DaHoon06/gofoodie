import React, { ComponentProps, ReactElement } from "react";
import { vars } from "@/styles/theme.css";

export type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption";
export type FontWeightType = 100 | 300 | 400 | 500 | 600 | 700;
export type FontColorType =
  | "black000"
  | "black100"
  | "white000"
  | "gray000"
  | "gray300"
  | "gray400"
  | "gray500"
  | "primary";

export type LetterSpacing = "-2" | "-1.5" | "-1" | "-0.5" | "1";

export interface TypographyProps extends ComponentProps<"p"> {
  variant?: Variant;
  fontWeight?: FontWeightType;
  fontSize?: number;
  color?: FontColorType;
  letterSpacing?: LetterSpacing;
  lineHeight?: number;
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
}

const element: { [key in Variant]: string } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  caption: "caption",
};

function baseElement(props: TypographyProps) {
  const {
    className,
    variant = "p",
    fontWeight = 300,
    fontSize = 16,
    color = "black100",
    lineHeight = 18,
    letterSpacing = "-0.5",
    children,
    as,
    ...rest
  } = props;
  return React.createElement(
    as || element[variant],
    {
      className,
      style: {
        color: vars.colors[color],
        fontWeight,
        fontSize: `min(5vw, ${fontSize}px)`,
        lineHeight: `${lineHeight}px`,
        letterSpacing: `${letterSpacing}px`,
      },
      ...rest,
    },
    children
  );
}

export const Typography = (props: TypographyProps): ReactElement => {
  return React.createElement(baseElement, props);
};
