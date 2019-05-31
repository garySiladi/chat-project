import React, { FC } from "react";
import menuIcon from "../../static/svg/menu.svg";
import { ImageHeader } from "./ImageHeader";

interface IProps {
  onClick: () => void;
}

export const Menu: FC<IProps> = ({ onClick }) => (
  <div className="inline-block lg:hidden" onClick={onClick}>
    <ImageHeader src={menuIcon} className="ml-16" />
  </div>
);
