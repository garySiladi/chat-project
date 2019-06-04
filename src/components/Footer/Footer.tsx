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
  width: 293px;
  height: 489px;
  right: 0;
`;

export const Footer: FC = () => (
  <div className="flex items-end justify-start z-0 bg-cover-image lg:bg-cover-image">
    <div className="flex social-icons social-icons lg:social-icons">
      <div className="flex flex-row mr-4">
        <a href="">
          <Icon src={Facebook} className="w-40" />
        </a>
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
        <div className="sm:flex pb-48 lg:pt-24">
          <Location />
          <Contacts />
        </div>
      </div>
    </div>
    <OverflowOvals>
      <div className="z-0 bg-oval lg:bg-oval" />
    </OverflowOvals>
  </div>
);
