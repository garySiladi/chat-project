import React, { FC } from "react";

interface IProps {
  actual: number;
  max: number;
}

export const ProgressBar: FC<IProps> = ({ actual, max }) => (
  <div className="pt-8 border-b border-solid border-lilac relative flex items-center rounded-12">
    {actual !== 0 && (
      <div
        style={{ width: (actual / max) * 100 + "%" }}
        className="border-b border-2 border-black absolute rounded-12"
      />
    )}
  </div>
);
