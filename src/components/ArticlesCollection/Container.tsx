import React from "react";
import { ArticlesCollection } from "./ArticlesCollection";
import { BackgroundImage } from "../Homepage/BackgroundImage";
import { Description } from "../Description/Description";
import { DescriptionAndButton } from "../Description/DescriptionAndButton";

export const Container = () => (
  <BackgroundImage>
    <div className="text-center pt-40 pb-20">
      <Description>Chcete sa dozvedieť viac o arteterapii?</Description>
    </div>
    <ArticlesCollection />
    <div className="text-center pt-40 pb-20">
      <DescriptionAndButton />
    </div>
  </BackgroundImage>
);
