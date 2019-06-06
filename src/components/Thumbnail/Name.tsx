import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  className?: string;
}

export const Name: FC<IProps> = ({ children, className }) => (
  <h5 className={classnames("text-21 text-black font-bold", className)}>
    {children}
  </h5>
);
