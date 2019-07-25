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
  <Thumbnail to={to} className="shadow flex m-4 bg-white border-none p-8">
    <Image src={icon} alt={alt} className="mb-8 w-full h-160" />
    <Name className="font-gilbert h-28">{name}</Name>
    <Description className="mb-16 text-12 leading-18 h-36">
      {description}
    </Description>
    <Button className="lg:hidden" isInverted={true}>
      Zistiť viac
    </Button>
    <Button className="border-none hover:bg-black hover:text-white hidden lg:block">
      Zistiť viac
    </Button>
  </Thumbnail>
);
