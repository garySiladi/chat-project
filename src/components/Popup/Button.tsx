import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  text: string;
  backgroundColor?: "black" | "red" | "green";
  className?: string;
}

export const Button: FC<IProps> = ({
  className,
  text,
  backgroundColor = "black"
}) => (
  <div className="flex justify-center">
    <button
      className={classnames(
        `bg-${backgroundColor} h-40 w-5/6 rounded-12`,
        className
      )}
    >
      <div className="text-white font-lato text-16">{text}</div>
    </button>
  </div>
);
