import React from "react";
import { Image } from "../Image";
import logoFooter from "../../static/svg/logoFooter.png";

export const Logo = () => (
  <div className="flex ml-24 lg:mb-32 items-center h-64">
    <Image src={logoFooter} />
  </div>
);
