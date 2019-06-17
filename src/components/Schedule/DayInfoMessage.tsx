import React, { FC } from "react";

interface IProps {
  text: string;
}

export const DayInfoMessage: FC<IProps> = ({ text }) => (
  <div className="lg:text-31 lg:h-64 flex items-center text-21 h-64 font-gilbert pl-24 border-b border-lilac">
    {text}
  </div>
);
