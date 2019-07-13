import React, { FC } from "react";

export const Description: FC = ({ children }) => (
  <h1 className="max-w-730 mx-32 leading-46 font-gilbert text-37 lg:leading-57 lg:text-45 text-black">
    <span className="bg-white">{children}</span>
  </h1>
);
