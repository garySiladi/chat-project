import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { Description } from "../Description/Description";
import { DescriptionAndButton } from "../Description/DescriptionAndButton";
import { ArticlesCollection } from "../ArticlesCollection";
import { Wrapper } from "../ArticlesCollection/ArticlepageWrapper";

export const ArticlesCollectionPage: FC<RouteComponentProps> = () => (
  <ArticlesCollection limit="6">
    {articles => (
      <>
        <div className="text-center pt-40 pb-20">
          <Description>Chcete sa dozvedieť viac o arteterapii?</Description>
        </div>
        <Wrapper articles={articles} />
        <div className="text-center pt-40 pb-20">
          <DescriptionAndButton />
        </div>
      </>
    )}
  </ArticlesCollection>
);
