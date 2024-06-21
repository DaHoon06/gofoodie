import React, {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  Ref,
} from "react";

interface FlexProps {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: number | string;
  width?: string | number;
  height?: string | number;
}

export interface FlexBoxProps
  extends FlexProps,
    HTMLAttributes<HTMLDivElement> {
}

const FlexBox = forwardRef(
  (
    {
      children,
      flexDirection = "row",
      justifyContent = "center",
      alignItems = "center",
      gap = 0,
      width = "100%",
      height = "auto",
      ...rest
    }: PropsWithChildren<FlexBoxProps>,
    forwardRef: Ref<HTMLDivElement>
  ) => {
    return (
      <div
        style={{
          display: "flex",
          width,
          height,
          flexDirection,
          justifyContent,
          alignItems,
          gap,
        }}
        ref={forwardRef}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
FlexBox.displayName = "FlexBox";
export default FlexBox;
