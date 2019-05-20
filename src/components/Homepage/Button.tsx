import React, { FC } from "react";
import classNames = require("classnames");

interface IProps {
  className?: string;
}

export const Button: FC<IProps> = ({
  children,
  className = "text-white font-lato font-bold"
}) => (
  <button
    className={classNames(
      "w-full h-10 flex justify-center items-center",
      className
    )}
  >
    {children}
  </button>
);
