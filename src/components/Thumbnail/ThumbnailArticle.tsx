import React, { FC } from "react";
import { Button } from "./Button";
import { Description } from "./Description";
import { Image } from "./Image";
import { Name } from "./Name";
import { Date } from "./Date";
import { Thumbnail } from "./Thumbnail";

interface IProps {
  date: string;
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
  <Thumbnail className="w-238 h-408 border border-solid border-lilac">
    <Image icon={icon} alt={alt} className="mb-8 w-full h-160" />
    <Date className="mb-4">{date}</Date>
    <Name className="font-lato mb-8">{name}</Name>
    <Description className="text-16 leading-22 mb-12">
      {description}
    </Description>
    <Button className="mb-8">{button}</Button>
  </Thumbnail>
);
