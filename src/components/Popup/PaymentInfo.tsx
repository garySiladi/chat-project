import React, { FC } from "react";

interface IProps {
  text: string;
  textColor?: "black" | "red" | "green";
}

export const PaymentInfo: FC<IProps> = ({ text, textColor = "white" }) => (
  <div className={`text-${textColor} pl-24 font-lato leading-24`}>{text}</div>
);
