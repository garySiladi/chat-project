import React from "react";
import Phone from "../../static/svg/icon-phone.svg";
import Email from "../../static/svg/email.svg";
import { Icon } from "../Icon";
import { Link } from "@reach/router";

export const Contacts = () => (
  <div className="ml-24">
    <div className="mb-4 flex items-center">
      <div className="mr-12 w-16">
        <Icon src={Phone} />
      </div>
      <div className="font-lato text-10">+ 421 905 271 220</div>
    </div>
    <div className="flex items-center">
      <div className="mr-12 w-16">
        <Icon src={Email} />
      </div>
      <Link to="mailto:chatkosice@gmail.com" className="font-lato text-10">
        chatkosice@gmail.com
      </Link>
    </div>
  </div>
);
