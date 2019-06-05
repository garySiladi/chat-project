import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  className?: string;
  icon: string;
  alt: string;
}

export const Image: FC<IProps> = ({ icon, alt, className }) => (
  <img alt={alt} src={icon} className={classnames("w-full h-160", className)} />
);
