import React, { FC } from "react";
import { Description } from "./Description";
import { Image } from "../Image";
import { Name } from "./Name";
import { Thumbnail, IThumbnailProps } from "./Thumbnail";
import { Button } from "../Button";

export const ThumbnailTherapy: FC<IThumbnailProps> = ({
  name,
  description,
  icon,
  alt,
  to
}) => (
  <Thumbnail to={to} className="w-238 h-304 shadow">
    <Image src={icon} alt={alt} className="mb-8 w-full h-160" />
    <Name className="font-gilbert h-28">{name}</Name>
    <Description className="mb-16 text-12 leading-18 h-36">
      {description}
    </Description>
    <Button>Zistiť viac</Button>
  </Thumbnail>
);
