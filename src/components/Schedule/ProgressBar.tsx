import React, { FC } from "react";

interface IProps {
  actual: number;
  max: number;
}

export const ProgressBar: FC<IProps> = ({ actual, max }) => (
  <div className="mt-8 bg-lilac rounded-12">
    {actual !== 0 && (
      <div
        style={{ width: (actual / max) * 100 + "%", height: "3px" }}
        className="bg-black rounded-12"
      />
    )}
  </div>
);
