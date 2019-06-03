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
  <div className="ml-24">
    <div className="mb-4 flex items-center">
      <div className="mr-12 w-16">
        <Icon src={Phone} />
      </div>
      <div className="font-lato text-10">+ {phoneNumber}</div>
    </div>
    <div className="flex items-center">
      <div className="mr-12 w-16">
        <Icon src={Email} />
      </div>
      <Link to="mailto:chatkosice@gmail.com" className="font-lato text-10">
        {email}
      </Link>
    </div>
  </div>
);
