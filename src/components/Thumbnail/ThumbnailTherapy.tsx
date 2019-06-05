import React, { FC } from "react";
import { Button } from "./Button";
import { Description } from "./Description";
import { Image } from "./Image";
import { Name } from "./Name";
import { Thumbnail } from "./Thumbnail";

interface IProps {
  name: string;
  description: string;
  button: string;
  alt: string;
  icon: string;
}

export const ThumbnailTherapy: FC<IProps> = ({
  name,
  description,
  button,
  icon,
  alt
}) => (
  <Thumbnail>
    <Image icon={icon} alt={alt} className="mb-8" />
    <Name className="font-gilbert">{name}</Name>
    <Description className="mb-16 text-12 leading-18">
      {description}
    </Description>
    <Button>{button}</Button>
  </Thumbnail>
);
