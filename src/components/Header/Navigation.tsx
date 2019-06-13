import React from "react";
import { Link } from "@reach/router";

const links = [
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

export const Navigation = () => (
  <div className="hidden lg:inline-block mt-20">
    {links.map(({ title, to }) => (
      <Link
        key={title}
        to={to}
        className="link pl-32 pr-32 pt-8  border-b-4 border-solid border-white hover:border-maize"
      >
        {title}
      </Link>
    ))}
  </div>
);
