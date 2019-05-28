import React, { FC } from "react";
import { Link } from "@reach/router";
import { BackgroundImage } from "./BackgroundImage";

interface IProps {
  src: string;
  url: string;
  title: string;
  to: string;
}
export const Icon: FC<IProps> = ({ src, url, title, to }) => (
  <Link className="p-24 no-underline m-4" to={to}>
    <BackgroundImage url={url}>
      <img src={src} />
    </BackgroundImage>
    <div className="w-full font-lato font-bold text-center text-black pt-16">
      {title}
    </div>
  </Link>
);
