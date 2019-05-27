import React, { FC } from "react";

export const Button: FC = ({ children }) => (
  <button className="rounded-8 w-full h-40 font-black font-lato hover:text-white hover:bg-black text-black">
    {children}
  </button>
);
