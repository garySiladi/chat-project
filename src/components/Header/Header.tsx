import React, { useState } from "react";
import chatImg from "../../static/svg/chatLogo.png";
import { Menu } from "./Menu";
import { ImageHeader } from "./ImageHeader";
import { Navigation } from "./Navigation";
import { UserProfile } from "./UserProfile";
import { HamburgerMenu } from "./HamburgerMenu";
import closeImg from "../../static/svg/closeImg.svg";
import { UserDropdownMenu } from "./UserDropdownMenu";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openUserProfile, setUserProfile] = useState(false);
  return (
    <div>
      {openMenu && (
        <>
          <div className="lg:hidden bg-white z-50 absolute w-full">
            <div className="flex justify-end mr-24 mt-16">
              <div onClick={() => setOpenMenu(false)}>
                <ImageHeader src={closeImg} />
              </div>
            </div>
            <div className="z-50">
              <HamburgerMenu />
            </div>
          </div>
          <div
            className="lg:hidden opacity-75 z-20 bg-darkblue fixed h-full w-full inset-0 lg:hidden"
            onClick={() => setOpenMenu(false)}
          />
        </>
      )}

      {openUserProfile && (
        <div className="lg:hidden">
          <div className="z-50 w-full fixed inset-0">
            <div className="flex justify-end pr-24 pt-16 bg-white">
              <div onClick={() => setUserProfile(false)}>
                <ImageHeader src={closeImg} />
              </div>
            </div>
            <UserDropdownMenu
              userInicials={"FS"}
              userName={"Feri Schwartzeneger"}
              credit={4}
            />
          </div>
          <div
            className="opacity-75 z-20 fixed inset-0 bg-darkblue h-full w-full"
            onClick={() => setUserProfile(false)}
          />
        </div>
      )}

      <div className="flex justify-between items-center content-center h-64 lg:h-48 w-full">
        <Menu onClick={() => setOpenMenu(true)} />
        <div className="lg:w-192">
          <ImageHeader src={chatImg} className="h-24 lg:ml-48" />
        </div>
        <Navigation />
        <UserProfile onClick={() => setUserProfile(true)} />
      </div>
      <div className="bg-lilac h-px" />
    </div>
  );
};
