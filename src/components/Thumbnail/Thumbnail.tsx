import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  className: string;
}
export const Thumbnail: FC<IProps> = ({ children, className }) => (
  <div className={classnames("p-8 text-left flex-col font-lato", className)}>
    {children}
  </div>
);
