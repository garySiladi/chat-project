import React, { useState } from "react";
import chatImg from "../../static/svg/chatLogo.png";
import { Menu } from "./Menu";
import { ImageHeader } from "./ImageHeader";
import { Navigation } from "./Navigation";
import { UserProfile } from "./UserProfile";
import { HamburgerMenu } from "./HamburgerMenu";
import times from "../../static/svg/times.svg";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState("closed");
  return (
    <div>
      {openMenu === "open" && (
        <div>
          <div className="flex justify-end mr-6 mt-4">
            <ImageHeader src={times} onClick={() => setOpenMenu("closed")} />
          </div>
          <HamburgerMenu />
          <div
            className="opacity-75 bg-darkblue h-full w-full lg:hidden"
            onClick={() => setOpenMenu("closed")}
          />
        </div>
      )}
      <div className="flex justify-between items-center content-center h-16 lg:h-12 w-full">
        <Menu onClick={() => setOpenMenu("open")} />
        <ImageHeader src={chatImg} width={73} className="h-6 lg:ml-12" />
        <Navigation />
        <UserProfile />
      </div>
      <div className="bg-lilac h-px" />
    </div>
  );
};
