import React, { FC } from "react";

export const Description: FC = ({ children }) => (
  <h1 className="font-gilbert text-45">
    <span className="bg-white">{children}</span>
  </h1>
);
