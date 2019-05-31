import React from "react";
import { Link } from "@reach/router";
import { ImageHeader } from "./ImageHeader";
import euroSign from "../../static/svg/euroSign.svg";
import idBadge from "../../static/svg/idBadge.svg";
import cogs from "../../static/svg/cogs.svg";
import powerOff from "../../static/svg/powerOff.svg";

const menu = [
  { src: euroSign, to: "#", title: "Kredity" },
  { src: idBadge, to: "#", title: "Profil" },
  { src: cogs, to: "#", title: "Nastavenia" },
  { src: powerOff, to: "#", title: "Odhlásiť sa" }
];

export const UserMenu = () => (
  <div className="hidden lg:flex flex-col">
    <div className="pt-24 pb-16 bg-white w-192 rounded-b-8 border-b border-solid border-grey">
      {menu.map(({ src, to, title }) => (
        <div key={title} className="flex flex-row items-center justify-start">
          <ImageHeader src={src} className="ml-12 mr-8" />
          <Link to={to} className="userProfileLinks hover:font-bold">
            {title}
          </Link>
        </div>
      ))}
    </div>
  </div>
);
