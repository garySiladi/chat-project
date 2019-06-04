import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  text: string;
  className?: string;
}

export const Description: FC<IProps> = ({ text, className }) => (
  <div className={classnames(className)}>{text}</div>
);
