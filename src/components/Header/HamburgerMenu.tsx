import React from "react";
import { Link } from "@reach/router";

const links = [
  {
    title: "Domov",
    to: "#"
  },
  {
    title: "Arteterapie",
    to: "#"
  },
  {
    title: "Rozvrh",
    to: "#"
  },
  {
    title: "Články",
    to: "#"
  }
];

export const HamburgerMenu = () => (
  <div className="bg-white h-256 mt-16">
    <div className="mt-16 ml-24 mr-24 flex flex-col">
      {links.map(({ title, to }) => (
        <Link
          key={title}
          to={to}
          className="bg-white font-lato font-bold text-black text-21 no-underline"
        >
          {title}
          <div className="bg-lilac mt-16 mb-16 h-px" />
        </Link>
      ))}
    </div>
  </div>
);
