import React, { FC } from "react";

interface IProps {
  text: string;
}

export const Date: FC<IProps> = ({ text }) => (
  <div className="text-10 text-grey leading-12">{text}</div>
);
