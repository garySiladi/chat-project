import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  classname?: string;
}

export const Description: FC<IProps> = ({ children, classname }) => (
  <div className={classnames("leading-22 text-16", classname)}>{children}</div>
);
