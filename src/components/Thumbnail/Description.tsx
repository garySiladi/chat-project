import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  className?: string;
}
export const Description: FC<IProps> = ({ children, className }) => (
  <p className={classnames("text-12 font-lato h-40 leading-18", className)}>
    {children}
  </p>
);
