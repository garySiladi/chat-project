import React, { FC } from "react";

export const Button: FC = ({ children }) => (
  <button className="rounded-12 w-full h-40 font-black text-16 font-lato leading-24 hover:text-white hover:bg-black text-black">
    {children}
  </button>
);
