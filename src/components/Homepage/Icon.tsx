import React, { FC } from "react";
import { Link } from "@reach/router";
import { ScaleHoverAnimation } from "../../style/animations";

interface IProps {
  src: string;
  url: string;
  title: string;
  to: string;
}
export const Icon: FC<IProps> = ({ src, url, title, to }) => (
  <Link className="p-24 no-underline m-4" to={to}>
    <div
      style={{
        background: `url(${url}) no-repeat center`
      }}
    >
      <ScaleHoverAnimation>
        <img className="my-0 mx-auto" src={src} />
      </ScaleHoverAnimation>
    </div>
    <div className="w-full font-lato font-bold text-center text-black pt-16">
      {title}
    </div>
  </Link>
);
