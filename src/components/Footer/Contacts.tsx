import React from "react";
import Phone from "../../static/svg/icon-phone.svg";
import Email from "../../static/svg/email.svg";
import { Icon } from "../Icon";

export const Contacts = () => (
  <div className="ml-24 mt-8 lg:mt-0 sm:mt-0 mr-16">
    <div className="pb-4 flex justify-start items-center">
      <div className="mr-12 w-16">
        <Icon src={Phone} />
      </div>
      <div className="font-lato text-10 text-black">+421 905 271 220</div>
    </div>
    <div className="pb-4 flex justify-start items-center">
      <div className="mr-12 w-16">
        <Icon src={Email} />
      </div>
      <div className="font-lato text-10">
        <a
          href="mailto:chatkosice@gmail.com"
          className="no-underline text-black"
        >
          chatkosice@gmail.com
        </a>
      </div>
    </div>
  </div>
);
