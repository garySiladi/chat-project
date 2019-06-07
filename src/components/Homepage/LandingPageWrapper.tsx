import React from "react";
import { List } from "./List";
import { Button } from "./Button";
import { Description } from "./Description";
import { Logo } from "./Logo";
import { DescriptionWrapper } from "./DescriptionWrapper";
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
        <Description>
          Vyskúšajte si CHAT. Registrujte sa a získajte prvú hodinu zdarma.
        </Description>
        <div className="w-192 m-auto mt-24 bg-black rounded-8">
          <Button>Registrovať sa</Button>
        </div>
      </DescriptionWrapper>
      <NewestArticles />
    </>
  );
};
