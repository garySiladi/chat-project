import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  className?: string;
}

export const Description: FC<IProps> = ({ children, className }) => (
  <div className={classnames(className)}>{children}</div>
);
