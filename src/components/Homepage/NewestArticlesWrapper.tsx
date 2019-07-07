import React, { FC } from "react";
import { Button } from "../Button";

export const NewestArticlesWrapper: FC = ({ children }) => (
  <div className="m-0 bg-white relative pt-48 lg:pt-24 lg:m-48 shadow-md text-center text-black pl-32 pr-32 lg:pl-128 lg:pr-128 shadow">
    <h1 className="font-gilbert text-31 mb-16">Najnovšie články</h1>
    <div className="flex flex-col items-center justify-center lg:flex-row">
      {children}
    </div>
    <div className="mb-24 pb-24 mt-16 flex justify-center">
      <div className="w-238">
        <Button className="text-black font-lato font-black w-full">
          Všetky články
        </Button>
      </div>
    </div>
  </div>
);
