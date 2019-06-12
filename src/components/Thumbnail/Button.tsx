import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  className?: string;
}

export const Button: FC<IProps> = ({ children, className }) => (
  <button
    className={classnames(
      "rounded-12 w-full h-40 font-black text-16 hover:text-white hover:bg-black text-black",
      className
    )}
  >
    {children}
  </button>
);
