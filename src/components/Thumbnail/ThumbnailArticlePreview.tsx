import React, { FC } from "react";
import { Button } from "../Button";
import { Description } from "./Description";
import { Image } from "../Image";
import { Name } from "./Name";
import { Date } from "./Date";
import { Thumbnail, IThumbnailProps } from "./Thumbnail";

export const ThumbnailArticlePreview: FC<IThumbnailProps> = ({
  date,
  name,
  description,
  icon,
  alt,
  to
}) => (
  <Thumbnail to={to} className="flex border-none p-0 lg:p-0 lg:m-0">
    <Image src={icon} alt={alt} className="mb-8 w-full h-166 object-cover" />
    <Date className="mb-4 h-12">{date}</Date>
    <Name className="font-lato mb-24 leading-24 overflow-hidden h-48">
      {name}
    </Name>
    <Description className="text-16 min-h-86 leading-22 mb-12">
      {description}
    </Description>
    <Button className="mb-2 lg:hidden" isStretched isInverted isSlim>
      Zobraziť článok
    </Button>
    <Button className="mb-2 hidden lg:inline-block border-none mx-auto mb-16">
      Zobraziť článok
    </Button>
  </Thumbnail>
);
