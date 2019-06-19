import React from "react";
import { Link } from "@reach/router";

const links = [
  {
    title: "Arteterapie",
    to: "/Arteterapie"
  },
  {
    title: "Rozvrh",
    to: "/Rozvrh"
  },
  {
    title: "Články",
    to: "/Clanky"
  }
];

export const Navigation = () => (
  <div className="hidden lg:inline-block mt-20">
    {links.map(({ title, to }) => (
      <Link
        key={title}
        to={to}
        className="link pl-32 pr-32 pt-8  border-b-4 border-solid border-white hover:border-maize"
        data-cy={`Header navigation-${title}`}
      >
        {title}
      </Link>
    ))}
  </div>
);
