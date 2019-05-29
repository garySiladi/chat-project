import React from "react";
import { Icon } from "../Icon";
import iconTimes from "../../static/svg/icon-times.svg";
import { Button } from "../Button";

export const CloseButton = () => (
  <div className="flex justify-end pr-16">
    <div className="w-40 h-40">
      <Button isStretched isInverted>
        <Icon src={iconTimes} className="mx-auto" />
      </Button>
    </div>
  </div>
);
