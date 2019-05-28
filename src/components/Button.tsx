import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  isInverted?: boolean;
  isStretched?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: FC<IProps> = ({
  isInverted = false,
  children,
  isStretched = false,
  className,
  onClick
}) => (
  <button
    onClick={onClick}
    className={classnames(
      "h-40 font-lato text-16 hover:shadow-lg active:opacity-50 font-bold border-solid border border-black rounded-12",
      {
        [`${
          isInverted
            ? "bg-black text-white hover:bg-dark-black"
            : "bg-white text-black"
        }`]: true,
        [`${isStretched ? "w-full" : "pr-32 pl-32"}`]: true
      },
      className
    )}
  >
    {children}
  </button>
);
