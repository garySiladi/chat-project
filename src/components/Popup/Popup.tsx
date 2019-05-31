import React, { FC } from "react";

export const Popup: FC = ({ children }) => (
  <div
    style={{
      width: "343px",
      height: "420px"
    }}
    className="pt-16 pb-24 border-black border m-auto flex flex-col justify-between"
  >
    {children}
  </div>
);
