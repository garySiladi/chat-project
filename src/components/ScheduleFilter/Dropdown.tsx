import React, { FC } from "react";
import classnames from "classnames";
import DropIcon from "../../static/svg/icon-filter.svg";

interface IProps {
  isShown: boolean;
  onClick: () => void;
}

export const Dropdown: FC<IProps> = ({ isShown, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classnames(
        "w-full h-40 font-16 font-lato bg-black text-white font-black flex justify-between items-center cursor-pointer",
        {
          [`${isShown ? "rounded-t-12 pl-40" : "rounded-12 pl-12"}`]: true
        }
      )}
    >
      <div>{isShown ? "Filter" : "Všetky CHAT arteterapie"}</div>
      <img src={DropIcon} className="pr-8" />
    </div>
  );
};
