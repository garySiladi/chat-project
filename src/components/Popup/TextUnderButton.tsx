import React, { FC } from "react";

interface IProps {
  text: string;
}

export const TextUnderButton: FC<IProps> = ({ text }) => (
  <div className="text-10 text-center font-lato mt-8 text-grey pl-40 pr-40">
    {text}
  </div>
);
