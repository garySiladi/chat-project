import React, { FC } from "react";
import { Button } from "./Button";
import { Description } from "./Description";
import { Image } from "./Image";
import { Name } from "./Name";
import { Thumbnail } from "./Thumbnail";

interface IProps {
  name: string;
  description: string;
  alt: string;
  icon: string;
}

export const ThumbnailTherapy: FC<IProps> = ({
  name,
  description,
  icon,
  alt
}) => (
  <Thumbnail className="w-238 h-304 shadow">
    <Image icon={icon} alt={alt} className="mb-8 w-full h-160" />
    <Name className="font-gilbert h-28">{name}</Name>
    <Description className="mb-16 text-12 leading-18 h-36">
      {description}
    </Description>
    <Button>Zistiť viac</Button>
  </Thumbnail>
);
