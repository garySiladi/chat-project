import React from "react";
import Phone from "../../static/svg/icon-phone.svg";
import Email from "../../static/svg/email.svg";
import { Image } from "../Image";

export const Contacts = () => (
  <div className="ml-24">
    <div className="mb-4 flex items-center">
      <div className="mr-12 w-16">
        <Image src={Phone} />
      </div>
      <div className="font-lato text-12">+421 905 271 220</div>
    </div>
    <div className="flex items-center">
      <div className="mr-12 w-16">
        <Image src={Email} />
      </div>
      <a href="mailto:chatkosice@gmail.com" className="font-lato text-12">
        chatkosice@gmail.com
      </a>
    </div>
  </div>
);
