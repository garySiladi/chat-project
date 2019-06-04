import React from "react";
import { Button } from "../Button";
import { Description } from "../Description";
import { Image } from "../Image";
import { Name } from "../Name";
import icon from "../../../static/svg/homer.svg";
import { Thumbnail } from "../Thumbnail";

export const ThumbnailTherapy = () => (
  <Thumbnail>
    <Image icon={icon} alt="super" className="mb-8" />
    <Name className="font-gilbert" text="MAMA CHAT" />
    <Description
      className="mb-16 text-12 leading-18"
      text="Kreatívne a uvoľnujúce aktivity, aby ste si oddýchli, spracovali emócie […]"
    />
    <Button className="mb-8" text="Zistiť viac" />
  </Thumbnail>
);
