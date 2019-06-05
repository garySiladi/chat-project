import React from "react";
import { List } from "./List";
import { Description } from "../Description/Description";
import { Logo } from "./Logo";
import { DescriptionWrapper } from "../Description/DescriptionWrapper";
import { DescriptionAndButton } from "../Description/DescriptionAndButton";
import { BackgroundImage } from "./BackgroundImage";
import { NewestArticles } from "./NewestArticles";

export const LandingPageWrapper = () => {
  return (
    <>
      <div className="pt-16 pb-96">
        <Logo />
      </div>
      <DescriptionWrapper>
        <Description>
          CHAT je unikátnym medzinárodným arteterapeutickým centrom v Košiciach
          pre deti, mládež a dospelých, ktoré sa zaoberá liečbou umením použitím
          nielen tradičných foriem umenia, ale aj digitálneho umenia.
        </Description>
      </DescriptionWrapper>
      <List />
      <DescriptionWrapper>
        <DescriptionAndButton />
      </DescriptionWrapper>
      <NewestArticles />
    </>
  );
};
