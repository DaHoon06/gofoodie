import classNames from "classnames";
import React, {
  ComponentProps,
  CSSProperties,
  ReactElement,
  useMemo,
} from "react";
import * as styles from "./Button.css";

export type ButtonType = "button" | "submit" | "reset";
export type ButtonVariant = "defaultButton" | "gray" | "primary" | "icon";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  icon?: JSX.Element;
  type?: ButtonType;
  width?: string | number;
  height?: string | number;
}

const ButtonComponent = (props: ButtonProps): ReactElement => {
  const {
    variant = "defaultButton",
    className,
    type = "button",
    icon,
    children,
    disabled,
    width,
    height,
    ...rest
  } = props;

  const style: CSSProperties = useMemo(
    () => ({
      width: width ? `${width}px` : "auto",
      height: height ? `${height}px` : "auto",
    }),
    [width, height]
  );

  return (
    <button
      className={classNames(className, styles[variant])}
      type={type}
      disabled={disabled}
      {...rest}
      style={style}
    >
      {children}
    </button>
  );
};

export const Button = React.memo(ButtonComponent);
