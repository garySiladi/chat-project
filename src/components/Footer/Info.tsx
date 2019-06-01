import React, { FC } from "react";

interface IProps {
  title: string;
  ico: number;
  bankNumber: string;
}

export const Info: FC<IProps> = ({ title, ico, bankNumber }) => (
  <div className="pt-20 pl-24 h-40">
    <div className="text-10 font-lato">{title}</div>
    <div className="text-10 font-lato">
      <div>IČO: {ico}</div>
      <div>Číslo účtu: {bankNumber}</div>
    </div>
  </div>
);
