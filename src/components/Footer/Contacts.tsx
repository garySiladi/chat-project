import React, { FC } from "react";
import Phone from "../../static/svg/icon-phone.svg";
import Email from "../../static/svg/email.svg";
import { Icon } from "../Icon";
import { Link } from "@reach/router";

interface IProps {
  phoneNumber: number;
  email: string;
}

export const Contacts: FC<IProps> = ({ phoneNumber, email }) => (
  <div className="ml-24 mt-0 mr-16">
    <div className="pb-4 flex justify-start items-center">
      <div className="mr-12 w-16">
        <Icon src={Phone} />
      </div>
      <div className="font-lato text-10">+ {phoneNumber}</div>
    </div>
    <div className="pb-4 flex justify-start items-center">
      <div className="mr-12 w-16">
        <Icon src={Email} />
      </div>
      <div className="font-lato text-10">
        <Link to="mailto:chatkosice@gmail.com" className="no-underline">
          {email}
        </Link>
      </div>
    </div>
  </div>
);
