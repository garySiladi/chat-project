import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  text: string;
  className: string;
}

export const Name: FC<IProps> = ({ text, className }) => (
  <h5 className={classnames("text-21 text-black font-bold", className)}>
    {text}
  </h5>
);
