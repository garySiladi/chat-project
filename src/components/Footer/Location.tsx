import React from "react";
import { Image } from "../Image";
import Place from "../../static/svg/icon-place.svg";

export const Location = () => (
  <div className="ml-24 lg:mr-48 lg:ml-32">
    <div className="flex w-192 justify-start items-center">
      <div className="mr-12 flex items-start h-40">
        <Image src={Place} />
      </div>
      <div className="font-lato text-12 h-40">
        <div>Strojárenská 3,</div>
        <div>budova č.4, 4. poschodie</div>
        <div>Kosice, Slovakia</div>
      </div>
    </div>
  </div>
);
