import React, { FC } from "react";
import { Link } from "@reach/router";
import euroSign from "../../static/svg/euroSign.svg";
import idBadge from "../../static/svg/idBadge.svg";
import powerOff from "../../static/svg/powerOff.svg";
import { ImageHeader } from "./ImageHeader";

interface IProps {
  userInicials: string;
  userName: string;
  credit: number;
}

const links = [
  {
    src: euroSign,
    title: "Kredity",
    to: "#"
  },
  {
    src: idBadge,
    title: "Profil",
    to: "#"
  },
  { src: powerOff, title: "Odhlasit sa", to: "#" }
];

export const UserDropdownMenu: FC<IProps> = ({
  userInicials,
  userName,
  credit
}) => (
  <div className="bg-white w-full">
    <div className="flex justify-center flex-col items-center">
      <div className="flex bg-lilac h-64 w-64 rounded-8 font-gilbert text-31 justify-center items-center">
        {userInicials}
      </div>
      <div className="font-gilbert text-31 mt-16">{userName}</div>
      <div className="font-lato text-16 text-blue mt-4">Kredit {credit}€</div>
    </div>
    {links.map(({ src, title, to }) => (
      <div key={title}>
        <div className="flex flex-row items-center justify-start ml-24 mt-16">
          <ImageHeader src={src} />
          <Link
            to={to}
            title={title}
            className="font-lato text-16 text-black no-underline font-bold ml-16"
          >
            {title}
          </Link>
        </div>
        <div className="bg-lilac mt-16 mb-16 ml-24 mr-24 h-px" />
      </div>
    ))}
  </div>
);
