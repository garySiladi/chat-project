import React, { FC } from "react";

interface IProps {
  width: number;
  height: number;
  deg: number;
  left: number;
  bottom: number;
  right: number;
  top: number;
  zIndex: number;
}

export const TextBackground: FC<IProps> = ({
  width,
  height,
  deg,
  right,
  left,
  zIndex = 0,
  bottom,
  top,
  children
}) => (
  <div style={{ position: "relative" }}>
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
        width: width + "px",
        right: right + "px",
        bottom: bottom + "px",
        height: height + "px",
        transform: `rotate(${deg}deg)`
      }}
    />
    <div
      style={{
        position: "absolute",
        left: left + "px",
        zIndex,
        top: top + "px"
      }}
    >
      {children}
    </div>
  </div>
);
