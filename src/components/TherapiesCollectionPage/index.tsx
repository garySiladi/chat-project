import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { Description } from "../Description/Description";
import { DescriptionAndButton } from "../Description/DescriptionAndButton";
import { TherapiesCollection } from "../TherapiesCollection";

export const TherapiesCollectionPage: FC<RouteComponentProps> = () => (
  <>
    <div className="flex justify-center text-center pt-40 pb-20">
      <Description>
        CHAT ponúka individuálne arteterapie pre deti, dospleých a rodiny.
      </Description>
    </div>
    <TherapiesCollection />
    <div className="flex justify-center text-center pt-40 pb-20">
      <DescriptionAndButton />
    </div>
  </>
);
