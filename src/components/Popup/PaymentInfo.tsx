import React, { FC } from "react";

interface IProps {
  text: string;
  textColor?: "black" | "red" | "green";
}

export const PaymentInfo: FC<IProps> = ({ text, textColor = "white" }) => (
  <div
    style={{ lineHeight: "1.38" }}
    className={`text-${textColor} pl-24 font-lato`}
  >
    {text}
  </div>
);
