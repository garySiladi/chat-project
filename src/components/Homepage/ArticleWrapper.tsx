import React, { FC } from "react";
import { Thumbnail } from "../Thumbnail/Thumbnail";
import { backendHostname } from "../../RoutesConfig";

export interface IArticle {
  id: number;
  heading: string;
  croppedInsight: string;
  titlePhoto: string;
}
export const ArticleWrapper: FC<IArticle> = ({
  id,
  heading,
  croppedInsight,
  titlePhoto
}) => (
  <div className="w-238 h-408 ml-0 mt-8 lg:mt-0 lg:ml-8">
    <Thumbnail
      name={heading}
      icon={`${backendHostname}/image/214/160/${titlePhoto}`}
      alt={heading}
      description={croppedInsight}
    />
  </div>
);
