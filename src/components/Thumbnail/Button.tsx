import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  text?: string;
  className?: string;
}

export const Button: FC<IProps> = ({ text, className }) => (
  <button
    className={classnames(
      "rounded-12 w-full h-40 font-black text-16 leading-24 hover:text-white hover:bg-black text-black",
      className
    )}
  >
    {text}
  </button>
);
