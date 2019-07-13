import React from "react";
import { Image } from "../Image";
import closeIcon from "../../static/svg/closeIcon.svg";
import { Button } from "../Button";

export const CloseButton = () => (
  <div className="flex justify-end pr-16">
    <div className="w-40 h-40">
      <Button isStretched isInverted>
        <Image src={closeIcon} className="mx-auto" />
      </Button>
    </div>
  </div>
);
