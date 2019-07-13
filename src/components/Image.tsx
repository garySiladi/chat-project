import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  src: string;
  alt?: string;
  className?: string;
}

export const Image: FC<IProps> = ({ src, alt = "", className }) => (
  <img src={src} alt={alt} className={classnames(className)} />
);
