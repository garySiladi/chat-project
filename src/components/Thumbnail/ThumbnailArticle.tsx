import React, { FC } from "react";
import { Button } from "../Button";
import { Description } from "./Description";
import { Image } from "./Image";
import { Name } from "./Name";
import { Date } from "./Date";
import { Thumbnail } from "./Thumbnail";

interface IProps {
  date: string;
  name: string;
  description: string;
  icon: string;
  alt: string;
}

export const ThumbnailArticle: FC<IProps> = ({
  date,
  name,
  description,
  icon,
  alt
}) => (
  <Thumbnail>
    <Image icon={icon} alt={alt} className="mb-8 w-full h-166 object-cover" />
    <Date className="mb-4 h-12">{date}</Date>
    <Name className="font-lato mb-24 leading-22">{name}</Name>
    <Description className="text-16 leading-22 mb-12">
      {description}
    </Description>
    <Button className="mb-2 lg:hidden" isStretched isInverted isSlim>
      Zobraziť článok
    </Button>
    <Button className="mb-2 hidden lg:inline-block border-none" isStretched>
      Zobraziť článok
    </Button>
  </Thumbnail>
);
