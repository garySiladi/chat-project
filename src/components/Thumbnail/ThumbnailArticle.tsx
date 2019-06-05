import React, { FC } from "react";
import { Button } from "./Button";
import { Description } from "./Description";
import { Image } from "./Image";
import { Name } from "./Name";
import { Date } from "./Date";
import { Thumbnail } from "./Thumbnail";

interface IProps {
  date?: string;
  name: string;
  description: string;
  button: string;
  icon: string;
  alt: string;
}

export const ThumbnailArticle: FC<IProps> = ({
  date,
  name,
  description,
  button,
  icon,
  alt
}) => (
  <Thumbnail>
    <Image icon={icon} alt={alt} className="mb-8" />
    <Date>{date}</Date>
    <Name className="font-lato">{name}</Name>
    <Description className="text-16 leading-22 mb-12">
      {description}
    </Description>
    <Button className="mb-8">{button}</Button>
  </Thumbnail>
);
