import React, { FC } from "react";

interface IProps {
  width: number;
  height: number;
  deg?: number;
  left: number;
  bottom?: number;
  right?: number;
  top?: number;
  zIndex?: number;
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
  <div className="relative">
    <div
      className="relative bg-white"
      style={{
        width: width + "px",
        right: right + "px",
        bottom: bottom + "px",
        height: height + "px",
        transform: `rotate(${deg}deg)`
      }}
    />
    <div
      className="absolute"
      style={{
        left: left + "px",
        zIndex,
        top: top + "px"
      }}
    >
      {children}
    </div>
  </div>
);
