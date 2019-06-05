import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  className: string;
}

export const Date: FC<IProps> = ({ children, className }) => (
  <div className={classnames("text-10 text-grey leading-12", className)}>
    {children}
  </div>
);
