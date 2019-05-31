import React, { FC } from "react";

interface IProps {
  name: string;
  kredit: number;
}
export const UserInfo: FC<IProps> = ({ name, kredit }) => (
  <div className="hidden lg:inline-block font-bold">
    <div className="h-20 font-gilbert text-16">{name}</div>
    <div className="text-blue font-lato text-10">Kredit {kredit}€</div>
  </div>
);
