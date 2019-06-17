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
  <Thumbnail className="w-238 h-408 border border-solid border-lilac">
    <Image icon={icon} alt={alt} className="mb-8 w-full h-166" />
    <Date className="mb-4 h-12">{date}</Date>
    <Name className="font-lato mb-8 leading-22">{name}</Name>
    <Description className="text-16 leading-22 mb-12 h-86">
      {description}
    </Description>
    <Button className="mb-8">Zobraziť článok</Button>
  </Thumbnail>
);
