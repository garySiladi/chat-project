import React, { FC } from "react";

interface IProps {
  text: string;
}

export const InfoMessage: FC<IProps> = ({ text }) => (
  <div
    style={{ lineHeight: "1.38" }}
    className="mt-16 mr-48 ml-24 font-lato text-16"
  >
    {text}
  </div>
);
