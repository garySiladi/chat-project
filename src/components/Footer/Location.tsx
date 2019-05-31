import React from "react";
import { Icon } from "../Icon";
import Place from "../../static/svg/icon-place.svg";

export const Location = () => (
  <div className="ml-24 mr-16 lg:pr-48 lg:pl-32">
    <div className="flex w-192 justify-start items-center">
      <div className="mr-12 w-24 flex items-start h-40">
        <Icon src={Place} />
      </div>
      <div className="text-black font-normal font-lato text-10 w-256 h-40">
        <div>Strojárenská 3,</div>
        <div>budova č.4, 4. poschodie</div>
        <div>Kosice, Slovakia</div>
      </div>
    </div>
  </div>
);
