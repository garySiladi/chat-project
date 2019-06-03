import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  classname?: string;
}

export const Name: FC<IProps> = ({ children, classname }) => (
  <h5 className={classnames("text-21 text-black font-bold", classname)}>
    {children}
  </h5>
);
