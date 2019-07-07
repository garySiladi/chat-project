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
          className="hamburger-item bg-white font-lato font-bold text-black text-21 py-16 border-solid border-lilac no-underline border-b"
        >
          {title}
        </Link>
      ))}
    </div>
  </div>
);
