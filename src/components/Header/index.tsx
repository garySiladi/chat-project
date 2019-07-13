import React, { useState } from "react";
import { Link } from "@reach/router";
import { Menu } from "./Menu";
import { Image } from "../Image";
import { Navigation } from "./Navigation";
import { UserProfile } from "./UserProfile";
import { HamburgerMenu } from "./HamburgerMenu";
import { UserDropdownMenu } from "./UserDropdownMenu";
import { TopSlideAnimation } from "../../style/animations";
import chatImg from "../../static/svg/chatLogo.png";
import closeImg from "../../static/svg/closeImg.svg";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openUserProfile, setUserProfile] = useState(false);
  return (
    <div className="sticky z-10 bg-white top-0">
      <TopSlideAnimation>
        {openMenu && (
          <>
            <div className="lg:hidden bg-white z-50 absolute w-full">
              <div className="flex justify-end mr-24 mt-16">
                <div onClick={() => setOpenMenu(false)}>
                  <Image src={closeImg} />
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
      </TopSlideAnimation>

      {openUserProfile && (
        <div className="lg:hidden">
          <div className="z-50 w-full fixed inset-0">
            <div className="flex justify-end pr-24 pt-16 bg-white">
              <div onClick={() => setUserProfile(false)}>
                <Image src={closeImg} />
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
      <div
        data-cy="header"
        className="flex justify-between items-center content-center h-64 lg:h-48 w-full"
      >
        <Menu onClick={() => setOpenMenu(true)} />
        <div className="lg:w-192">
          <Link to="/">
            <Image src={chatImg} className="h-24 lg:ml-48" />
          </Link>
        </div>
        <Navigation />
        <UserProfile onClick={() => setUserProfile(true)} />
      </div>
      <div className="bg-lilac h-px" />
    </div>
  );
};
