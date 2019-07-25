import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { Description } from "../Description/Description";
import { DescriptionAndButton } from "../Description/DescriptionAndButton";
import { ArticlepageArticlesCollection } from "../ArticlesCollection/ArticlepageArticlesCollection";

export const ArticlesCollectionPage: FC<RouteComponentProps> = () => (
  <>
    <div className="text-center pt-40 pb-20">
      <Description>Chcete sa dozvedieť viac o arteterapii?</Description>
    </div>
    <ArticlepageArticlesCollection />
    <div className="text-center pt-40 pb-20">
      <DescriptionAndButton />
    </div>
  </>
);
