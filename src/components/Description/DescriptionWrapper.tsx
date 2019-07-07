import React, { FC } from "react";

export const DescriptionWrapper: FC = ({ children }) => (
  <div className="w-full m-auto text-center leading-57 pt-64 pb-96 pr-8 pl-8 lg:w-2/3">
    {children}
  </div>
);
