import React, { FC } from "react";
import userIcon from "../../static/svg/userIcon.svg";
import { Image } from "../Image";
import { UserInfo } from "./UserInfo";
import { UserIcon } from "./UserIcon";
import { UserMenu } from "./UserMenu";

interface IProps {
  onClick: () => void;
}

export const UserProfile: FC<IProps> = ({ onClick }) => (
  <div className="group relative" onClick={onClick}>
    <div className="flex flex-row w-auto lg:mr-40 w-192 inline-block cursor-pointer">
      <div className="w-40 h-40 lg:h-32 lg:w-32 rounded-8 mr-16 flex items-center justify-center bg-lilac">
        <UserIcon credentials="FS" />
        <Image src={userIcon} className="flex flex-row h-24 w-24 lg:hidden" />
      </div>
      <UserInfo name="Feri Schwartzeneger" kredit={10} />
    </div>
    <div className="absolute invisible group-hover:visible">
      <UserMenu />
    </div>
  </div>
);
