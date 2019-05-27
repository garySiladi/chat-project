import React from "react";
import { List } from "./List";
import { Description } from "../Description/Description";
import { Logo } from "./Logo";
import { DescriptionWrapper } from "../Description/DescriptionWrapper";
import { DescAndButton } from "../Description/DescrAndButton";
import { BackgroundImage } from "./BackgroundImage";
import background from "../../static/svg/backgroundImage.svg";

export const LandingPageWrapper = () => {
  return (
    <BackgroundImage url={background} isCover>
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
        <DescAndButton />
      </DescriptionWrapper>
    </BackgroundImage>
  );
};
