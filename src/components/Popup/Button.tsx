import React, { FC } from "react";

interface IProps {
  text: string;
  backgroundColor?: "black" | "red" | "green";
}

export const Button: FC<IProps> = ({ text, backgroundColor = "black" }) => (
  <div className="flex justify-center">
    <button className={`bg-${backgroundColor} h-40 w-5/6 rounded-8`}>
      <div className="text-white font-lato text-16">{text}</div>
    </button>
  </div>
);
