import React, { FC } from "react";

interface IProps {
  title: string;
  ico: number;
  bankNumber: string;
}

export const Info: FC<IProps> = ({ title, ico, bankNumber }) => (
  <div className="mt-20 ml-24 h-40 text-10 font-lato">
    <div>{title}</div>
    <div>IČO: {ico}</div>
    <div>Číslo účtu: {bankNumber}</div>
  </div>
);
