import React, { FC } from "react";

export const Thumbnail: FC = ({ children }) => (
  <div className="p-8 shadow w-full h-full flex-col flex justify-between font-lato">
    {children}
  </div>
);
