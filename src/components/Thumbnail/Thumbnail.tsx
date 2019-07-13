import React, { FC } from "react";
import classnames from "classnames";
import { Link } from "@reach/router";

export interface IThumbnailProps {
  date?: string;
  name: string;
  description: string;
  icon: string;
  alt: string;
  to: string;
}

interface IProps {
  className?: string;
  to: string;
}
export const Thumbnail: FC<IProps> = ({ children, className, to }) => (
  <Link to={to}>
    <div
      className={classnames(
        "p-8 lg:m-4 text-left flex-col font-lato overflow-hidden lg:border-2 border-solid border-gray-300",
        className
      )}
    >
      {children}
    </div>
  </Link>
);
