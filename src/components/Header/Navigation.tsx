import React from "react";
import { Link } from "@reach/router";

export const links = [
  {
    title: "Arteterapie",
    to: "/arteterapie"
  },
  {
    title: "Rozvrh",
    to: "/rozvrh"
  },
  {
    title: "Články",
    to: "/clanky"
  }
];

export const Navigation = () => (
  <div className="hidden lg:inline-block mt-20">
    {links.map(({ title, to }) => (
      <Link
        key={title}
        to={to}
        className="link pl-16 pr-16 pt-8 border-b-4 border-solid border-white transition hover:border-maize"
      >
        {title}
      </Link>
    ))}
  </div>
);
