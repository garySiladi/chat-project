import React, { FC } from "react";
import styled from "@emotion/styled";
import { Logo } from "./Logo";
import { Info } from "./Info";
import { Icon } from "../Icon";
import { Contacts } from "./Contacts";
import { Location } from "./Location";
import Instagram from "../../static/svg/instagram.svg";
import Facebook from "../../static/svg/facebook-square.svg";

const OverflowOvals = styled.div`
  position: absolute;
  overflow: hidden;
  width: 293px;
  height: 489px;
  right: 0;
`;

export const Footer: FC = () => (
  <div className="flex items-end justify-start z-0 bg-cover-image lg:bg-cover-image">
    <div className="flex lg:social-icons sm:social-icons social-icons">
      <div className="w-48 mr-4">
        <a href="">
          <Icon src={Facebook} className="w-40" />
        </a>
      </div>
      <div className="w-48 ml-4">
        <a href="">
          <Icon src={Instagram} className="w-40" />
        </a>
      </div>
    </div>
    <div className="lg:pl-64 z-20">
      <Logo />
      <div className="lg:flex">
        <div className="pb-24 pr-32">
          <Info />
        </div>
        <div className="sm:flex pt-24 pb-48">
          <Location />
          <Contacts />
        </div>
      </div>
    </div>
    <OverflowOvals>
      <div className="z-0 bg-oval sm:bg-oval lg:bg-oval" />
    </OverflowOvals>
  </div>
);
