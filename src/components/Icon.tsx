import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  src: string;
  className?: string;
}

export const Icon: FC<IProps> = ({ src, className }) => (
  <img src={src} className={classnames(className)} />
);
