import React, { FC } from "react";
import { backendHostname } from "../../RoutesConfig";
import { ThumbnailArticle } from "../Thumbnail/ThumbnailArticle";

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
  <div className="ml-0 mt-8 lg:mt-0 lg:ml-8">
    <ThumbnailArticle
      date="99.99.2019"
      name={heading}
      icon={titlePhoto}
      alt={heading}
      description={croppedInsight}
    />
  </div>
);
