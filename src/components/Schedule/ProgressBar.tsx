import React, { FC } from "react";

interface IProps {
  actual: number;
  max: number;
}

export const ProgressBar: FC<IProps> = ({ actual, max }) => {
  if (actual === 0) {
    return null;
  }
  return (
    <div
      style={{ width: (actual / max) * 100 + "%" }}
      className="border-b border-2 border-black absolute rounded-12"
    />
  );
};
