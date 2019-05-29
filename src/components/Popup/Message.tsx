import React, { FC } from "react";

interface IProps {
  text: string;
}

export const Message: FC<IProps> = ({ text }) => (
  <div
    style={{ lineHeight: "1.1" }}
    className="ml-24 mt-80 font-gilbert text-31"
  >
    {text}
  </div>
);
