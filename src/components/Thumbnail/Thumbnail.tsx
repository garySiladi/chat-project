import React, { FC } from "react";
import { Button } from "./Button";
import { Description } from "./Description";
import { Image } from "./Image";
import { Name } from "./Name";
import { Date } from "./Date";

interface IProps {
  date?: string;
  description: string;
  name: string;
  icon: string;
  alt: string;
  button: string;
}

export const Thumbnail: FC<IProps> = ({
  description,
  name,
  icon,
  alt,
  date,
  button
}) => (
  <div className="p-8 shadow h-full flex-col flex justify-between font-lato">
    <Image icon={icon} alt={alt} classname="mb-8" />
    <Date>{date}</Date>
    <Name classname="">{name}</Name>
    <Description classname="mb-16">{description}</Description>
    <Button>{button}</Button>
  </div>
);
