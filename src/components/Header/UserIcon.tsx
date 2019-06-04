import React, { FC } from "react";

interface IProps {
  credentials: string;
}

export const UserIcon: FC<IProps> = ({ credentials }) => (
  <div className="z-0 hidden lg:inline-block font-gilbert font-bold text-18">
    {credentials}
  </div>
);
