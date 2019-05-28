import React, { FC } from "react";
import classNames = require("classnames");

interface IProps {
  className?: string;
}

export const Button: FC<IProps> = ({
  children,
  className = "text-white font-lato font-bold "
}) => (
  <button
    style={{ lineHeight: "1" }}
    className={classNames(
      "w-full h-40 flex justify-center items-center items-center",
      className
    )}
  >
    {children}
  </button>
);
