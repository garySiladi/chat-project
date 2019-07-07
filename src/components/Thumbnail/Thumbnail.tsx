import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  className?: string;
}
export const Thumbnail: FC<IProps> = ({ children, className }) => (
  <div
    className={classnames(
      "p-8 text-left flex-col font-lato overflow-hidden lg:border-2 border-solid border-gray-300",
      className
    )}
  >
    {children}
  </div>
);
