import React, { FC } from "react";
import { Button } from "./Button";
import { Description } from "./Description";
import { Image } from "./Image";
import { Name } from "./Name";

interface IProps {
  description: string;
  name: string;
  icon: string;
  alt: string;
}
export const Thumbnail: FC<IProps> = ({ description, name, icon, alt }) => (
  <div className="p-2 w-full shadow" style={{ height: "304px" }}>
    <Image icon={icon} alt={alt} classname="mb-2" />
    <Name>{name}</Name>
    <Description classname="mb-4">{description}</Description>
    <Button>Zistiť viac</Button>
  </div>
);
